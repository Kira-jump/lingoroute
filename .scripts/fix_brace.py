path = 'src/database/lessonContent.js'
content = open(path).read()

old = '''    examples: [
      { en: 'We have a cat.', fr: 'Nous avons un chat.' },
      { en: 'They work on Monday.', fr: 'Ils travaillent le lundi.' }
    ]
  }
}

  // ===== UNITÉ 6 — Courses ====='''

new = '''    examples: [
      { en: 'We have a cat.', fr: 'Nous avons un chat.' },
      { en: 'They work on Monday.', fr: 'Ils travaillent le lundi.' }
    ]
  },

  // ===== UNITÉ 6 — Courses ====='''

if old not in content:
    print('MOTIF NON TROUVÉ')
else:
    content = content.replace(old, new, 1)
    open(path, 'w').write(content)
    print('ok')
