path = 'src/database/lessonContent.js'
content = open(path).read()

old = '''    examples: [
      { en: 'You should see a doctor.', fr: 'Tu devrais voir un médecin.' }
    ]
  },

  ,

  // ===== UNITÉ 16 — Débattre ====='''

new = '''    examples: [
      { en: 'You should see a doctor.', fr: 'Tu devrais voir un médecin.' }
    ]
  },

  // ===== UNITÉ 16 — Débattre ====='''

if old not in content:
    print('MOTIF NON TROUVÉ')
else:
    content = content.replace(old, new, 1)
    open(path, 'w').write(content)
    print('ok')
