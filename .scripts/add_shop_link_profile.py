path = 'src/screens/Profile/index.jsx'
content = open(path).read()

old = '''          <div className="font-display text-xl text-slate-100 mt-3">{profile.name}</div>
          <div className="text-amber-400 text-sm font-mono">Niveau {level}</div>
        </div>'''

new = '''          <div className="font-display text-xl text-slate-100 mt-3">{profile.name}</div>
          <div className="text-amber-400 text-sm font-mono">Niveau {level}</div>
          <button
            className="mt-3 text-xs bg-amber-400/15 text-amber-400 rounded-lg px-3 py-1.5"
            onClick={() => window.location.assign('/mascot-shop')}
          >
            🎩 Boutique du hamster
          </button>
        </div>'''

if old not in content:
    print('MOTIF NON TROUVÉ')
else:
    content = content.replace(old, new, 1)
    open(path, 'w').write(content)
    print('ok')
