path = 'src/database/exercises.js'
content = open(path).read()

marker = "\nexport function getExercises(lessonId) {"

unit7 = '''
  // ===== UNITÉ 7 — Restaurant =====
  l19: [
    { type: 'qcm', prompt: 'Comment demander une table ?', options: ['A table for two, please', 'A table two please', 'Table for two now'], answer: 'A table for two, please' },
    { type: 'fill', prompt: 'Complète : "Can I ___ (voir) the menu?"', answer: 'see' },
    { type: 'translate', prompt: 'Traduis : "Je voudrais commander."', answer: 'I would like to order' },
    { type: 'qcm', prompt: '"Waiter" désigne...', options: ['Le serveur', 'Le client', 'Le chef'], answer: 'Le serveur' },
    { type: 'drag', prompt: 'Remets dans l\\'ordre : "like / would / I / water / some"', words: ['I', 'would', 'like', 'some', 'water'], answer: 'I would like some water' },
    { type: 'truefalse', prompt: '"Menu" veut dire "addition"', answer: false },
    { type: 'translate', prompt: 'Traduis : "Qu\\'est-ce que vous recommandez ?"', answer: 'What do you recommend?' },
    { type: 'qcm', prompt: 'Comment dit-on "réserver" ?', options: ['Book a table', 'Buy a table', 'Take a table'], answer: 'Book a table' },
    { type: 'fill', prompt: 'Complète : "I ___ (ai) a reservation."', answer: 'have' }
  ],
  l20: [
    { type: 'qcm', prompt: 'Comment dit-on "poulet" ?', options: ['Chicken', 'Beef', 'Fish'], answer: 'Chicken' },
    { type: 'fill', prompt: 'Complète : "This soup is very ___ (épicé)."', answer: 'spicy' },
    { type: 'translate', prompt: 'Traduis : "Je suis végétarien."', answer: 'I am vegetarian' },
    { type: 'qcm', prompt: '"Dessert" se prononce et se traduit par...', options: ['Dessert', 'Entrée', 'Plat principal'], answer: 'Dessert' },
    { type: 'drag', prompt: 'Remets dans l\\'ordre : "salad / I / a / want"', words: ['I', 'want', 'a', 'salad'], answer: 'I want a salad' },
    { type: 'truefalse', prompt: '"Sweet" veut dire "sucré"', answer: true },
    { type: 'translate', prompt: 'Traduis : "sans sucre"', answer: 'without sugar' },
    { type: 'qcm', prompt: 'Comment dit-on "poisson" ?', options: ['Fish', 'Meat', 'Bread'], answer: 'Fish' },
    { type: 'fill', prompt: 'Complète : "I am ___ (allergique) to nuts."', answer: 'allergic' }
  ],
  l21: [
    { type: 'qcm', prompt: 'Comment demander l\\'addition ?', options: ['Can I have the bill, please?', 'Give me money please', 'Where is my money?'], answer: 'Can I have the bill, please?' },
    { type: 'fill', prompt: 'Complète : "Do you accept ___ (cartes)?"', answer: 'cards' },
    { type: 'translate', prompt: 'Traduis : "Gardez la monnaie."', answer: 'Keep the change' },
    { type: 'qcm', prompt: '"Tip" désigne...', options: ['Le pourboire', 'La note', 'Le reçu'], answer: 'Le pourboire' },
    { type: 'drag', prompt: 'Remets dans l\\'ordre : "the / have / Can / bill / I / ?"', words: ['Can', 'I', 'have', 'the', 'bill?'], answer: 'Can I have the bill?' },
    { type: 'truefalse', prompt: '"Cash" veut dire "espèces"', answer: true },
    { type: 'translate', prompt: 'Traduis : "Est-ce inclus dans le prix ?"', answer: 'Is it included in the price?' },
    { type: 'qcm', prompt: 'Comment dit-on "reçu" ?', options: ['Receipt', 'Recipe', 'Bill'], answer: 'Receipt' },
    { type: 'fill', prompt: 'Complète : "The service was ___ (excellent)."', answer: 'excellent' }
  ],
  b7: [
    { type: 'qcm', prompt: 'Comment dit-on "délicieux" ?', options: ['Delicious', 'Disgusting', 'Boring'], answer: 'Delicious' },
    { type: 'translate', prompt: 'Traduis : "Je voudrais réserver une table pour deux."', answer: 'I would like to book a table for two' },
    { type: 'fill', prompt: 'Complète : "The ___ (serveur) is very kind."', answer: 'waiter' },
    { type: 'qcm', prompt: 'Comment dit-on "addition" ?', options: ['Bill', 'Menu', 'Order'], answer: 'Bill' },
    { type: 'drag', prompt: 'Remets dans l\\'ordre : "like / I / order / to / would"', words: ['I', 'would', 'like', 'to', 'order'], answer: 'I would like to order' },
    { type: 'translate', prompt: 'Traduis : "C\\'était délicieux."', answer: 'It was delicious' },
    { type: 'qcm', prompt: 'Comment dit-on "végétarien" ?', options: ['Vegetarian', 'Vegetable', 'Vegan'], answer: 'Vegetarian' },
    { type: 'fill', prompt: 'Complète : "Can I have the ___ (addition), please?"', answer: 'bill' },
    { type: 'truefalse', prompt: '"Waiter" et "waitress" désignent tous les deux des clients', answer: false }
  ],

''' + marker

if marker not in content:
    print('MOTIF NON TROUVÉ')
else:
    content = content.replace(marker, unit7, 1)
    open(path, 'w').write(content)
    print('ok')
