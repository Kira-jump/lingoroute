path = 'src/database/exercises.js'
content = open(path).read()

old = '''    { type: 'truefalse', prompt: '"Deadline" veut dire "pause déjeuner"', answer: false }
  ]
}

  // ===== UNITÉ 11 — Donner son avis ====='''

new = '''    { type: 'truefalse', prompt: '"Deadline" veut dire "pause déjeuner"', answer: false }
  ],

  // ===== UNITÉ 11 — Donner son avis ====='''

if old not in content:
    print('MOTIF NON TROUVÉ')
else:
    content = content.replace(old, new, 1)
    open(path, 'w').write(content)
    print('ok')
