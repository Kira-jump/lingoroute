path = 'src/database/lessonContent.js'
content = open(path).read()

marker = '''}

export function getLessonContent(lessonId) {'''

count = content.count(marker)
print(f'Occurrences du marqueur trouvées : {count}')

new_content = '''
  // ===== UNITÉ 19 — Émotions nuancées =====
  l55: {
    title: 'Vocabulaire des émotions',
    intro: 'Le vocabulaire pour décrire des émotions précises.',
    vocab: [
      { en: 'Disappointed', phon: 'dis-eu-poïn-tid', fr: 'Déçu' },
      { en: 'Frustrated', phon: 'freus-tréï-tid', fr: 'Frustré' },
      { en: 'Anxious', phon: 'anke-cheuss', fr: 'Anxieux' },
      { en: 'Overwhelmed', phon: 'ôou-veur-wèlmde', fr: 'Débordé' }
    ],
    examples: [
      { en: 'I am anxious before exams.', fr: 'Je suis anxieux avant les examens.' },
      { en: 'She feels relieved now.', fr: 'Elle se sent soulagée maintenant.' }
    ]
  },
  l56: {
    title: 'Exprimer un ressenti',
    intro: 'Le vocabulaire pour exprimer ce que tu ressens.',
    vocab: [
      { en: 'I feel...', phon: 'aï file', fr: 'Je me sens...' },
      { en: 'Proud', phon: 'praoude', fr: 'Fier' },
      { en: 'Grateful', phon: 'gréïte-foul', fr: 'Reconnaissant' },
      { en: 'Confident', phon: 'konne-fi-deunte', fr: 'Confiant' }
    ],
    examples: [
      { en: 'I am proud of you.', fr: 'Je suis fier de toi.' },
      { en: 'I feel really grateful.', fr: 'Je me sens vraiment reconnaissant.' }
    ]
  },
  l57: {
    title: 'Empathie & soutien',
    intro: 'Le vocabulaire pour soutenir quelqu\\'un.',
    vocab: [
      { en: 'I understand how you feel', phon: 'aï eune-deur-stande haou you file', fr: 'Je comprends ce que tu ressens' },
      { en: 'Take your time', phon: 'téïke your taïme', fr: 'Prends ton temps' },
      { en: 'It will be okay', phon: 'it wil bi ôou-kéï', fr: 'Ça va aller' },
      { en: 'To comfort', phon: 'tou keum-forte', fr: 'Réconforter' }
    ],
    examples: [
      { en: 'I am here for you.', fr: 'Je suis là pour toi.' },
      { en: 'Don\\'t worry, it will be okay.', fr: 'Ne t\\'inquiète pas, ça va aller.' }
    ]
  },
  b19: {
    title: 'Récapitulatif — Unité 19',
    intro: 'Révise les émotions nuancées avant le Boss.',
    vocab: [
      { en: 'Disappointed', phon: 'dis-eu-poïn-tid', fr: 'Déçu' },
      { en: 'I am here for you', phon: 'aï am hir for you', fr: 'Je suis là pour toi' }
    ],
    examples: [
      { en: 'It will be okay, take your time.', fr: 'Ça va aller, prends ton temps.' }
    ]
  },

  // ===== UNITÉ 20 — Expressions idiomatiques =====
  l58: {
    title: 'Idioms courants',
    intro: 'Des expressions idiomatiques anglaises courantes.',
    vocab: [
      { en: "It's raining cats and dogs", phon: 'its réï-nigne kats ande dogz', fr: 'Il pleut très fort' },
      { en: 'Break a leg', phon: 'bréïk eu lègue', fr: 'Bonne chance' },
      { en: 'Piece of cake', phon: 'pisse ov kéïke', fr: "Très facile" },
      { en: 'Cost an arm and a leg', phon: 'koste ann arme ande eu lègue', fr: 'Coûter très cher' }
    ],
    examples: [
      { en: "It's a piece of cake.", fr: "C'est très facile." },
      { en: 'This costs an arm and a leg.', fr: 'Ça coûte très cher.' }
    ]
  },
  l59: {
    title: 'Phrasal verbs',
    intro: 'Des verbes à particule très utilisés.',
    vocab: [
      { en: 'Give up', phon: 'guive eupe', fr: 'Abandonner' },
      { en: 'Look forward to', phon: 'louke for-weurde tou', fr: 'Avoir hâte de' },
      { en: 'Figure out', phon: 'fi-gueur aoute', fr: 'Comprendre / résoudre' },
      { en: 'Run into', phon: 'reune inn-tou', fr: 'Rencontrer par hasard' }
    ],
    examples: [
      { en: "Please don't give up.", fr: "S'il te plaît, n'abandonne pas." },
      { en: 'I need to figure this out.', fr: 'Je dois résoudre ça.' }
    ]
  },
  l60: {
    title: 'Humour & jeux de mots',
    intro: 'Le vocabulaire de l\\'humour en anglais.',
    vocab: [
      { en: "That's hilarious", phon: 'zats hi-lè-ri-euss', fr: "C'est très drôle" },
      { en: 'No kidding', phon: 'nôou ki-dinne', fr: 'Sans blague' },
      { en: 'To crack a joke', phon: 'tou krak eu djôouk', fr: 'Raconter une blague' },
      { en: 'Pun', phon: 'peune', fr: 'Jeu de mots' }
    ],
    examples: [
      { en: 'You crack me up.', fr: 'Tu me fais beaucoup rire.' },
      { en: "That's hilarious!", fr: "C'est très drôle !" }
    ]
  },
  b20: {
    title: 'Récapitulatif — Unité 20',
    intro: 'Révise les expressions idiomatiques avant le Boss final du palier B2.',
    vocab: [
      { en: 'Piece of cake', phon: 'pisse ov kéïke', fr: 'Très facile' },
      { en: 'Break a leg', phon: 'bréïk eu lègue', fr: 'Bonne chance' }
    ],
    examples: [
      { en: "That's hilarious!", fr: "C'est très drôle !" }
    ]
  }
''' + marker

if marker not in content:
    print('MOTIF NON TROUVÉ')
elif count != 1:
    print(f'ANNULÉ : le marqueur apparaît {count} fois, pas 1 — vérifier manuellement avant de continuer')
else:
    content = content.replace(marker, new_content, 1)
    open(path, 'w').write(content)
    print('ok')
