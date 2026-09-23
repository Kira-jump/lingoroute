path = 'src/screens/Shop/index.jsx'
content = open(path).read()

old = "  const { user, profile } = useAuth()"
new = "  const { user, profile } = useAuth()\n  const isAdmin = user?.uid === 'awgJ9QUC8UR8O5Tq3crDa8dEaOL2'"

if old not in content:
    print('MOTIF 1 NON TROUVÉ')
else:
    content = content.replace(old, new, 1)

old2 = '''          <button
            className="text-amber-400 text-sm font-mono border border-amber-400/40 rounded-xl px-3 py-1.5"
            onClick={() => setShowForm((v) => !v)}
          >
            {showForm ? 'Annuler' : '+ Vendre'}
          </button>'''

new2 = '''          {isAdmin && (
            <button
              className="text-amber-400 text-sm font-mono border border-amber-400/40 rounded-xl px-3 py-1.5"
              onClick={() => setShowForm((v) => !v)}
            >
              {showForm ? 'Annuler' : '+ Vendre'}
            </button>
          )}'''

if old2 not in content:
    print('MOTIF 2 NON TROUVÉ')
else:
    content = content.replace(old2, new2, 1)

open(path, 'w').write(content)
print('done')
