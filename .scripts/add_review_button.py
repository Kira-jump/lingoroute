path = 'src/screens/Home/index.jsx'
content = open(path).read()

old = '''        <div className="mt-8 space-y-10">
          {units.map((unit, unitIndex) => {'''

new = '''        {Object.keys(profile.mistakeBank || {}).length > 0 && (
          <button
            className="w-full glass-card p-4 mt-5 flex items-center gap-3 border-2 border-amber-400/20 animate-fadeInUp"
            onClick={() => navigate('/review')}
          >
            <div className="w-10 h-10 rounded-full bg-amber-400/15 flex items-center justify-center flex-shrink-0">
              <AppIcon name="Brain" className="w-5 h-5 text-amber-400" />
            </div>
            <div className="text-left">
              <div className="text-slate-100 font-display font-semibold text-sm">Réviser tes erreurs</div>
              <div className="text-slate-500 text-xs">{Object.keys(profile.mistakeBank).length} question(s) à revoir</div>
            </div>
          </button>
        )}

        <div className="mt-8 space-y-10">
          {units.map((unit, unitIndex) => {'''

if old not in content:
    print('MOTIF NON TROUVÉ')
else:
    content = content.replace(old, new, 1)
    open(path, 'w').write(content)
    print('ok')
