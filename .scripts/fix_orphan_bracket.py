path = 'src/database/exercises.js'
content = open(path).read()

old = '''    { type: 'truefalse', prompt: '"Went" est le présent de "go"', answer: false }
  ],

  ]
}

export function getExercises(lessonId) {'''

new = '''    { type: 'truefalse', prompt: '"Went" est le présent de "go"', answer: false }
  ]
}

export function getExercises(lessonId) {'''

if old not in content:
    print('MOTIF NON TROUVÉ')
else:
    content = content.replace(old, new, 1)
    open(path, 'w').write(content)
    print('ok')
