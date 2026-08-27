path = 'src/database/exercises.js'
content = open(path).read()

marker = '''}

export function getExercises(lessonId) {'''

unit13 = '''  ,

  // ===== UNITÉ 13 — Futur & projets =====
  l37: [
    { type: 'qcm', prompt: 'Comment dit-on "je vais faire" ?', options: ['I am going to', 'I will to', 'I do to'], answer: 'I am going to' },
    { type: 'fill', prompt: 'Complète : "I ___ (vais) travel next year."', answer: 'will' },
    { type: 'translate', prompt: 'Traduis : "Je vais étudier ce soir."', answer: 'I am going to study tonight' },
    { type: 'qcm', prompt: '"Will" s\\'utilise pour...', options: ['Une décision spontanée', 'Un passé', 'Un fait accompli'], answer: 'Une décision spontanée' },
    { type: 'drag', prompt: 'Remets dans l\\'ordre : "call / will / I / you"', words: ['I', 'will', 'call', 'you'], answer: 'I will call you' },
    { type: 'truefalse', prompt: '"Going to" s\\'utilise pour un projet déjà prévu', answer: true },
    { type: 'translate', prompt: 'Traduis : "Il va pleuvoir demain."', answer: 'It is going to rain tomorrow' },
    { type: 'qcm', prompt: 'Forme correcte pour un projet prévu ?', options: ['I am going to visit', 'I go to visit', 'I visit going'], answer: 'I am going to visit' },
    { type: 'fill', prompt: 'Complète : "We ___ (allons) move next month."', answer: 'are going to' }
  ],
  l38: [
    { type: 'qcm', prompt: 'Comment dit-on "objectif" ?', options: ['Goal', 'Problem', 'Mistake'], answer: 'Goal' },
    { type: 'fill', prompt: 'Complète : "My goal is to ___ (apprendre) English."', answer: 'learn' },
    { type: 'translate', prompt: 'Traduis : "Mon rêve est de voyager dans le monde."', answer: 'My dream is to travel the world' },
    { type: 'qcm', prompt: '"Ambition" veut dire...', options: ['Ambition', 'Peur', 'Regret'], answer: 'Ambition' },
    { type: 'drag', prompt: 'Remets dans l\\'ordre : "own / to / a / want / I / business / start"', words: ['I', 'want', 'to', 'start', 'a', 'own', 'business'], answer: 'I want to start a own business' },
    { type: 'truefalse', prompt: '"Achieve a goal" veut dire "atteindre un objectif"', answer: true },
    { type: 'translate', prompt: 'Traduis : "Je veux devenir médecin."', answer: 'I want to become a doctor' },
    { type: 'qcm', prompt: 'Comment dit-on "réussir" ?', options: ['To succeed', 'To fail', 'To stop'], answer: 'To succeed' },
    { type: 'fill', prompt: 'Complète : "I hope to ___ (r\\u00e9ussir) in life."', answer: 'succeed' }
  ],
  l39: [
    { type: 'qcm', prompt: 'Comment dit-on "je prédis" ?', options: ['I predict', 'I remember', 'I forget'], answer: 'I predict' },
    { type: 'fill', prompt: 'Complète : "In the future, robots ___ (aideront) us."', answer: 'will help' },
    { type: 'translate', prompt: 'Traduis : "Je pense qu\\'il fera beau demain."', answer: 'I think it will be sunny tomorrow' },
    { type: 'qcm', prompt: '"Probably" veut dire...', options: ['Probablement', 'Jamais', 'Toujours'], answer: 'Probablement' },
    { type: 'drag', prompt: 'Remets dans l\\'ordre : "will / win / probably / They"', words: ['They', 'will', 'probably', 'win'], answer: 'They will probably win' },
    { type: 'truefalse', prompt: '"Maybe" veut dire "peut-être"', answer: true },
    { type: 'translate', prompt: 'Traduis : "Dans dix ans, tout sera différent."', answer: 'In ten years, everything will be different' },
    { type: 'qcm', prompt: 'Comment dit-on "certainement" ?', options: ['Definitely', 'Rarely', 'Never'], answer: 'Definitely' },
    { type: 'fill', prompt: 'Complète : "It will ___ (probablement) rain."', answer: 'probably' }
  ],
  b13: [
    { type: 'qcm', prompt: 'Comment dit-on "je vais" (projet) ?', options: ['I am going to', 'I was', 'I have'], answer: 'I am going to' },
    { type: 'translate', prompt: 'Traduis : "Mon objectif est de réussir dans la vie."', answer: 'My goal is to succeed in life' },
    { type: 'fill', prompt: 'Complète : "It ___ (va) rain tomorrow."', answer: 'is going to' },
    { type: 'qcm', prompt: 'Comment dit-on "rêve" ?', options: ['Dream', 'Nightmare', 'Sleep'], answer: 'Dream' },
    { type: 'drag', prompt: 'Remets dans l\\'ordre : "probably / will / win / They"', words: ['They', 'will', 'probably', 'win'], answer: 'They will probably win' },
    { type: 'translate', prompt: 'Traduis : "Je veux devenir ingénieur."', answer: 'I want to become an engineer' },
    { type: 'qcm', prompt: 'Comment dit-on "prédire" ?', options: ['To predict', 'To forget', 'To remember'], answer: 'To predict' },
    { type: 'fill', prompt: 'Complète : "In the future, we ___ (aurons) flying cars."', answer: 'will have' },
    { type: 'truefalse', prompt: '"Definitely" veut dire "jamais"', answer: false }
  ]
''' + marker

if marker not in content:
    print('MOTIF NON TROUVÉ')
else:
    content = content.replace(marker, unit13, 1)
    open(path, 'w').write(content)
    print('ok')
