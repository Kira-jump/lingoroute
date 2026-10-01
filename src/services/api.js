import { auth } from './firebase'

export async function callGame(action, extra = {}) {
  const user = auth.currentUser
  if (!user) throw new Error('not_logged_in')
  const token = await user.getIdToken()
  const res = await fetch('/api/game', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
    body: JSON.stringify({ action, ...extra })
  })
  const data = await res.json().catch(() => ({ ok: false, error: 'bad_response' }))
  if (!data.ok) {
    const e = new Error(data.error || 'server_error')
    e.status = res.status
    throw e
  }
  return data.updates
}
