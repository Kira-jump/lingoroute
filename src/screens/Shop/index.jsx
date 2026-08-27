import { BookOpen } from 'lucide-react'
import { useEffect, useState } from 'react'
import { collection, addDoc, query, orderBy, onSnapshot, serverTimestamp } from 'firebase/firestore'
import { db } from '../../services/firebase'
import { useAuth } from '../../context/AuthContext'
import BottomNav from '../../components/BottomNav'

export default function Shop() {
  const { user, profile } = useAuth()
  const [books, setBooks] = useState([])
  const [showForm, setShowForm] = useState(false)
  const [title, setTitle] = useState('')
  const [price, setPrice] = useState('')
  const [description, setDescription] = useState('')
  const [saving, setSaving] = useState(false)

  useEffect(() => {
    const q = query(collection(db, 'books'), orderBy('createdAt', 'desc'))
    const unsub = onSnapshot(q, (snap) => {
      setBooks(snap.docs.map((d) => ({ id: d.id, ...d.data() })))
    })
    return unsub
  }, [])

  async function handleAdd(e) {
    e.preventDefault()
    setSaving(true)
    try {
      await addDoc(collection(db, 'books'), {
        title,
        price: Number(price),
        description,
        sellerId: user.uid,
        sellerName: profile?.name || 'Anonyme',
        createdAt: serverTimestamp()
      })
      setTitle('')
      setPrice('')
      setDescription('')
      setShowForm(false)
    } finally {
      setSaving(false)
    }
  }

  return (
    <div className="min-h-screen bg-blue-950 pb-28">
      <div className="max-w-md mx-auto px-5 pt-8">
        <div className="flex items-center justify-between animate-fadeInUp">
          <div className="font-display text-xl text-slate-100"><span className="inline-flex items-center gap-2"><BookOpen className="w-5 h-5 text-amber-400" /> Mes livres</span></div>
          <button
            className="text-amber-400 text-sm font-mono border border-amber-400/40 rounded-xl px-3 py-1.5"
            onClick={() => setShowForm((v) => !v)}
          >
            {showForm ? 'Annuler' : '+ Vendre'}
          </button>
        </div>

        {showForm && (
          <form onSubmit={handleAdd} className="glass-card p-5 mt-4 animate-fadeInUp">
            <input
              className="input-field"
              placeholder="Titre du livre"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
            <input
              className="input-field"
              type="number"
              min="0"
              placeholder="Prix (€)"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
            />
            <textarea
              className="input-field resize-none"
              rows={3}
              placeholder="Description (état, édition...)"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <button className="btn-primary" disabled={saving}>
              {saving ? 'Publication...' : 'Publier l\'annonce'}
            </button>
          </form>
        )}

        <div className="mt-6 space-y-3">
          {books.length === 0 && (
            <div className="glass-card p-5 text-center text-slate-400 text-sm animate-fadeInUp">
              Aucun livre en vente pour l'instant. Sois le premier à publier une annonce !
            </div>
          )}
          {books.map((book) => (
            <div key={book.id} className="glass-card p-4 animate-fadeInUp">
              <div className="flex items-start justify-between">
                <div className="font-display text-slate-100 font-semibold">{book.title}</div>
                <div className="text-amber-400 font-mono text-sm whitespace-nowrap ml-3">{book.price} €</div>
              </div>
              {book.description && (
                <div className="text-slate-400 text-sm mt-1">{book.description}</div>
              )}
              <div className="text-slate-500 text-xs mt-2">Vendu par {book.sellerName}</div>
            </div>
          ))}
        </div>
      </div>
      <BottomNav />
    </div>
  )
}
