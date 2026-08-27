path = 'src/screens/Lesson/index.jsx'
content = open(path).read()

old = '''          {content.vocab.map((v, i) => (
            <div key={i} className="glass-card px-4 py-3 flex items-center justify-between animate-fadeInUp">
              <span className="font-display text-slate-100 font-medium">{v.en}</span>
              <span className="text-amber-400 text-sm">{v.fr}</span>
            </div>
          ))}'''

new = '''          {content.vocab.map((v, i) => (
            <div key={i} className="glass-card px-4 py-3 flex items-center justify-between animate-fadeInUp">
              <div>
                <div className="font-display text-slate-100 font-medium">{v.en}</div>
                {v.phon && <div className="text-slate-500 text-xs italic mt-0.5">[{v.phon}]</div>}
              </div>
              <span className="text-amber-400 text-sm">{v.fr}</span>
            </div>
          ))}'''

if old not in content:
    print('MOTIF NON TROUVÉ')
else:
    content = content.replace(old, new, 1)
    open(path, 'w').write(content)
    print('ok')
