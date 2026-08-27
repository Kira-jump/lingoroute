path = 'src/database/exercises.js'
content = open(path).read()

marker = '''}

export function getExercises(lessonId) {'''

unit14 = '''  ,

  // ===== UNITÉ 14 — Voyage & imprévus =====
  l40: [
    { type: 'qcm', prompt: 'Comment dit-on "vol" (avion) ?', options: ['Flight', 'Trip', 'Journey'], answer: 'Flight' },
    { type: 'fill', prompt: 'Complète : "My ___ (vol) leaves at 6am."', answer: 'flight' },
    { type: 'translate', prompt: 'Traduis : "Où est ma porte d\\'embarquement ?"', answer: 'Where is my gate?' },
    { type: 'qcm', prompt: '"Boarding pass" désigne...', options: ["La carte d'embarquement", 'Le passeport', 'Le billet retour'], answer: "La carte d'embarquement" },
    { type: 'drag', prompt: 'Remets dans l\\'ordre : "boarding / Where / is / my / pass / ?"', words: ['Where', 'is', 'my', 'boarding', 'pass?'], answer: 'Where is my boarding pass?' },
    { type: 'truefalse', prompt: '"Luggage" veut dire "bagages"', answer: true },
    { type: 'translate', prompt: 'Traduis : "Le vol est retardé."', answer: 'The flight is delayed' },
    { type: 'qcm', prompt: 'Comment dit-on "passeport" ?', options: ['Passport', 'Ticket', 'Visa'], answer: 'Passport' },
    { type: 'fill', prompt: 'Complète : "I need to check ___ (enregistrer) my bag."', answer: 'in' }
  ],
  l41: [
    { type: 'qcm', prompt: 'Comment dit-on "j\\'ai perdu" ?', options: ['I lost', 'I find', 'I have'], answer: 'I lost' },
    { type: 'fill', prompt: 'Complète : "I ___ (ai perdu) my passport."', answer: 'lost' },
    { type: 'translate', prompt: 'Traduis : "Ma valise est perdue."', answer: 'My suitcase is lost' },
    { type: 'qcm', prompt: '"Cancelled" veut dire...', options: ['Annulé', 'Retardé', 'Confirmé'], answer: 'Annulé' },
    { type: 'drag', prompt: 'Remets dans l\\'ordre : "flight / cancelled / My / was"', words: ['My', 'flight', 'was', 'cancelled'], answer: 'My flight was cancelled' },
    { type: 'truefalse', prompt: '"Stolen" veut dire "volé"', answer: true },
    { type: 'translate', prompt: 'Traduis : "J\\'ai raté ma correspondance."', answer: 'I missed my connection' },
    { type: 'qcm', prompt: 'Comment dit-on "raté" (un vol) ?', options: ['Missed', 'Caught', 'Booked'], answer: 'Missed' },
    { type: 'fill', prompt: 'Complète : "My bag was ___ (vol\\u00e9)."', answer: 'stolen' }
  ],
  l42: [
    { type: 'qcm', prompt: 'Comment demander de l\\'aide ?', options: ['Can you help me?', 'You help me now', 'Help now please'], answer: 'Can you help me?' },
    { type: 'fill', prompt: 'Complète : "I need ___ (de l\\'aide)."', answer: 'help' },
    { type: 'translate', prompt: 'Traduis : "Je suis perdu."', answer: 'I am lost' },
    { type: 'qcm', prompt: '"Emergency" veut dire...', options: ["Urgence", "Vacances", "Retard"], answer: "Urgence" },
    { type: 'drag', prompt: 'Remets dans l\\'ordre : "you / me / Can / help / ?"', words: ['Can', 'you', 'help', 'me?'], answer: 'Can you help me?' },
    { type: 'truefalse', prompt: '"Police station" veut dire "commissariat"', answer: true },
    { type: 'translate', prompt: 'Traduis : "Appelez la police, s\\'il vous plaît."', answer: 'Call the police, please' },
    { type: 'qcm', prompt: 'Comment dit-on "ambassade" ?', options: ['Embassy', 'Airport', 'Hotel'], answer: 'Embassy' },
    { type: 'fill', prompt: 'Complète : "Where is the nearest ___ (h\\u00f4pital)?"', answer: 'hospital' }
  ],
  b14: [
    { type: 'qcm', prompt: 'Comment dit-on "annulé" ?', options: ['Cancelled', 'Confirmed', 'Delayed'], answer: 'Cancelled' },
    { type: 'translate', prompt: 'Traduis : "J\\'ai perdu mon passeport à l\\'aéroport."', answer: 'I lost my passport at the airport' },
    { type: 'fill', prompt: 'Complète : "Can you ___ (aider) me, please?"', answer: 'help' },
    { type: 'qcm', prompt: 'Comment dit-on "urgence" ?', options: ['Emergency', 'Holiday', 'Trip'], answer: 'Emergency' },
    { type: 'drag', prompt: 'Remets dans l\\'ordre : "was / My / flight / delayed"', words: ['My', 'flight', 'was', 'delayed'], answer: 'My flight was delayed' },
    { type: 'translate', prompt: 'Traduis : "Où est le commissariat ?"', answer: 'Where is the police station?' },
    { type: 'qcm', prompt: 'Comment dit-on "bagages" ?', options: ['Luggage', 'Ticket', 'Gate'], answer: 'Luggage' },
    { type: 'fill', prompt: 'Complète : "I need to find the ___ (ambassade)."', answer: 'embassy' },
    { type: 'truefalse', prompt: '"Boarding pass" veut dire "passeport"', answer: false }
  ]
''' + marker

if marker not in content:
    print('MOTIF NON TROUVÉ')
else:
    content = content.replace(marker, unit14, 1)
    open(path, 'w').write(content)
    print('ok')
