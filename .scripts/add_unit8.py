path = 'src/database/exercises.js'
content = open(path).read()

marker = "\nexport function getExercises(lessonId) {"

unit8 = '''
  // ===== UNITÉ 8 — Transports =====
  l22: [
    { type: 'qcm', prompt: 'Comment dit-on "bus" ?', options: ['Bus', 'Car', 'Bike'], answer: 'Bus' },
    { type: 'fill', prompt: 'Complète : "The train ___ (part) at 9am."', answer: 'leaves' },
    { type: 'translate', prompt: 'Traduis : "Où est l\\'arrêt de bus ?"', answer: 'Where is the bus stop?' },
    { type: 'qcm', prompt: '"Platform" désigne...', options: ['Le quai', 'Le billet', 'Le wagon'], answer: 'Le quai' },
    { type: 'drag', prompt: 'Remets dans l\\'ordre : "take / I / the / train"', words: ['I', 'take', 'the', 'train'], answer: 'I take the train' },
    { type: 'truefalse', prompt: '"Ticket" veut dire "billet"', answer: true },
    { type: 'translate', prompt: 'Traduis : "Le prochain bus part dans dix minutes."', answer: 'The next bus leaves in ten minutes' },
    { type: 'qcm', prompt: 'Comment dit-on "métro" ?', options: ['Subway', 'Train', 'Bus'], answer: 'Subway' },
    { type: 'fill', prompt: 'Complète : "I usually ___ (prends) the bus to work."', answer: 'take' }
  ],
  l23: [
    { type: 'qcm', prompt: 'Comment demander son chemin ?', options: ['Excuse me, how do I get to the station?', 'Where station?', 'I want station'], answer: 'Excuse me, how do I get to the station?' },
    { type: 'fill', prompt: 'Complète : "Turn ___ (à gauche) at the corner."', answer: 'left' },
    { type: 'translate', prompt: 'Traduis : "Tout droit."', answer: 'Straight ahead' },
    { type: 'qcm', prompt: '"Roundabout" désigne...', options: ['Un rond-point', 'Un feu rouge', 'Un pont'], answer: 'Un rond-point' },
    { type: 'drag', prompt: 'Remets dans l\\'ordre : "get / I / to / How / do / the / station / ?"', words: ['How', 'do', 'I', 'get', 'to', 'the', 'station?'], answer: 'How do I get to the station?' },
    { type: 'truefalse', prompt: '"Crossroads" veut dire "carrefour"', answer: true },
    { type: 'translate', prompt: 'Traduis : "C\\'est près d\\'ici ?"', answer: 'Is it near here?' },
    { type: 'qcm', prompt: 'Comment dit-on "au coin de la rue" ?', options: ['At the corner', 'At the end', 'At the middle'], answer: 'At the corner' },
    { type: 'fill', prompt: 'Complète : "It is ___ (loin) from here."', answer: 'far' }
  ],
  l24: [
    { type: 'qcm', prompt: 'Comment réserver un billet ?', options: ['I would like to book a ticket', 'I want ticket now', 'Give me a ticket please now'], answer: 'I would like to book a ticket' },
    { type: 'fill', prompt: 'Complète : "A ___ (aller simple) ticket, please."', answer: 'one-way' },
    { type: 'translate', prompt: 'Traduis : "un aller-retour"', answer: 'a round trip' },
    { type: 'qcm', prompt: '"Departure" veut dire...', options: ['Départ', 'Arrivée', 'Retard'], answer: 'Départ' },
    { type: 'drag', prompt: 'Remets dans l\\'ordre : "a / like / would / I / ticket / book / to"', words: ['I', 'would', 'like', 'to', 'book', 'a', 'ticket'], answer: 'I would like to book a ticket' },
    { type: 'truefalse', prompt: '"Delayed" veut dire "en retard"', answer: true },
    { type: 'translate', prompt: 'Traduis : "Le vol est retardé."', answer: 'The flight is delayed' },
    { type: 'qcm', prompt: 'Comment dit-on "quai" ?', options: ['Platform', 'Station', 'Track'], answer: 'Platform' },
    { type: 'fill', prompt: 'Complète : "What ___ (heure) does it arrive?"', answer: 'time' }
  ],
  b8: [
    { type: 'qcm', prompt: 'Comment dit-on "voiture" ?', options: ['Car', 'Bike', 'Boat'], answer: 'Car' },
    { type: 'translate', prompt: 'Traduis : "Comment vais-je à la gare ?"', answer: 'How do I get to the station?' },
    { type: 'fill', prompt: 'Complète : "Turn ___ (à droite) here."', answer: 'right' },
    { type: 'qcm', prompt: 'Comment dit-on "billet" ?', options: ['Ticket', 'Bill', 'Receipt'], answer: 'Ticket' },
    { type: 'drag', prompt: 'Remets dans l\\'ordre : "leaves / at / train / The / 9am"', words: ['The', 'train', 'leaves', 'at', '9am'], answer: 'The train leaves at 9am' },
    { type: 'translate', prompt: 'Traduis : "C\\'est loin d\\'ici ?"', answer: 'Is it far from here?' },
    { type: 'qcm', prompt: 'Comment dit-on "en retard" ?', options: ['Delayed', 'Early', 'On time'], answer: 'Delayed' },
    { type: 'fill', prompt: 'Complète : "I need a ___ (aller-retour) ticket."', answer: 'round-trip' },
    { type: 'truefalse', prompt: '"Straight ahead" veut dire "à gauche"', answer: false }
  ],

''' + marker

if marker not in content:
    print('MOTIF NON TROUVÉ')
else:
    content = content.replace(marker, unit8, 1)
    open(path, 'w').write(content)
    print('ok')
