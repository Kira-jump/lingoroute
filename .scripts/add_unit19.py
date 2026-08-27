path = 'src/database/exercises.js'
content = open(path).read()

marker = '''}

export function getExercises(lessonId) {'''

unit19 = '''  ,

  // ===== UNITÉ 19 — Émotions nuancées =====
  l55: [
    { type: 'qcm', prompt: 'Comment dit-on "déçu" ?', options: ['Disappointed', 'Happy', 'Excited'], answer: 'Disappointed' },
    { type: 'fill', prompt: 'Complète : "I feel ___ (frustr\\u00e9) about this."', answer: 'frustrated' },
    { type: 'translate', prompt: 'Traduis : "Je suis anxieux avant les examens."', answer: 'I am anxious before exams' },
    { type: 'qcm', prompt: '"Overwhelmed" veut dire...', options: ['Débordé/submergé', 'Détendu', 'Ennuyé'], answer: 'Débordé/submergé' },
    { type: 'drag', prompt: 'Remets dans l\\'ordre : "feel / a / I / bit / nervous"', words: ['I', 'feel', 'a', 'bit', 'nervous'], answer: 'I feel a bit nervous' },
    { type: 'truefalse', prompt: '"Relieved" veut dire "soulagé"', answer: true },
    { type: 'translate', prompt: 'Traduis : "Elle se sent soulagée maintenant."', answer: 'She feels relieved now' },
    { type: 'qcm', prompt: 'Comment dit-on "gêné" ?', options: ['Embarrassed', 'Proud', 'Confident'], answer: 'Embarrassed' },
    { type: 'fill', prompt: 'Complète : "He seems ___ (\\u00e9nerv\\u00e9) today."', answer: 'annoyed' }
  ],
  l56: [
    { type: 'qcm', prompt: 'Comment dit-on "je me sens..." ?', options: ['I feel...', 'I am doing...', 'I have...'], answer: 'I feel...' },
    { type: 'fill', prompt: 'Complète : "I am ___ (fier) of you."', answer: 'proud' },
    { type: 'translate', prompt: 'Traduis : "Je me sens vraiment reconnaissant."', answer: 'I feel really grateful' },
    { type: 'qcm', prompt: '"Grateful" veut dire...', options: ['Reconnaissant', 'Jaloux', 'Fâché'], answer: 'Reconnaissant' },
    { type: 'drag', prompt: 'Remets dans l\\'ordre : "you / of / proud / I / am"', words: ['I', 'am', 'proud', 'of', 'you'], answer: 'I am proud of you' },
    { type: 'truefalse', prompt: '"Jealous" veut dire "jaloux"', answer: true },
    { type: 'translate', prompt: 'Traduis : "Il est fier de son travail."', answer: 'He is proud of his work' },
    { type: 'qcm', prompt: 'Comment dit-on "confiant" ?', options: ['Confident', 'Shy', 'Nervous'], answer: 'Confident' },
    { type: 'fill', prompt: 'Complète : "She feels ___ (confiante) today."', answer: 'confident' }
  ],
  l57: [
    { type: 'qcm', prompt: 'Comment dit-on "je comprends comment tu te sens" ?', options: ['I understand how you feel', 'I know your name', 'I like your feelings'], answer: 'I understand how you feel' },
    { type: 'fill', prompt: 'Complète : "I am here ___ (pour) you."', answer: 'for' },
    { type: 'translate', prompt: 'Traduis : "Ça va aller."', answer: 'It will be okay' },
    { type: 'qcm', prompt: '"Take your time" veut dire...', options: ['Prends ton temps', 'Dépêche-toi', 'Arrête maintenant'], answer: 'Prends ton temps' },
    { type: 'drag', prompt: 'Remets dans l\\'ordre : "you / here / for / I / am"', words: ['I', 'am', 'here', 'for', 'you'], answer: 'I am here for you' },
    { type: 'truefalse', prompt: '"I am here for you" est une phrase de soutien', answer: true },
    { type: 'translate', prompt: 'Traduis : "Je suis désolé pour toi."', answer: 'I am sorry for you' },
    { type: 'qcm', prompt: 'Comment dit-on "réconforter" ?', options: ['To comfort', 'To ignore', 'To blame'], answer: 'To comfort' },
    { type: 'fill', prompt: 'Complète : "Don\\'t worry, ___ (\\u00e7a) will be okay."', answer: 'it' }
  ],
  b19: [
    { type: 'qcm', prompt: 'Comment dit-on "déçu" ?', options: ['Disappointed', 'Delighted', 'Confident'], answer: 'Disappointed' },
    { type: 'translate', prompt: 'Traduis : "Je suis fier de toi et reconnaissant."', answer: 'I am proud of you and grateful' },
    { type: 'fill', prompt: 'Complète : "I feel ___ (soulag\\u00e9) now."', answer: 'relieved' },
    { type: 'qcm', prompt: 'Comment dit-on "gêné" ?', options: ['Embarrassed', 'Proud', 'Calm'], answer: 'Embarrassed' },
    { type: 'drag', prompt: 'Remets dans l\\'ordre : "here / am / you / for / I"', words: ['I', 'am', 'here', 'for', 'you'], answer: 'I am here for you' },
    { type: 'translate', prompt: 'Traduis : "Ça va aller, prends ton temps."', answer: 'It will be okay, take your time' },
    { type: 'qcm', prompt: 'Comment dit-on "jaloux" ?', options: ['Jealous', 'Grateful', 'Calm'], answer: 'Jealous' },
    { type: 'fill', prompt: 'Complète : "He seems ___ (\\u00e9nerv\\u00e9) today."', answer: 'annoyed' },
    { type: 'truefalse', prompt: '"Grateful" veut dire "en colère"', answer: false }
  ]
''' + marker

if marker not in content:
    print('MOTIF NON TROUVÉ')
else:
    content = content.replace(marker, unit19, 1)
    open(path, 'w').write(content)
    print('ok')
