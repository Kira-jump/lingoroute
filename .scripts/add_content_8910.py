path = 'src/database/lessonContent.js'
content = open(path).read()

marker = "\nexport function getLessonContent(lessonId) {"

new_content = '''
  // ===== UNITÉ 8 — Transports =====
  l22: {
    title: 'Prendre le bus/train',
    intro: 'Le vocabulaire pour se déplacer en transport en commun.',
    vocab: [
      { en: 'Bus stop', phon: 'beuss stop', fr: "Arrêt de bus" },
      { en: 'Train', phon: 'tréïne', fr: 'Train' },
      { en: 'Platform', phon: 'plate-forme', fr: 'Quai' },
      { en: 'Ticket', phon: 'ti-kit', fr: 'Billet' },
      { en: 'Subway', phon: 'seub-wéï', fr: 'Métro' }
    ],
    examples: [
      { en: 'Where is the bus stop?', fr: "Où est l'arrêt de bus ?" },
      { en: 'I usually take the bus to work.', fr: 'Je prends généralement le bus pour aller au travail.' }
    ]
  },
  l23: {
    title: 'Demander son chemin',
    intro: 'Comment demander et donner des directions.',
    vocab: [
      { en: 'Turn left/right', phon: 'teurn lèft / raït', fr: 'Tourne à gauche/droite' },
      { en: 'Straight ahead', phon: 'stréït eu-hèd', fr: 'Tout droit' },
      { en: 'Roundabout', phon: 'raound-eu-baout', fr: 'Rond-point' },
      { en: 'Crossroads', phon: 'kross-rôouds', fr: 'Carrefour' },
      { en: 'Near / Far', phon: 'niir / far', fr: 'Près / Loin' }
    ],
    examples: [
      { en: 'How do I get to the station?', fr: 'Comment vais-je à la gare ?' },
      { en: 'Turn left at the corner.', fr: 'Tourne à gauche au coin de la rue.' }
    ]
  },
  l24: {
    title: 'Réserver un trajet',
    intro: 'Le vocabulaire pour réserver un billet de transport.',
    vocab: [
      { en: 'One-way ticket', phon: 'ouann-wéï ti-kit', fr: 'Billet aller simple' },
      { en: 'Round trip', phon: 'raound trip', fr: 'Aller-retour' },
      { en: 'Departure', phon: 'di-par-tcheur', fr: 'Départ' },
      { en: 'Delayed', phon: 'di-léïd', fr: 'En retard' }
    ],
    examples: [
      { en: 'I would like to book a ticket.', fr: 'Je voudrais réserver un billet.' },
      { en: 'The flight is delayed.', fr: 'Le vol est retardé.' }
    ]
  },
  b8: {
    title: 'Récapitulatif — Unité 8',
    intro: 'Révise le vocabulaire des transports avant le Boss.',
    vocab: [
      { en: 'How do I get to...?', phon: 'haou dou aï guèt tou', fr: 'Comment vais-je à... ?' },
      { en: 'Round-trip ticket', phon: 'raound-trip ti-kit', fr: 'Billet aller-retour' }
    ],
    examples: [
      { en: 'Is it far from here?', fr: "Est-ce loin d'ici ?" }
    ]
  },

  // ===== UNITÉ 9 — Météo & loisirs =====
  l25: {
    title: 'Parler de la météo',
    intro: 'Le vocabulaire pour décrire le temps qu\\'il fait.',
    vocab: [
      { en: 'Sunny', phon: 'seu-ni', fr: 'Ensoleillé' },
      { en: 'Rainy', phon: 'réï-ni', fr: 'Pluvieux' },
      { en: 'Cloudy', phon: 'klaou-di', fr: 'Nuageux' },
      { en: 'Windy', phon: 'ouine-di', fr: 'Venteux' },
      { en: 'Snowy', phon: 'snôou-i', fr: 'Neigeux' }
    ],
    examples: [
      { en: "What's the weather like?", fr: 'Quel temps fait-il ?' },
      { en: 'It is very cold today.', fr: 'Il fait très froid aujourd\\'hui.' }
    ]
  },
  l26: {
    title: 'Loisirs préférés',
    intro: 'Le vocabulaire des passe-temps et activités.',
    vocab: [
      { en: 'Reading', phon: 'ri-digne', fr: 'Lecture' },
      { en: 'Hiking', phon: 'haï-kigne', fr: 'Randonnée' },
      { en: 'Cooking', phon: 'kou-kigne', fr: 'Cuisine' },
      { en: 'Painting', phon: 'péïn-tigne', fr: 'Peinture' },
      { en: 'Hobby', phon: 'ho-bi', fr: 'Passe-temps' }
    ],
    examples: [
      { en: 'My favorite hobby is swimming.', fr: 'Mon passe-temps préféré est la natation.' },
      { en: 'I like watching movies.', fr: "J'aime regarder des films." }
    ]
  },
  l27: {
    title: 'Faire des projets',
    intro: 'Comment parler de tes projets futurs.',
    vocab: [
      { en: 'To plan', phon: 'tou plann', fr: 'Prévoir' },
      { en: "I'm planning to...", phon: 'aïm pla-nigne tou', fr: 'Je prévois de...' },
      { en: 'Soon', phon: 'soune', fr: 'Bientôt' },
      { en: 'This weekend', phon: 'ziss wik-ènd', fr: 'Ce week-end' }
    ],
    examples: [
      { en: 'We are going to the beach tomorrow.', fr: 'Nous allons à la plage demain.' },
      { en: 'I hope to travel this summer.', fr: 'J\\'espère voyager cet été.' }
    ]
  },
  b9: {
    title: 'Récapitulatif — Unité 9',
    intro: 'Révise météo et loisirs avant le Boss.',
    vocab: [
      { en: "What's the weather like?", phon: 'wots ze wè-zeur laïk', fr: 'Quel temps fait-il ?' },
      { en: 'Hobby', phon: 'ho-bi', fr: 'Passe-temps' }
    ],
    examples: [
      { en: 'I like reading and hiking.', fr: "J'aime lire et faire de la randonnée." }
    ]
  },

  // ===== UNITÉ 10 — Travail =====
  l28: {
    title: 'Métiers',
    intro: 'Le vocabulaire des professions.',
    vocab: [
      { en: 'Teacher', phon: 'ti-tcheur', fr: 'Professeur' },
      { en: 'Doctor', phon: 'dok-teur', fr: 'Médecin' },
      { en: 'Engineer', phon: 'èn-dji-nir', fr: 'Ingénieur' },
      { en: 'Lawyer', phon: 'lo-yeur', fr: 'Avocat' },
      { en: 'Nurse', phon: 'neurse', fr: 'Infirmier/ère' }
    ],
    examples: [
      { en: 'What do you do for a living?', fr: 'Que fais-tu dans la vie ?' },
      { en: 'I am an engineer.', fr: 'Je suis ingénieur.' }
    ]
  },
  l29: {
    title: 'Routine au travail',
    intro: 'Le vocabulaire du quotidien au bureau.',
    vocab: [
      { en: 'Meeting', phon: 'mi-tigne', fr: 'Réunion' },
      { en: 'Deadline', phon: 'dèd-laïne', fr: 'Date limite' },
      { en: 'Colleague', phon: 'ko-lig', fr: 'Collègue' },
      { en: 'Break', phon: 'bréïk', fr: 'Pause' },
      { en: 'Salary', phon: 'sa-leu-ri', fr: 'Salaire' }
    ],
    examples: [
      { en: 'I have a meeting today.', fr: "J'ai une réunion aujourd'hui." },
      { en: 'I work from Monday to Friday.', fr: 'Je travaille du lundi au vendredi.' }
    ]
  },
  l30: {
    title: 'Petites annonces',
    intro: 'Le vocabulaire pour chercher un emploi.',
    vocab: [
      { en: 'Job opening', phon: 'djob ôou-peu-nigne', fr: 'Poste vacant' },
      { en: 'Interview', phon: 'in-teur-vyou', fr: 'Entretien' },
      { en: 'Experience', phon: 'èks-pi-ri-euns', fr: 'Expérience' },
      { en: 'Resume', phon: 'ré-zou-méï', fr: 'CV' }
    ],
    examples: [
      { en: 'I applied for this position.', fr: 'J\\'ai postulé pour ce poste.' },
      { en: 'The interview is tomorrow.', fr: "L'entretien est demain." }
    ]
  },
  b10: {
    title: 'Récapitulatif — Unité 10',
    intro: 'Révise le vocabulaire du travail avant le Boss final du palier A2.',
    vocab: [
      { en: 'Job interview', phon: 'djob in-teur-vyou', fr: "Entretien d'embauche" },
      { en: 'Salary', phon: 'sa-leu-ri', fr: 'Salaire' }
    ],
    examples: [
      { en: 'What is your job?', fr: 'Quel est ton métier ?' }
    ]
  },

''' + marker

if marker not in content:
    print('MOTIF NON TROUVÉ')
else:
    content = content.replace(marker, new_content, 1)
    open(path, 'w').write(content)
    print('ok')
