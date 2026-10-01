import { initializeApp, getApps, cert } from 'firebase-admin/app'
import { getAuth } from 'firebase-admin/auth'
import { getFirestore } from 'firebase-admin/firestore'

if (!getApps().length) {
  initializeApp({ credential: cert(JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT)) })
}
const db = getFirestore()

const ACCESSORY_PRICES = { glasses: 20, hat: 35, bandana: 25, crown: 60 }
const DAILY = 15, LONG7 = 50, LONG10 = 80, CHEST = 10
const HEART_PRICE = 69, READING_PRICE = 100
const CHEST_COOLDOWN_MS = 20000
const STORY_XP = 20, STORY_GEMS = 10
const STORY_FINAL_XP = 30, STORY_FINAL_GEMS = 20

function fail(status, error) {
  const e = new Error(error)
  e.status = status
  throw e
}

function compute(action, p, body) {
  const gems = p.gems ?? 0
  switch (action) {
    case 'claimDaily':
      if (p.dailyClaimed) fail(400, 'already_claimed')
      if ((p.dailyProgress ?? 0) < (p.dailyTarget ?? 10)) fail(400, 'not_completed')
      return { dailyClaimed: true, gems: gems + DAILY, longDays: (p.longDays ?? 0) + 1 }
    case 'claimLong7':
      if (p.long7Claimed) fail(400, 'already_claimed')
      if ((p.streak ?? 0) < 7) fail(400, 'not_ready')
      return { long7Claimed: true, gems: gems + LONG7 }
    case 'claimLong10':
      if (p.long10Claimed) fail(400, 'already_claimed')
      if ((p.longDays ?? 0) < 10) fail(400, 'not_ready')
      return { long10Claimed: true, gems: gems + LONG10 }
    case 'chest': {
      const now = Date.now()
      if (now - (p.lastChestAt ?? 0) < CHEST_COOLDOWN_MS) fail(429, 'too_fast')
      return { gems: gems + CHEST, lastChestAt: now }
    }
    case 'readStory': {
      const id = String(body.unitId || '')
      const m = /^u(\d{1,2})$/.exec(id)
      const n = m ? Number(m[1]) : 0
      if (n < 1 || n > 20) fail(400, 'unknown_story')
      if (!(p.completedLessons || []).includes('b' + n)) fail(400, 'not_ready')
      const read = p.readStories || []
      if (read.includes(id)) fail(400, 'already_read')
      return { readStories: [...read, id], xp: (p.xp ?? 0) + (n === 20 ? STORY_FINAL_XP : STORY_XP), gems: gems + (n === 20 ? STORY_FINAL_GEMS : STORY_GEMS) }
    }
    case 'buyAccessory': {
      const price = ACCESSORY_PRICES[body.accessoryId]
      const owned = p.ownedAccessories || []
      if (!price) fail(400, 'unknown_item')
      if (owned.includes(body.accessoryId)) fail(400, 'already_owned')
      if (gems < price) fail(400, 'not_enough_gems')
      return { ownedAccessories: [...owned, body.accessoryId], gems: gems - price }
    }
    case 'buyHeart': {
      if (gems < HEART_PRICE) fail(400, 'not_enough_gems')
      const hearts = Math.min(5, (p.hearts ?? 0) + 1)
      return { hearts, gems: gems - HEART_PRICE, heartsUpdatedAt: hearts >= 5 ? null : p.heartsUpdatedAt ?? null }
    }
    case 'unlockReading':
      if (p.readingUnlocked) fail(400, 'already_unlocked')
      if (gems < READING_PRICE) fail(400, 'not_enough_gems')
      return { readingUnlocked: true, gems: gems - READING_PRICE }
    default:
      fail(400, 'unknown_action')
  }
}

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'method' })
  try {
    const token = (req.headers.authorization || '').replace('Bearer ', '')
    if (!token) fail(401, 'no_token')
    const { uid } = await getAuth().verifyIdToken(token)
    const body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body || {}
    const ref = db.collection('users').doc(uid)
    const updates = await db.runTransaction(async (tx) => {
      const snap = await tx.get(ref)
      if (!snap.exists) fail(404, 'no_profile')
      const u = compute(body.action, snap.data(), body)
      tx.update(ref, u)
      return u
    })
    return res.status(200).json({ ok: true, updates })
  } catch (e) {
    if (!e.status) console.error('GAME_API_ERROR', e && e.code, e && e.message)
    return res.status(e.status || 500).json({ ok: false, error: e.status ? e.message : 'server_error' })
  }
}
