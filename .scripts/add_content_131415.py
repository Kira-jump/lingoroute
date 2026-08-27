path = 'src/database/lessonContent.js'
content = open(path).read()

marker = '''}

export function getLessonContent(lessonId) {'''

new_content = '''  ,

  // ===== UNITÉ 13 — Futur & projets =====
  l37: {
    title: 'Will / Going to',
    intro: 'Deux façons de parler du futur en anglais.',
    vocab: [
      { en: 'I am going to', phon: 'aï am gôou-igne tou', fr: 'Je vais (projet prévu)' },
      { en: 'I will', phon: 'aï wil', fr: 'Je vais (décision spontanée)' },
      { en: 'Tonight', phon: 'tou-naïte', fr: 'Ce soir' },
      { en: 'Next year', phon: 'nèxt yir', fr: 'L\\'année prochaine' }
    ],
    examples: [
      { en: 'I am going to study tonight.', fr: 'Je vais étudier ce soir.' },
      { en: 'I will call you.', fr: 'Je vais t\\'appeler.' }
    ]
  },
  l38: {
    title: 'Objectifs de vie',
    intro: 'Le vocabulaire pour parler de tes ambitions.',
    vocab: [
      { en: 'Goal', phon: 'gôoul', fr: 'Objectif' },
      { en: 'Dream', phon: 'drime', fr: 'Rêve' },
      { en: 'To succeed', phon: 'tou seuk-side', fr: 'Réussir' },
      { en: 'Ambition', phon: 'am-bi-cheunn', fr: 'Ambition' }
    ],
    examples: [
      { en: 'My dream is to travel the world.', fr: 'Mon rêve est de voyager dans le monde.' },
      { en: 'I hope to succeed in life.', fr: 'J\\'espère réussir dans la vie.' }
    ]
  },
  l39: {
    title: 'Prédictions',
    intro: 'Comment faire des prédictions sur le futur.',
    vocab: [
      { en: 'I predict', phon: 'aï pri-dikte', fr: 'Je prédis' },
      { en: 'Probably', phon: 'pro-beu-bli', fr: 'Probablement' },
      { en: 'Definitely', phon: 'dè-fi-neut-li', fr: 'Certainement' },
      { en: 'In the future', phon: 'inn ze fiou-tcheur', fr: 'Dans le futur' }
    ],
    examples: [
      { en: 'They will probably win.', fr: 'Ils vont probablement gagner.' },
      { en: 'In ten years, everything will be different.', fr: 'Dans dix ans, tout sera différent.' }
    ]
  },
  b13: {
    title: 'Récapitulatif — Unité 13',
    intro: 'Révise le futur avant le Boss.',
    vocab: [
      { en: 'My goal is to succeed', phon: 'maï gôoul iz tou seuk-side', fr: 'Mon objectif est de réussir' },
      { en: 'Dream', phon: 'drime', fr: 'Rêve' }
    ],
    examples: [
      { en: 'It is going to rain tomorrow.', fr: 'Il va pleuvoir demain.' }
    ]
  },

  // ===== UNITÉ 14 — Voyage & imprévus =====
  l40: {
    title: 'À l\\'aéroport',
    intro: 'Le vocabulaire essentiel à l\\'aéroport.',
    vocab: [
      { en: 'Flight', phon: 'flaïte', fr: 'Vol' },
      { en: 'Boarding pass', phon: 'bor-dinne pass', fr: 'Carte d\\'embarquement' },
      { en: 'Gate', phon: 'guéïte', fr: 'Porte d\\'embarquement' },
      { en: 'Passport', phon: 'pass-porte', fr: 'Passeport' }
    ],
    examples: [
      { en: 'My flight leaves at 6am.', fr: 'Mon vol part à 6h.' },
      { en: 'Where is my gate?', fr: 'Où est ma porte d\\'embarquement ?' }
    ]
  },
  l41: {
    title: 'Problèmes de voyage',
    intro: 'Le vocabulaire pour gérer les imprévus.',
    vocab: [
      { en: 'Lost', phon: 'loste', fr: 'Perdu' },
      { en: 'Cancelled', phon: 'kan-seuld', fr: 'Annulé' },
      { en: 'Stolen', phon: 'stôou-leunn', fr: 'Volé' },
      { en: 'I missed my connection', phon: 'aï mist maï keu-nèk-cheunn', fr: 'J\\'ai raté ma correspondance' }
    ],
    examples: [
      { en: 'My flight was cancelled.', fr: 'Mon vol a été annulé.' },
      { en: 'My bag was stolen.', fr: 'Mon sac a été volé.' }
    ]
  },
  l42: {
    title: 'Demander de l\\'aide',
    intro: 'Comment demander de l\\'aide en cas d\\'urgence.',
    vocab: [
      { en: 'Can you help me?', phon: 'kane you hèlp mi', fr: "Peux-tu m'aider ?" },
      { en: 'Emergency', phon: 'i-meur-djeun-si', fr: 'Urgence' },
      { en: 'Police station', phon: 'peu-lisse stéï-cheunn', fr: 'Commissariat' },
      { en: 'Embassy', phon: 'èm-beu-si', fr: 'Ambassade' }
    ],
    examples: [
      { en: 'I am lost.', fr: 'Je suis perdu.' },
      { en: 'Call the police, please.', fr: 'Appelez la police, s\\'il vous plaît.' }
    ]
  },
  b14: {
    title: 'Récapitulatif — Unité 14',
    intro: 'Révise voyage et imprévus avant le Boss.',
    vocab: [
      { en: 'Cancelled', phon: 'kan-seuld', fr: 'Annulé' },
      { en: 'Luggage', phon: 'leu-gadj', fr: 'Bagages' }
    ],
    examples: [
      { en: 'My flight was delayed.', fr: 'Mon vol a été retardé.' }
    ]
  },

  // ===== UNITÉ 15 — Santé =====
  l43: {
    title: 'Chez le médecin',
    intro: 'Le vocabulaire pour une visite chez le médecin.',
    vocab: [
      { en: 'Doctor', phon: 'dok-teur', fr: 'Médecin' },
      { en: 'Appointment', phon: 'eu-poïnte-meunt', fr: 'Rendez-vous' },
      { en: 'Prescription', phon: 'pris-krip-cheunn', fr: 'Ordonnance' },
      { en: 'Pharmacy', phon: 'far-meu-si', fr: 'Pharmacie' }
    ],
    examples: [
      { en: 'I need to see a doctor.', fr: 'J\\'ai besoin de voir un médecin.' },
      { en: 'The doctor gave me a prescription.', fr: 'Le médecin m\\'a donné une ordonnance.' }
    ]
  },
  l44: {
    title: 'Symptômes',
    intro: 'Le vocabulaire pour décrire ce qui ne va pas.',
    vocab: [
      { en: 'Headache', phon: 'hè-déïke', fr: 'Mal de tête' },
      { en: 'Fever', phon: 'fi-veur', fr: 'Fièvre' },
      { en: 'Cough', phon: 'kof', fr: 'Toux' },
      { en: 'I feel sick', phon: 'aï file sik', fr: 'Je me sens malade' }
    ],
    examples: [
      { en: 'I have a headache.', fr: 'J\\'ai mal à la tête.' },
      { en: 'My stomach hurts.', fr: 'J\\'ai mal au ventre.' }
    ]
  },
  l45: {
    title: 'Conseils santé',
    intro: 'Le vocabulaire pour donner des conseils de santé.',
    vocab: [
      { en: 'You should rest', phon: 'you choud rèste', fr: 'Tu devrais te reposer' },
      { en: 'Drink water', phon: 'drinke wo-teur', fr: "Bois de l'eau" },
      { en: 'Take medicine', phon: 'téïke mè-di-sinn', fr: 'Prendre un médicament' },
      { en: 'To heal', phon: 'tou hile', fr: 'Guérir' }
    ],
    examples: [
      { en: 'You should see a doctor.', fr: 'Tu devrais voir un médecin.' },
      { en: 'You should sleep more.', fr: 'Tu devrais dormir davantage.' }
    ]
  },
  b15: {
    title: 'Récapitulatif — Unité 15',
    intro: 'Révise le vocabulaire de la santé avant le Boss final du palier B1.',
    vocab: [
      { en: 'Prescription', phon: 'pris-krip-cheunn', fr: 'Ordonnance' },
      { en: 'I feel better now', phon: 'aï file bè-teur naou', fr: 'Je me sens mieux maintenant' }
    ],
    examples: [
      { en: 'You should see a doctor.', fr: 'Tu devrais voir un médecin.' }
    ]
  },

''' + marker

if marker not in content:
    print('MOTIF NON TROUVÉ')
else:
    content = content.replace(marker, new_content, 1)
    open(path, 'w').write(content)
    print('ok')
