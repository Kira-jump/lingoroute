path = 'src/database/exercises.js'
content = open(path).read()

marker = "\nexport function getExercises(lessonId) {"

unit9 = '''
  // ===== UNITÉ 9 — Météo & loisirs =====
  l25: [
    { type: 'qcm', prompt: 'Comment demander la météo ?', options: ["What's the weather like?", 'What time is the weather?', 'Where is the weather?'], answer: "What's the weather like?" },
    { type: 'fill', prompt: 'Complète : "It is ___ (ensoleillé) today."', answer: 'sunny' },
    { type: 'translate', prompt: 'Traduis : "Il pleut."', answer: 'It is raining' },
    { type: 'qcm', prompt: '"Cloudy" veut dire...', options: ['Nuageux', 'Ensoleillé', 'Venteux'], answer: 'Nuageux' },
    { type: 'drag', prompt: 'Remets dans l\\'ordre : "cold / very / today / It / is"', words: ['It', 'is', 'very', 'cold', 'today'], answer: 'It is very cold today' },
    { type: 'truefalse', prompt: '"Snowy" veut dire "neigeux"', answer: true },
    { type: 'translate', prompt: 'Traduis : "Il fait chaud aujourd\\'hui."', answer: 'It is hot today' },
    { type: 'qcm', prompt: 'Comment dit-on "venteux" ?', options: ['Windy', 'Rainy', 'Foggy'], answer: 'Windy' },
    { type: 'fill', prompt: 'Complète : "The forecast says it will ___ (neiger)."', answer: 'snow' }
  ],
  l26: [
    { type: 'qcm', prompt: 'Comment dit-on "lecture" (loisir) ?', options: ['Reading', 'Reader', 'Read'], answer: 'Reading' },
    { type: 'fill', prompt: 'Complète : "I enjoy ___ (jouer) football."', answer: 'playing' },
    { type: 'translate', prompt: 'Traduis : "Mon passe-temps préféré est la natation."', answer: 'My favorite hobby is swimming' },
    { type: 'qcm', prompt: '"Hiking" désigne...', options: ['La randonnée', 'La cuisine', 'La peinture'], answer: 'La randonnée' },
    { type: 'drag', prompt: 'Remets dans l\\'ordre : "like / movies / I / watching"', words: ['I', 'like', 'watching', 'movies'], answer: 'I like watching movies' },
    { type: 'truefalse', prompt: '"Painting" veut dire "peinture"', answer: true },
    { type: 'translate', prompt: 'Traduis : "Je joue de la guitare."', answer: 'I play the guitar' },
    { type: 'qcm', prompt: 'Comment dit-on "cuisiner" ?', options: ['Cooking', 'Eating', 'Baking'], answer: 'Cooking' },
    { type: 'fill', prompt: 'Complète : "She loves ___ (dessiner)."', answer: 'drawing' }
  ],
  l27: [
    { type: 'qcm', prompt: 'Comment dit-on "prévoir" ?', options: ['To plan', 'To hope', 'To wish'], answer: 'To plan' },
    { type: 'fill', prompt: 'Complète : "We are ___ (allons) to the beach tomorrow."', answer: 'going' },
    { type: 'translate', prompt: 'Traduis : "Que fais-tu ce week-end ?"', answer: 'What are you doing this weekend?' },
    { type: 'qcm', prompt: '"I am planning to..." veut dire...', options: ['Je prévois de...', 'Je regrette de...', 'Je déteste...'], answer: 'Je prévois de...' },
    { type: 'drag', prompt: 'Remets dans l\\'ordre : "the / going / to / We / are / beach"', words: ['We', 'are', 'going', 'to', 'the', 'beach'], answer: 'We are going to the beach' },
    { type: 'truefalse', prompt: '"I am planning to travel" est au futur proche', answer: true },
    { type: 'translate', prompt: 'Traduis : "J\\'espère voyager cet été."', answer: 'I hope to travel this summer' },
    { type: 'qcm', prompt: 'Comment dit-on "prochainement" ?', options: ['Soon', 'Late', 'Never'], answer: 'Soon' },
    { type: 'fill', prompt: 'Complète : "I ___ (esp\\u00e8re) to see you soon."', answer: 'hope' }
  ],
  b9: [
    { type: 'qcm', prompt: 'Comment dit-on "il neige" ?', options: ['It is snowing', 'It is raining', 'It is sunny'], answer: 'It is snowing' },
    { type: 'translate', prompt: 'Traduis : "J\\'aime lire et faire de la randonnée."', answer: 'I like reading and hiking' },
    { type: 'fill', prompt: 'Complète : "We are ___ (allons) camping next week."', answer: 'going' },
    { type: 'qcm', prompt: 'Comment dit-on "passe-temps" ?', options: ['Hobby', 'Work', 'Job'], answer: 'Hobby' },
    { type: 'drag', prompt: 'Remets dans l\\'ordre : "cold / very / is / It"', words: ['It', 'is', 'very', 'cold'], answer: 'It is very cold' },
    { type: 'translate', prompt: 'Traduis : "Quel temps fait-il ?"', answer: "What's the weather like?" },
    { type: 'qcm', prompt: 'Comment dit-on "randonnée" ?', options: ['Hiking', 'Running', 'Swimming'], answer: 'Hiking' },
    { type: 'fill', prompt: 'Complète : "I enjoy ___ (cuisiner) on weekends."', answer: 'cooking' },
    { type: 'truefalse', prompt: '"Sunny" veut dire "pluvieux"', answer: false }
  ],

''' + marker

if marker not in content:
    print('MOTIF NON TROUVÉ')
else:
    content = content.replace(marker, unit9, 1)
    open(path, 'w').write(content)
    print('ok')
