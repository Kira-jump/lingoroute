path = 'src/screens/Home/index.jsx'
content = open(path).read()

old = '''          <div className="flex items-center gap-3">
            <FamilyRow level={level} completedLessons={completedLessons} />
            <div>'''
new = '''          <div className="flex items-center gap-3">
            <div>'''

if old not in content:
    print('MOTIF NON TROUVÉ')
else:
    content = content.replace(old, new, 1)
    open(path, 'w').write(content)
    print('ok')
