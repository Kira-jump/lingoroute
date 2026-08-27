path = 'src/database/exercises.js'
content = open(path).read()

marker = '''}

export function getExercises(lessonId) {'''

unit16 = '''  ,

  // ===== UNITÉ 16 — Débattre =====
  l46: [
    { type: 'qcm', prompt: 'Comment dit-on "d\\'un côté... de l\\'autre" ?', options: ['On one hand... on the other hand', 'First... then', 'Because... so'], answer: 'On one hand... on the other hand' },
    { type: 'fill', prompt: 'Complète : "___ (D\\'un côté), it saves time."', answer: 'On one hand' },
    { type: 'translate', prompt: 'Traduis : "Il y a des avantages et des inconvénients."', answer: 'There are advantages and disadvantages' },
    { type: 'qcm', prompt: '"Advantage" veut dire...', options: ['Avantage', 'Inconvénient', 'Problème'], answer: 'Avantage' },
    { type: 'drag', prompt: 'Remets dans l\\'ordre : "hand / one / On"', words: ['On', 'one', 'hand'], answer: 'On one hand' },
    { type: 'truefalse', prompt: '"Drawback" veut dire "inconvénient"', answer: true },
    { type: 'translate', prompt: 'Traduis : "Le principal inconvénient est le prix."', answer: 'The main drawback is the price' },
    { type: 'qcm', prompt: 'Comment dit-on "en revanche" ?', options: ['On the other hand', 'For example', 'In conclusion'], answer: 'On the other hand' },
    { type: 'fill', prompt: 'Complète : "___ (En revanche), it is expensive."', answer: 'On the other hand' }
  ],
  l47: [
    { type: 'qcm', prompt: 'Comment dit-on "il me semble que" ?', options: ['It seems to me that', 'I am sure that', 'I know that'], answer: 'It seems to me that' },
    { type: 'fill', prompt: 'Complète : "It ___ (semble) true, but I am not sure."', answer: 'seems' },
    { type: 'translate', prompt: 'Traduis : "Dans une certaine mesure, tu as raison."', answer: 'To some extent, you are right' },
    { type: 'qcm', prompt: '"Not necessarily" veut dire...', options: ['Pas nécessairement', 'Absolument', 'Jamais'], answer: 'Pas nécessairement' },
    { type: 'drag', prompt: 'Remets dans l\\'ordre : "extent / some / To"', words: ['To', 'some', 'extent'], answer: 'To some extent' },
    { type: 'truefalse', prompt: '"It depends" veut dire "ça dépend"', answer: true },
    { type: 'translate', prompt: 'Traduis : "Ça dépend de la situation."', answer: 'It depends on the situation' },
    { type: 'qcm', prompt: 'Comment dit-on "clairement" ?', options: ['Clearly', 'Rarely', 'Hardly'], answer: 'Clearly' },
    { type: 'fill', prompt: 'Complète : "It ___ (semble) complicated."', answer: 'seems' }
  ],
  l48: [
    { type: 'qcm', prompt: 'Comment dit-on "je suis convaincu que" ?', options: ['I am convinced that', 'I doubt that', 'I forget that'], answer: 'I am convinced that' },
    { type: 'fill', prompt: 'Complète : "I strongly ___ (crois) this is right."', answer: 'believe' },
    { type: 'translate', prompt: 'Traduis : "Cela prouve que j\\'ai raison."', answer: 'This proves that I am right' },
    { type: 'qcm', prompt: '"Evidence" veut dire...', options: ['Preuve', 'Opinion', 'Doute'], answer: 'Preuve' },
    { type: 'drag', prompt: 'Remets dans l\\'ordre : "convinced / am / I"', words: ['I', 'am', 'convinced'], answer: 'I am convinced' },
    { type: 'truefalse', prompt: '"Undoubtedly" veut dire "sans aucun doute"', answer: true },
    { type: 'translate', prompt: 'Traduis : "Sans aucun doute, c\\'est la meilleure option."', answer: 'Undoubtedly, this is the best option' },
    { type: 'qcm', prompt: 'Comment dit-on "convaincre" ?', options: ['To convince', 'To doubt', 'To forget'], answer: 'To convince' },
    { type: 'fill', prompt: 'Complète : "This ___ (prouve) my point."', answer: 'proves' }
  ],
  b16: [
    { type: 'qcm', prompt: 'Comment dit-on "avantage" ?', options: ['Advantage', 'Drawback', 'Problem'], answer: 'Advantage' },
    { type: 'translate', prompt: 'Traduis : "D\\'un côté c\\'est pratique, de l\\'autre c\\'est cher."', answer: 'On one hand it is practical, on the other hand it is expensive' },
    { type: 'fill', prompt: 'Complète : "It ___ (semble) reasonable."', answer: 'seems' },
    { type: 'qcm', prompt: 'Comment dit-on "convaincre" ?', options: ['To convince', 'To forget', 'To doubt'], answer: 'To convince' },
    { type: 'drag', prompt: 'Remets dans l\\'ordre : "some / extent / To"', words: ['To', 'some', 'extent'], answer: 'To some extent' },
    { type: 'translate', prompt: 'Traduis : "Ça dépend du contexte."', answer: 'It depends on the context' },
    { type: 'qcm', prompt: 'Comment dit-on "preuve" ?', options: ['Evidence', 'Opinion', 'Doubt'], answer: 'Evidence' },
    { type: 'fill', prompt: 'Complète : "___ (Sans aucun doute), this is correct."', answer: 'Undoubtedly' },
    { type: 'truefalse', prompt: '"Drawback" veut dire "avantage"', answer: false }
  ]
''' + marker

if marker not in content:
    print('MOTIF NON TROUVÉ')
else:
    content = content.replace(marker, unit16, 1)
    open(path, 'w').write(content)
    print('ok')
