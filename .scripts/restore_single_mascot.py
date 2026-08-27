path = 'src/screens/Home/index.jsx'
content = open(path).read()

content = content.replace(
    "import FamilyRow from '../../components/FamilyRow'",
    "import Mascot from '../../components/Mascot'"
)

old = '''          <div className="flex items-center gap-3">
            <div>'''
new = '''          <div className="flex items-center gap-3">
            <Mascot mood="idle" variant="dad" size={52} />
            <div>'''

if old not in content:
    print('MOTIF NON TROUVÉ')
else:
    content = content.replace(old, new, 1)
    open(path, 'w').write(content)
    print('ok')
