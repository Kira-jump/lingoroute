path = 'src/database/exercises.js'
content = open(path).read()

marker = '''  ]
}

export function getExercises(lessonId) {'''

unit12 = '''  ],

  // ===== UNITÉ 12 — Raconter le passé =====
  l34: [
    { type: 'qcm', prompt: 'Passé de "go" ?', options: ['Went', 'Goed', 'Gone'], answer: 'Went' },
    { type: 'fill', prompt: 'Complète : "I ___ (suis all\\u00e9) to the park yesterday."', answer: 'went' },
    { type: 'translate', prompt: 'Traduis : "Elle a mangé une pomme."', answer: 'She ate an apple' },
    { type: 'qcm', prompt: 'Passé de "eat" ?', options: ['Ate', 'Eated', 'Eaten'], answer: 'Ate' },
    { type: 'drag', prompt: 'Remets dans l\\'ordre : "yesterday / to / school / I / went"', words: ['I', 'went', 'to', 'school', 'yesterday'], answer: 'I went to school yesterday' },
    { type: 'truefalse', prompt: 'Le passé de "have" est "had"', answer: true },
    { type: 'translate', prompt: 'Traduis : "Nous avons vu un film hier soir."', answer: 'We watched a movie last night' },
    { type: 'qcm', prompt: 'Passé de "see" ?', options: ['Saw', 'Seed', 'Seen'], answer: 'Saw' },
    { type: 'fill', prompt: 'Complète : "They ___ (\\u00e9taient) happy."', answer: 'were' }
  ],
  l35: [
    { type: 'qcm', prompt: 'Comment dit-on "vacances" ?', options: ['Vacation', 'Work', 'School'], answer: 'Vacation' },
    { type: 'fill', prompt: 'Complète : "We ___ (sommes all\\u00e9s) to the beach last summer."', answer: 'went' },
    { type: 'translate', prompt: 'Traduis : "J\\'ai visité Paris l\\'année dernière."', answer: 'I visited Paris last year' },
    { type: 'qcm', prompt: '"Last summer" veut dire...', options: ["L'été dernier", "Cet été", "L'été prochain"], answer: "L'été dernier" },
    { type: 'drag', prompt: 'Remets dans l\\'ordre : "amazing / was / trip / The"', words: ['The', 'trip', 'was', 'amazing'], answer: 'The trip was amazing' },
    { type: 'truefalse', prompt: '"I stayed" est le passé de "to stay"', answer: true },
    { type: 'translate', prompt: 'Traduis : "Nous avons nagé dans la mer."', answer: 'We swam in the sea' },
    { type: 'qcm', prompt: 'Passé de "swim" ?', options: ['Swam', 'Swimmed', 'Swum'], answer: 'Swam' },
    { type: 'fill', prompt: 'Complète : "It ___ (\\u00e9tait) a wonderful trip."', answer: 'was' }
  ],
  l36: [
    { type: 'qcm', prompt: 'Comment commencer une histoire ?', options: ['Once upon a time', 'The end', 'Thank you'], answer: 'Once upon a time' },
    { type: 'fill', prompt: 'Complète : "Then, she ___ (a trouv\\u00e9) a key."', answer: 'found' },
    { type: 'translate', prompt: 'Traduis : "Soudain, il a entendu un bruit."', answer: 'Suddenly, he heard a noise' },
    { type: 'qcm', prompt: '"Suddenly" veut dire...', options: ['Soudain', 'Finalement', 'Avant'], answer: 'Soudain' },
    { type: 'drag', prompt: 'Remets dans l\\'ordre : "happily / lived / They / ever / after"', words: ['They', 'lived', 'happily', 'ever', 'after'], answer: 'They lived happily ever after' },
    { type: 'truefalse', prompt: '"The end" se met au début d\\'une histoire', answer: false },
    { type: 'translate', prompt: 'Traduis : "Il était une fois une princesse."', answer: 'Once upon a time there was a princess' },
    { type: 'qcm', prompt: 'Comment dit-on "finalement" ?', options: ['Finally', 'Suddenly', 'Never'], answer: 'Finally' },
    { type: 'fill', prompt: 'Complète : "___ (finalement), they found the treasure."', answer: 'Finally' }
  ],
  b12: [
    { type: 'qcm', prompt: 'Passé de "come" ?', options: ['Came', 'Comed', 'Come'], answer: 'Came' },
    { type: 'translate', prompt: 'Traduis : "Nous sommes allés à la plage l\\'été dernier."', answer: 'We went to the beach last summer' },
    { type: 'fill', prompt: 'Complète : "I ___ (ai vu) a great movie yesterday."', answer: 'saw' },
    { type: 'qcm', prompt: 'Comment dit-on "il était une fois" ?', options: ['Once upon a time', 'One day', 'The end'], answer: 'Once upon a time' },
    { type: 'drag', prompt: 'Remets dans l\\'ordre : "trip / was / The / amazing"', words: ['The', 'trip', 'was', 'amazing'], answer: 'The trip was amazing' },
    { type: 'translate', prompt: 'Traduis : "Soudain, elle a trouvé la clé."', answer: 'Suddenly, she found the key' },
    { type: 'qcm', prompt: 'Passé de "have" ?', options: ['Had', 'Haved', 'Have'], answer: 'Had' },
    { type: 'fill', prompt: 'Complète : "They ___ (\\u00e9taient) very happy."', answer: 'were' },
    { type: 'truefalse', prompt: '"Went" est le présent de "go"', answer: false }
  ],

''' + marker

if marker not in content:
    print('MOTIF NON TROUVÉ')
else:
    content = content.replace(marker, unit12, 1)
    open(path, 'w').write(content)
    print('ok')
