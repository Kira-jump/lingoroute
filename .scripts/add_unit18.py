path = 'src/database/exercises.js'
content = open(path).read()

marker = '''}

export function getExercises(lessonId) {'''

unit18 = '''  ,

  // ===== UNITÉ 18 — Hypothèses =====
  l52: [
    { type: 'qcm', prompt: 'Comment dit-on "si j\\'étais toi" ?', options: ['If I were you', 'If I am you', 'If I was you'], answer: 'If I were you' },
    { type: 'fill', prompt: 'Complète : "If it ___ (pleuvait), I would stay home."', answer: 'rained' },
    { type: 'translate', prompt: 'Traduis : "Si j\\'avais de l\\'argent, je voyagerais."', answer: 'If I had money, I would travel' },
    { type: 'qcm', prompt: '"If I were you, I would..." veut dire...', options: ['Si j\\'étais toi, je...', 'Si tu étais moi...', 'Quand je serai toi...'], answer: 'Si j\\'étais toi, je...' },
    { type: 'drag', prompt: 'Remets dans l\\'ordre : "were / you / If / I"', words: ['If', 'I', 'were', 'you'], answer: 'If I were you' },
    { type: 'truefalse', prompt: '"Would" s\\'utilise dans les phrases hypothétiques', answer: true },
    { type: 'translate', prompt: 'Traduis : "Que ferais-tu si tu gagnais à la loterie ?"', answer: 'What would you do if you won the lottery?' },
    { type: 'qcm', prompt: 'Comment dit-on "à ta place" ?', options: ['In your place', 'At your place', 'On your place'], answer: 'In your place' },
    { type: 'fill', prompt: 'Complète : "If I ___ (\\u00e9tais) rich, I would help others."', answer: 'were' }
  ],
  l53: [
    { type: 'qcm', prompt: 'Comment dit-on "j\\'aurais dû" ?', options: ['I should have', 'I would have', 'I could have'], answer: 'I should have' },
    { type: 'fill', prompt: 'Complète : "I ___ (aurais d\\u00fb) study more."', answer: 'should have' },
    { type: 'translate', prompt: 'Traduis : "J\\'aurais pu réussir."', answer: 'I could have succeeded' },
    { type: 'qcm', prompt: '"I regret that" veut dire...', options: ['Je regrette que', "J'espère que", 'Je pense que'], answer: 'Je regrette que' },
    { type: 'drag', prompt: 'Remets dans l\\'ordre : "have / should / earlier / You / left"', words: ['You', 'should', 'have', 'left', 'earlier'], answer: 'You should have left earlier' },
    { type: 'truefalse', prompt: '"I wish I had known" exprime un regret', answer: true },
    { type: 'translate', prompt: 'Traduis : "J\\'aurais aimé le savoir plus tôt."', answer: 'I wish I had known earlier' },
    { type: 'qcm', prompt: 'Comment dit-on "j\\'aurais pu" ?', options: ['I could have', 'I can have', 'I will have'], answer: 'I could have' },
    { type: 'fill', prompt: 'Complète : "You ___ (aurais d\\u00fb) call me."', answer: 'should have' }
  ],
  l54: [
    { type: 'qcm', prompt: 'Comment dit-on "imagine que" ?', options: ['Imagine that', 'Remember that', 'Forget that'], answer: 'Imagine that' },
    { type: 'fill', prompt: 'Complète : "___ (Imagine) you could fly."', answer: 'Imagine' },
    { type: 'translate', prompt: 'Traduis : "Que se passerait-il si les robots dirigeaient le monde ?"', answer: 'What would happen if robots ruled the world?' },
    { type: 'qcm', prompt: '"Suppose" veut dire...', options: ['Suppose', 'Refuse', 'Forget'], answer: 'Suppose' },
    { type: 'drag', prompt: 'Remets dans l\\'ordre : "could / you / Suppose / fly"', words: ['Suppose', 'you', 'could', 'fly'], answer: 'Suppose you could fly' },
    { type: 'truefalse', prompt: '"What if...?" introduit une hypothèse', answer: true },
    { type: 'translate', prompt: 'Traduis : "Et si nous avions tort ?"', answer: 'What if we are wrong?' },
    { type: 'qcm', prompt: 'Comment dit-on "supposons que" ?', options: ['Suppose that', 'Remember that', 'Deny that'], answer: 'Suppose that' },
    { type: 'fill', prompt: 'Complète : "What ___ (si) it never happened?"', answer: 'if' }
  ],
  b18: [
    { type: 'qcm', prompt: 'Comment dit-on "si j\\'étais toi" ?', options: ['If I were you', 'If I am you', 'If I be you'], answer: 'If I were you' },
    { type: 'translate', prompt: 'Traduis : "Si j\\'avais du temps, je lirais plus."', answer: 'If I had time, I would read more' },
    { type: 'fill', prompt: 'Complète : "I ___ (aurais d\\u00fb) listen to you."', answer: 'should have' },
    { type: 'qcm', prompt: 'Comment dit-on "imaginer" ?', options: ['To imagine', 'To forget', 'To ignore'], answer: 'To imagine' },
    { type: 'drag', prompt: 'Remets dans l\\'ordre : "if / What / wrong / we / are"', words: ['What', 'if', 'we', 'are', 'wrong'], answer: 'What if we are wrong' },
    { type: 'translate', prompt: 'Traduis : "J\\'aurais aimé être là."', answer: 'I wish I had been there' },
    { type: 'qcm', prompt: 'Comment dit-on "regretter" ?', options: ['To regret', 'To hope', 'To imagine'], answer: 'To regret' },
    { type: 'fill', prompt: 'Complète : "Suppose you ___ (pouvais) travel anywhere."', answer: 'could' },
    { type: 'truefalse', prompt: '"I should have" exprime un regret', answer: true }
  ]
''' + marker

if marker not in content:
    print('MOTIF NON TROUVÉ')
else:
    content = content.replace(marker, unit18, 1)
    open(path, 'w').write(content)
    print('ok')
