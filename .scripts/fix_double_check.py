path = 'src/screens/Exercise/index.jsx'
content = open(path).read()

old = "  async function handleCheck() {\n    if (checked) return"
new = "  async function handleCheck() {\n    if (checked || checking) return\n    setChecking(true)"

if old not in content:
    print('MOTIF 1 NON TROUVÉ')
else:
    content = content.replace(old, new, 1)

old2 = "  const [missed, setMissed] = useState([])"
new2 = "  const [missed, setMissed] = useState([])\n  const [checking, setChecking] = useState(false)"
if old2 not in content:
    print('MOTIF 2 NON TROUVÉ')
else:
    content = content.replace(old2, new2, 1)

old3 = "      setMissed((m) => [...m, { key: questionKey(lessonId, q), lessonId, question: q }])\n    }\n    setChecked(true)\n  }"
new3 = "      setMissed((m) => [...m, { key: questionKey(lessonId, q), lessonId, question: q }])\n    }\n    setChecked(true)\n    setChecking(false)\n  }"
if old3 not in content:
    print('MOTIF 3 NON TROUVÉ')
else:
    content = content.replace(old3, new3, 1)

open(path, 'w').write(content)
print('done')
