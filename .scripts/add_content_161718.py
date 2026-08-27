path = 'src/database/lessonContent.js'
content = open(path).read()

marker = '''}

export function getLessonContent(lessonId) {'''

new_content = '''  ,

  // ===== UNITÉ 16 — Débattre =====
  l46: {
    title: 'Pour/contre',
    intro: 'Le vocabulaire pour peser le pour et le contre.',
    vocab: [
      { en: 'On one hand', phon: 'onn ouann hande', fr: "D'un côté" },
      { en: 'On the other hand', phon: 'onn zi eu-zeur hande', fr: "De l'autre côté" },
      { en: 'Advantage', phon: 'eud-vane-tidj', fr: 'Avantage' },
      { en: 'Drawback', phon: 'dro-bak', fr: 'Inconvénient' }
    ],
    examples: [
      { en: 'There are advantages and disadvantages.', fr: 'Il y a des avantages et des inconvénients.' },
      { en: 'The main drawback is the price.', fr: 'Le principal inconvénient est le prix.' }
    ]
  },
  l47: {
    title: 'Nuancer son propos',
    intro: 'Le vocabulaire pour nuancer une opinion.',
    vocab: [
      { en: 'It seems to me that', phon: 'it simz tou mi zat', fr: 'Il me semble que' },
      { en: 'To some extent', phon: 'tou seum ex-tènte', fr: 'Dans une certaine mesure' },
      { en: 'Not necessarily', phon: 'not nè-seu-sè-ri-li', fr: 'Pas nécessairement' },
      { en: 'It depends', phon: 'it di-pènds', fr: 'Ça dépend' }
    ],
    examples: [
      { en: 'To some extent, you are right.', fr: 'Dans une certaine mesure, tu as raison.' },
      { en: 'It depends on the situation.', fr: 'Ça dépend de la situation.' }
    ]
  },
  l48: {
    title: 'Convaincre',
    intro: 'Le vocabulaire pour convaincre quelqu\\'un.',
    vocab: [
      { en: 'I am convinced that', phon: 'aï am keunn-vinnsde zat', fr: 'Je suis convaincu que' },
      { en: 'Evidence', phon: 'è-vi-deunns', fr: 'Preuve' },
      { en: 'Undoubtedly', phon: 'eune-daou-tid-li', fr: 'Sans aucun doute' },
      { en: 'To convince', phon: 'tou keunn-vinnse', fr: 'Convaincre' }
    ],
    examples: [
      { en: 'This proves that I am right.', fr: 'Cela prouve que j\\'ai raison.' },
      { en: 'Undoubtedly, this is the best option.', fr: 'Sans aucun doute, c\\'est la meilleure option.' }
    ]
  },
  b16: {
    title: 'Récapitulatif — Unité 16',
    intro: 'Révise le vocabulaire du débat avant le Boss.',
    vocab: [
      { en: 'Advantage', phon: 'eud-vane-tidj', fr: 'Avantage' },
      { en: 'To some extent', phon: 'tou seum ex-tènte', fr: 'Dans une certaine mesure' }
    ],
    examples: [
      { en: 'It depends on the context.', fr: 'Ça dépend du contexte.' }
    ]
  },

  // ===== UNITÉ 17 — Actualité =====
  l49: {
    title: 'Lire un titre de presse',
    intro: 'Le vocabulaire des titres et articles de presse.',
    vocab: [
      { en: 'Headline', phon: 'hèd-laïne', fr: 'Gros titre' },
      { en: 'Breaking news', phon: 'bréï-kigne nyouz', fr: 'Dernière minute' },
      { en: 'Journalist', phon: 'djeur-neu-liste', fr: 'Journaliste' },
      { en: 'Source', phon: 'sorse', fr: 'Source' }
    ],
    examples: [
      { en: 'This is breaking news.', fr: 'C\\'est une information de dernière minute.' },
      { en: 'According to the source, it is true.', fr: 'Selon la source, c\\'est vrai.' }
    ]
  },
  l50: {
    title: 'Résumer une info',
    intro: 'Le vocabulaire pour résumer une information.',
    vocab: [
      { en: 'To summarize', phon: 'tou seu-meu-raïze', fr: 'Résumer' },
      { en: 'In short', phon: 'inn chorte', fr: 'En bref' },
      { en: 'Main point', phon: 'méïnn poïnte', fr: 'Point principal' },
      { en: 'In detail', phon: 'inn di-téïl', fr: 'En détail' }
    ],
    examples: [
      { en: 'In short, the situation is improving.', fr: 'En bref, la situation s\\'améliore.' },
      { en: 'The main point is the cost.', fr: 'Le point principal est le coût.' }
    ]
  },
  l51: {
    title: 'Vocabulaire médias',
    intro: 'Le vocabulaire de la télévision et des médias.',
    vocab: [
      { en: 'Channel', phon: 'tcha-neul', fr: 'Chaîne' },
      { en: 'Broadcast', phon: 'brod-kaste', fr: 'Diffuser' },
      { en: 'Anchor', phon: 'ane-keur', fr: 'Présentateur' },
      { en: 'Live', phon: 'laïve', fr: 'En direct' }
    ],
    examples: [
      { en: 'They broadcast the event live.', fr: 'Ils ont diffusé l\\'événement en direct.' },
      { en: 'The news anchor spoke clearly.', fr: 'Le présentateur a parlé clairement.' }
    ]
  },
  b17: {
    title: 'Récapitulatif — Unité 17',
    intro: 'Révise le vocabulaire de l\\'actualité avant le Boss.',
    vocab: [
      { en: 'Breaking news', phon: 'bréï-kigne nyouz', fr: 'Dernière minute' },
      { en: 'To summarize', phon: 'tou seu-meu-raïze', fr: 'Résumer' }
    ],
    examples: [
      { en: 'In short, the project is cancelled.', fr: 'En bref, le projet est annulé.' }
    ]
  },

  // ===== UNITÉ 18 — Hypothèses =====
  l52: {
    title: 'If clauses',
    intro: 'Comment construire des phrases hypothétiques.',
    vocab: [
      { en: 'If I were you', phon: 'if aï weur you', fr: 'Si j\\'étais toi' },
      { en: 'I would', phon: 'aï woud', fr: 'Je ferais' },
      { en: 'What would you do if...?', phon: 'wot woud you dou if', fr: 'Que ferais-tu si... ?' }
    ],
    examples: [
      { en: 'If I had money, I would travel.', fr: 'Si j\\'avais de l\\'argent, je voyagerais.' },
      { en: 'What would you do if you won the lottery?', fr: 'Que ferais-tu si tu gagnais à la loterie ?' }
    ]
  },
  l53: {
    title: 'Conseils & regrets',
    intro: 'Comment exprimer un regret ou un conseil passé.',
    vocab: [
      { en: 'I should have', phon: 'aï choud hav', fr: 'J\\'aurais dû' },
      { en: 'I could have', phon: 'aï koud hav', fr: 'J\\'aurais pu' },
      { en: 'I wish I had known', phon: 'aï wich aï had nôoune', fr: 'J\\'aurais aimé le savoir' }
    ],
    examples: [
      { en: 'You should have left earlier.', fr: 'Tu aurais dû partir plus tôt.' },
      { en: 'I wish I had known earlier.', fr: 'J\\'aurais aimé le savoir plus tôt.' }
    ]
  },
  l54: {
    title: 'Situations imaginaires',
    intro: 'Le vocabulaire pour imaginer des scénarios.',
    vocab: [
      { en: 'Imagine that', phon: 'i-ma-djinne zat', fr: 'Imagine que' },
      { en: 'Suppose', phon: 'seu-pôouze', fr: 'Suppose' },
      { en: 'What if...?', phon: 'wot if', fr: 'Et si... ?' }
    ],
    examples: [
      { en: 'What if we are wrong?', fr: 'Et si nous avions tort ?' },
      { en: 'Suppose you could fly.', fr: 'Imagine que tu puisses voler.' }
    ]
  },
  b18: {
    title: 'Récapitulatif — Unité 18',
    intro: 'Révise les hypothèses avant le Boss.',
    vocab: [
      { en: 'If I were you', phon: 'if aï weur you', fr: 'Si j\\'étais toi' },
      { en: 'I should have', phon: 'aï choud hav', fr: 'J\\'aurais dû' }
    ],
    examples: [
      { en: 'I wish I had been there.', fr: 'J\\'aurais aimé être là.' }
    ]
  },

''' + marker

if marker not in content:
    print('MOTIF NON TROUVÉ')
else:
    content = content.replace(marker, new_content, 1)
    open(path, 'w').write(content)
    print('ok')
