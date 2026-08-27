path = 'src/database/lessonContent.js'
content = open(path).read()

old = '''    examples: [
      { en: 'We went to the beach last summer.', fr: 'Nous sommes allés à la plage l\\'été dernier.' }
    ]
  },

  ,

  // ===== UNITÉ 13 — Futur & projets ====='''

new = '''    examples: [
      { en: 'We went to the beach last summer.', fr: 'Nous sommes allés à la plage l\\'été dernier.' }
    ]
  },

  // ===== UNITÉ 13 — Futur & projets ====='''

if old not in content:
    print('MOTIF NON TROUVÉ')
else:
    content = content.replace(old, new, 1)
    open(path, 'w').write(content)
    print('ok')
