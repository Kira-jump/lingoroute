path = 'src/database/lessonContent.js'
content = open(path).read()

old = '''    examples: [
      { en: 'What is your job?', fr: 'Quel est ton métier ?' }
    ]
  },


export function getLessonContent(lessonId) {'''

new = '''    examples: [
      { en: 'What is your job?', fr: 'Quel est ton métier ?' }
    ]
  }
}

export function getLessonContent(lessonId) {'''

if old not in content:
    print('MOTIF NON TROUVÉ')
else:
    content = content.replace(old, new, 1)
    open(path, 'w').write(content)
    print('ok')
