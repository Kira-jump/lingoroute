path = 'src/database/exercises.js'
content = open(path).read()

marker = '''}

export function getExercises(lessonId) {'''

unit20 = '''  ,

  // ===== UNITÉ 20 — Expressions idiomatiques =====
  l58: [
    { type: 'qcm', prompt: 'Que signifie "It\\'s raining cats and dogs" ?', options: ['Il pleut très fort', 'Il fait beau', 'Il neige'], answer: 'Il pleut très fort' },
    { type: 'fill', prompt: 'Complète : "Break a ___ (jambe) !" (bonne chance)', answer: 'leg' },
    { type: 'translate', prompt: 'Traduis le sens : "Piece of cake" (facile)', answer: 'It is very easy' },
    { type: 'qcm', prompt: '"Under the weather" signifie...', options: ['Se sentir malade', 'Être en pleine forme', 'Avoir froid'], answer: 'Se sentir malade' },
    { type: 'drag', prompt: 'Remets dans l\\'ordre : "a / It\\'s / cake / piece / of"', words: ["It's", 'a', 'piece', 'of', 'cake'], answer: "It's a piece of cake" },
    { type: 'truefalse', prompt: '"Break a leg" veut dire se faire mal à la jambe', answer: false },
    { type: 'translate', prompt: 'Que veut dire "Cost an arm and a leg" ?', answer: 'Cela coûte très cher' },
    { type: 'qcm', prompt: '"Once in a blue moon" signifie...', options: ['Très rarement', 'Souvent', 'Chaque jour'], answer: 'Très rarement' },
    { type: 'fill', prompt: 'Complète : "It costs an arm and a ___ (jambe)."', answer: 'leg' }
  ],
  l59: [
    { type: 'qcm', prompt: 'Que signifie "give up" ?', options: ['Abandonner', 'Commencer', 'Continuer'], answer: 'Abandonner' },
    { type: 'fill', prompt: 'Complète : "Please turn ___ (\\u00e9teins) the light."', answer: 'off' },
    { type: 'translate', prompt: 'Traduis le sens : "Look forward to" (avoir hâte de)', answer: 'To be excited about something coming' },
    { type: 'qcm', prompt: '"Work out" (au sens figuré) veut dire...', options: ['Se résoudre / s\\'arranger', 'Travailler dehors', 'Sortir'], answer: 'Se résoudre / s\\'arranger' },
    { type: 'drag', prompt: 'Remets dans l\\'ordre : "up / don\\'t / Please / give"', words: ['Please', "don't", 'give', 'up'], answer: "Please don't give up" },
    { type: 'truefalse', prompt: '"Look forward to" exprime l\\'impatience positive', answer: true },
    { type: 'translate', prompt: 'Que veut dire "figure out" ?', answer: 'To understand or solve something' },
    { type: 'qcm', prompt: '"Run into" (quelqu\\'un) veut dire...', options: ['Rencontrer par hasard', 'Éviter', 'Fuir'], answer: 'Rencontrer par hasard' },
    { type: 'fill', prompt: 'Complète : "I need to figure ___ (r\\u00e9soudre) this problem."', answer: 'out' }
  ],
  l60: [
    { type: 'qcm', prompt: 'Que signifie "That\\'s hilarious" ?', options: ["C'est très drôle", "C'est triste", "C'est ennuyeux"], answer: "C'est très drôle" },
    { type: 'fill', prompt: 'Complète : "You\\'re ___ (blague)!" (sans façon)', answer: 'kidding' },
    { type: 'translate', prompt: 'Traduis le sens : "To crack a joke"', answer: 'To tell a joke' },
    { type: 'qcm', prompt: '"No kidding" veut dire...', options: ['Sans blague', 'Bien sûr que non', 'Jamais'], answer: 'Sans blague' },
    { type: 'drag', prompt: 'Remets dans l\\'ordre : "hilarious / That\\'s"', words: ["That's", 'hilarious'], answer: "That's hilarious" },
    { type: 'truefalse', prompt: '"To crack a joke" veut dire "raconter une blague"', answer: true },
    { type: 'translate', prompt: 'Que veut dire "You crack me up" ?', answer: 'You make me laugh a lot' },
    { type: 'qcm', prompt: '"Pun" désigne...', options: ['Un jeu de mots', 'Une insulte', 'Un compliment'], answer: 'Un jeu de mots' },
    { type: 'fill', prompt: 'Complète : "You always ___ (me fais rire) me up."', answer: 'crack' }
  ],
  b20: [
    { type: 'qcm', prompt: 'Que signifie "Piece of cake" ?', options: ["C'est très facile", "C'est délicieux", "C'est difficile"], answer: "C'est très facile" },
    { type: 'translate', prompt: 'Traduis le sens : "Break a leg" (bonne chance)', answer: 'Good luck' },
    { type: 'fill', prompt: 'Complète : "I need to figure ___ (comprendre) this out."', answer: 'out' },
    { type: 'qcm', prompt: 'Que signifie "Once in a blue moon" ?', options: ['Très rarement', 'Tous les jours', 'Jamais'], answer: 'Très rarement' },
    { type: 'drag', prompt: 'Remets dans l\\'ordre : "hilarious / That\\'s"', words: ["That's", 'hilarious'], answer: "That's hilarious" },
    { type: 'translate', prompt: 'Que veut dire "Cost an arm and a leg" ?', answer: 'It is very expensive' },
    { type: 'qcm', prompt: 'Que signifie "Under the weather" ?', options: ['Se sentir malade', 'Avoir chaud', 'Être joyeux'], answer: 'Se sentir malade' },
    { type: 'fill', prompt: 'Complète : "Please don\\'t give ___ (abandonne)."', answer: 'up' },
    { type: 'truefalse', prompt: '"You crack me up" veut dire "tu m\\'énerves"', answer: false }
  ]
''' + marker

if marker not in content:
    print('MOTIF NON TROUVÉ')
else:
    content = content.replace(marker, unit20, 1)
    open(path, 'w').write(content)
    print('ok')
