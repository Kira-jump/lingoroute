path = 'src/screens/Home/index.jsx'
content = open(path).read()

old = '''          <div className="font-display text-xl text-slate-100 flex items-center gap-2">
            <AppIcon name="Flame" className="w-6 h-6 text-amber-400" />
            Bonjour {profile.name}
          </div>'''

new = '''          <div>
            <div className="font-display text-xl text-slate-100">
              Bonjour {profile.name}
            </div>
            <div className="flex items-center gap-1 text-amber-400 text-sm font-mono mt-0.5">
              <AppIcon name="Flame" className="w-4 h-4" />
              {profile.streak ?? 0} jour{(profile.streak ?? 0) > 1 ? 's' : ''}
            </div>
          </div>'''

if old not in content:
    print('MOTIF NON TROUVÉ — envoie-moi le fichier complet pour vérifier')
else:
    content = content.replace(old, new, 1)
    open(path, 'w').write(content)
    print('ok')
