path = 'src/database/exercises.js'
content = open(path).read()

marker = "\nexport function getExercises(lessonId) {"

unit6 = '''
  // ===== UNITÉ 6 — Courses =====
  l16: [
    { type: 'qcm', prompt: 'Comment dit-on "supermarché" ?', options: ['Supermarket', 'Restaurant', 'Bakery'], answer: 'Supermarket' },
    { type: 'fill', prompt: 'Complète : "I need to buy some ___ (pain)."', answer: 'bread' },
    { type: 'translate', prompt: 'Traduis : "Où sont les légumes ?"', answer: 'Where are the vegetables?' },
    { type: 'qcm', prompt: '"Trolley" désigne...', options: ['Un chariot', 'Une caisse', 'Un panier'], answer: 'Un chariot' },
    { type: 'drag', prompt: 'Remets dans l\\'ordre : "milk / need / some / I"', words: ['I', 'need', 'some', 'milk'], answer: 'I need some milk' },
    { type: 'truefalse', prompt: '"Checkout" veut dire "caisse"', answer: true },
    { type: 'translate', prompt: 'Traduis : "le rayon fruits"', answer: 'the fruit aisle' },
    { type: 'qcm', prompt: 'Comment dit-on "panier" ?', options: ['Basket', 'Bag', 'Box'], answer: 'Basket' },
    { type: 'fill', prompt: 'Complète : "The store ___ (ferme) at 8pm."', answer: 'closes' }
  ],
  l17: [
    { type: 'qcm', prompt: 'Comment demander le prix ?', options: ['How much is it?', 'How many is it?', 'What price it?'], answer: 'How much is it?' },
    { type: 'fill', prompt: 'Complète : "It costs five ___ (dollars)."', answer: 'dollars' },
    { type: 'translate', prompt: 'Traduis : "C\\'est trop cher."', answer: 'It is too expensive' },
    { type: 'qcm', prompt: '"Cheap" veut dire...', options: ['Bon marché', 'Cher', 'Gratuit'], answer: 'Bon marché' },
    { type: 'drag', prompt: 'Remets dans l\\'ordre : "much / is / How / this / ?"', words: ['How', 'much', 'is', 'this?'], answer: 'How much is this?' },
    { type: 'truefalse', prompt: '"A dozen" signifie 12', answer: true },
    { type: 'translate', prompt: 'Traduis : "deux kilos de pommes"', answer: 'two kilos of apples' },
    { type: 'qcm', prompt: 'Comment dit-on "gratuit" ?', options: ['Free', 'Cheap', 'Expensive'], answer: 'Free' },
    { type: 'fill', prompt: 'Complète : "Can I have a ___ (r\\u00e9duction)?"', answer: 'discount' }
  ],
  l18: [
    { type: 'qcm', prompt: 'Comparatif de "big" ?', options: ['Bigger', 'More big', 'Biggest'], answer: 'Bigger' },
    { type: 'fill', prompt: 'Complète : "This one is ___ (moins cher) than that one."', answer: 'cheaper' },
    { type: 'translate', prompt: 'Traduis : "C\\'est la meilleure option."', answer: 'This is the best option' },
    { type: 'qcm', prompt: 'Superlatif de "good" ?', options: ['Best', 'Gooder', 'More good'], answer: 'Best' },
    { type: 'drag', prompt: 'Remets dans l\\'ordre : "than / This / is / bigger / that"', words: ['This', 'is', 'bigger', 'than', 'that'], answer: 'This is bigger than that' },
    { type: 'truefalse', prompt: '"Worse" est le comparatif de "bad"', answer: true },
    { type: 'translate', prompt: 'Traduis : "moins cher"', answer: 'cheaper' },
    { type: 'qcm', prompt: 'Comment dit-on "identique" ?', options: ['The same', 'Different', 'Similar'], answer: 'The same' },
    { type: 'fill', prompt: 'Complète : "This is the ___ (meilleur) shop in town."', answer: 'best' }
  ],
  b6: [
    { type: 'qcm', prompt: 'Comment dit-on "faire les courses" ?', options: ['Go shopping', 'Go working', 'Go eating'], answer: 'Go shopping' },
    { type: 'translate', prompt: 'Traduis : "Combien ça coûte ?"', answer: 'How much does it cost?' },
    { type: 'fill', prompt: 'Complète : "I have a ___ (liste) of things to buy."', answer: 'list' },
    { type: 'qcm', prompt: 'Comment dit-on "réduction" ?', options: ['Discount', 'Price', 'Bill'], answer: 'Discount' },
    { type: 'drag', prompt: 'Remets dans l\\'ordre : "is / than / cheaper / This / that"', words: ['This', 'is', 'cheaper', 'than', 'that'], answer: 'This is cheaper than that' },
    { type: 'translate', prompt: 'Traduis : "le rayon des boissons"', answer: 'the drinks aisle' },
    { type: 'qcm', prompt: 'Comment dit-on "chariot" ?', options: ['Trolley', 'Basket', 'Bag'], answer: 'Trolley' },
    { type: 'fill', prompt: 'Complète : "Where is the ___ (caisse)?"', answer: 'checkout' },
    { type: 'truefalse', prompt: '"Expensive" veut dire "bon marché"', answer: false }
  ],

''' + marker

if marker not in content:
    print('MOTIF NON TROUVÉ')
else:
    content = content.replace(marker, unit6, 1)
    open(path, 'w').write(content)
    print('ok')
