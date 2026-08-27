path = 'src/database/lessonContent.js'
content = open(path).read()

marker = '''}

export function getLessonContent(lessonId) {'''

new_content = '''  ,

  // ===== UNITÉ 11 — Donner son avis =====
  l31: {
    title: "J'aime / je n'aime pas",
    intro: 'Le vocabulaire pour exprimer tes goûts.',
    vocab: [
      { en: 'I like', phon: 'aï laïk', fr: "J'aime" },
      { en: 'I love', phon: 'aï leuv', fr: "J'adore" },
      { en: 'I hate', phon: 'aï héïte', fr: 'Je déteste' },
      { en: 'I prefer', phon: 'aï pri-feur', fr: 'Je préfère' },
      { en: "I can't stand it", phon: 'aï kant stande it', fr: 'Je ne supporte pas ça' }
    ],
    examples: [
      { en: 'I love action movies.', fr: "J'adore les films d'action." },
      { en: 'I prefer tea to coffee.', fr: 'Je préfère le thé au café.' }
    ]
  },
  l32: {
    title: 'Être d\\'accord ou non',
    intro: 'Comment exprimer ton accord ou désaccord.',
    vocab: [
      { en: 'I agree', phon: 'aï eu-gri', fr: "Je suis d'accord" },
      { en: 'I disagree', phon: 'aï dis-eu-gri', fr: "Je ne suis pas d'accord" },
      { en: 'You are right', phon: 'you ar raïte', fr: 'Tu as raison' },
      { en: 'You are wrong', phon: 'you ar rong', fr: 'Tu as tort' },
      { en: 'I see your point', phon: 'aï si your poïnte', fr: 'Je comprends ton point de vue' }
    ],
    examples: [
      { en: 'I totally agree with you.', fr: "Je suis totalement d'accord avec toi." },
      { en: 'I see your point, but I disagree.', fr: "Je comprends ton point de vue, mais je ne suis pas d'accord." }
    ]
  },
  l33: {
    title: 'Justifier son choix',
    intro: 'Le vocabulaire pour expliquer et argumenter.',
    vocab: [
      { en: 'Because', phon: 'bi-koz', fr: 'Parce que' },
      { en: 'In my opinion', phon: 'in maï eu-pi-nieunn', fr: 'À mon avis' },
      { en: 'For example', phon: 'for ig-zame-peul', fr: 'Par exemple' },
      { en: 'However', phon: 'haou-è-veur', fr: 'Cependant' }
    ],
    examples: [
      { en: 'In my opinion, this is a good idea.', fr: "À mon avis, c'est une bonne idée." },
      { en: 'I like it, however it is expensive.', fr: "J'aime bien, cependant c'est cher." }
    ]
  },
  b11: {
    title: 'Récapitulatif — Unité 11',
    intro: 'Révise le vocabulaire des opinions avant le Boss.',
    vocab: [
      { en: 'I think that', phon: 'aï sinnk zat', fr: 'Je pense que' },
      { en: 'I totally agree', phon: 'aï tôou-teu-li eu-gri', fr: 'Je suis totalement d\\'accord' }
    ],
    examples: [
      { en: 'In my opinion, it is wrong.', fr: "À mon avis, c'est faux." }
    ]
  },

  // ===== UNITÉ 12 — Raconter le passé =====
  l34: {
    title: 'Past simple',
    intro: 'Comment conjuguer et utiliser le passé simple.',
    vocab: [
      { en: 'Went (go)', phon: 'wènte', fr: 'Allé' },
      { en: 'Ate (eat)', phon: 'éïte', fr: 'Mangé' },
      { en: 'Saw (see)', phon: 'so', fr: 'Vu' },
      { en: 'Had (have)', phon: 'had', fr: 'Eu' }
    ],
    examples: [
      { en: 'I went to school yesterday.', fr: 'Je suis allé à l\\'école hier.' },
      { en: 'We watched a movie last night.', fr: 'Nous avons regardé un film hier soir.' }
    ]
  },
  l35: {
    title: 'Raconter ses vacances',
    intro: 'Le vocabulaire pour parler de tes voyages passés.',
    vocab: [
      { en: 'Vacation', phon: 'véï-kéï-cheunn', fr: 'Vacances' },
      { en: 'Last summer', phon: 'last seu-meur', fr: 'L\\'été dernier' },
      { en: 'I visited', phon: 'aï vi-zi-tid', fr: "J'ai visité" },
      { en: 'Amazing', phon: 'eu-méï-zigne', fr: 'Incroyable' }
    ],
    examples: [
      { en: 'I visited Paris last year.', fr: 'J\\'ai visité Paris l\\'année dernière.' },
      { en: 'The trip was amazing.', fr: 'Le voyage était incroyable.' }
    ]
  },
  l36: {
    title: 'Une histoire courte',
    intro: 'Le vocabulaire pour raconter une histoire.',
    vocab: [
      { en: 'Once upon a time', phon: 'ouanns eu-peune eu taïme', fr: 'Il était une fois' },
      { en: 'Suddenly', phon: 'seu-deune-li', fr: 'Soudain' },
      { en: 'Finally', phon: 'faï-neu-li', fr: 'Finalement' },
      { en: 'The end', phon: 'zi ènde', fr: 'La fin' }
    ],
    examples: [
      { en: 'Once upon a time there was a princess.', fr: 'Il était une fois une princesse.' },
      { en: 'Suddenly, he heard a noise.', fr: 'Soudain, il a entendu un bruit.' }
    ]
  },
  b12: {
    title: 'Récapitulatif — Unité 12',
    intro: 'Révise le passé avant le Boss.',
    vocab: [
      { en: 'Came (come)', phon: 'kéïme', fr: 'Venu' },
      { en: 'The trip was amazing', phon: 'ze trip woz eu-méï-zigne', fr: 'Le voyage était incroyable' }
    ],
    examples: [
      { en: 'We went to the beach last summer.', fr: 'Nous sommes allés à la plage l\\'été dernier.' }
    ]
  },

''' + marker

if marker not in content:
    print('MOTIF NON TROUVÉ')
else:
    content = content.replace(marker, new_content, 1)
    open(path, 'w').write(content)
    print('ok')
