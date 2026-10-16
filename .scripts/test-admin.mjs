import fs from 'fs'
import { initializeApp, cert } from 'firebase-admin/app'
import { getFirestore } from 'firebase-admin/firestore'
const j = JSON.parse(fs.readFileSync(process.argv[2], 'utf8'))
initializeApp({ credential: cert(j) })
const snap = await getFirestore().collection('users').limit(1).get()
console.log('OK', snap.size, j.private_key_id.slice(0, 8))
