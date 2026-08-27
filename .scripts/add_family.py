path = 'src/screens/Home/index.jsx'
content = open(path).read()

content = content.replace(
    "import Mascot from '../../components/Mascot'",
    "import FamilyRow from '../../components/FamilyRow'"
)

old = '''          <div className="flex items-center gap-3">
            <Mascot mood="idle" size={52} />
            <div>'''
new = '''          <div className="flex items-center gap-3">
            <FamilyRow level={level} completedLessons={completedLessons} />
            <div>'''

if old not in content:
    print('MOTIF NON TROUVÉ')
else:
    content = content.replace(old, new, 1)
    open(path, 'w').write(content)
    print('ok')
