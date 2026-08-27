path = 'src/screens/Home/index.jsx'
content = open(path).read()

content = content.replace(
    "import AppIcon from '../../utils/icons'",
    "import AppIcon from '../../utils/icons'\nimport Mascot from '../../components/Mascot'"
)

old = '''          <div>
            <div className="font-display text-xl text-slate-100">
              Bonjour {profile.name}
            </div>
            <div className="flex items-center gap-1 text-amber-400 text-sm font-mono mt-0.5">
              <AppIcon name="Flame" className="w-4 h-4" />
              {profile.streak ?? 0} jour{(profile.streak ?? 0) > 1 ? 's' : ''}
            </div>
          </div>'''

new = '''          <div className="flex items-center gap-3">
            <Mascot mood="idle" size={52} />
            <div>
              <div className="font-display text-xl text-slate-100">
                Bonjour {profile.name}
              </div>
              <div className="flex items-center gap-1 text-amber-400 text-sm font-mono mt-0.5">
                <AppIcon name="Flame" className="w-4 h-4" />
                {profile.streak ?? 0} jour{(profile.streak ?? 0) > 1 ? 's' : ''}
              </div>
            </div>
          </div>'''

if old not in content:
    print('MOTIF NON TROUVÉ')
else:
    content = content.replace(old, new, 1)
    open(path, 'w').write(content)
    print('ok')
