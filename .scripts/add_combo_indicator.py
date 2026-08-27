path = 'src/screens/Exercise/index.jsx'
content = open(path).read()

content = content.replace(
    "import RewardChest from '../../components/RewardChest'",
    "import RewardChest from '../../components/RewardChest'\nimport ComboIndicator from '../../components/ComboIndicator'"
)

old = '''        <div key={step} className="font-display text-2xl text-slate-100 mb-7 animate-screenIn">
          {q.prompt}
        </div>'''

new = '''        <ComboIndicator combo={combo} />
        <div key={step} className="font-display text-2xl text-slate-100 mb-7 animate-screenIn">
          {q.prompt}
        </div>'''

if old not in content:
    print('MOTIF NON TROUVÉ')
else:
    content = content.replace(old, new, 1)
    open(path, 'w').write(content)
    print('ok')
