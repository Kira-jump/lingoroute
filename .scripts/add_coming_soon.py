path = 'src/screens/Home/index.jsx'
content = open(path).read()

marker = '''        </div>
      </div>

      {showHeartsModal && ('''

new_block = '''        </div>

        <div className="mt-10 animate-fadeInUp">
          <div className="text-xs font-mono tracking-widest text-slate-500 uppercase mb-1">
            Unité 21
          </div>
          <div className="text-slate-500 text-sm mb-4">Nouveau palier — Perfectionnement</div>
          <div className="glass-card p-5 flex items-center gap-4 border-dashed border-2 border-blue-400/20">
            <div className="w-14 h-14 rounded-full bg-blue-900/40 flex items-center justify-center flex-shrink-0">
              <AppIcon name="Sparkles" className="w-6 h-6 text-amber-400/70" />
            </div>
            <div>
              <div className="text-slate-300 font-display font-semibold">Bientôt disponible</div>
              <div className="text-slate-500 text-xs mt-0.5">De nouvelles unités arrivent régulièrement !</div>
            </div>
          </div>
        </div>
      </div>

      {showHeartsModal && ('''

if marker not in content:
    print('MOTIF NON TROUVÉ')
else:
    content = content.replace(marker, new_block, 1)
    open(path, 'w').write(content)
    print('ok')
