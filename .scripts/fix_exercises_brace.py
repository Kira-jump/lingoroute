path = 'src/database/exercises.js'
content = open(path).read()

old = '''    { type: 'truefalse', prompt: '"She like music" est correct sans "s" à like', answer: false }
  ]
}

  // ===== UNITÉ 6 — Courses =====
  l16: ['''

new = '''    { type: 'truefalse', prompt: '"She like music" est correct sans "s" à like', answer: false }
  ],

  // ===== UNITÉ 6 — Courses =====
  l16: ['''

if old not in content:
    print('MOTIF NON TROUVÉ')
else:
    content = content.replace(old, new, 1)
    open(path, 'w').write(content)
    print('ok')
