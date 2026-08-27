path = 'src/database/exercises.js'
content = open(path).read()

marker = "\nexport function getExercises(lessonId) {"

unit11 = '''
  // ===== UNITÉ 11 — Donner son avis =====
  l31: [
    { type: 'qcm', prompt: 'Comment dit-on "J\\'aime" ?', options: ['I like', 'I hate', 'I want'], answer: 'I like' },
    { type: 'fill', prompt: 'Complète : "I ___ (n\\'aime pas) coffee."', answer: 'dislike' },
    { type: 'translate', prompt: 'Traduis : "Je déteste attendre."', answer: 'I hate waiting' },
    { type: 'qcm', prompt: '"I love it" veut dire...', options: ['J\\'adore ça', 'Je déteste ça', 'Je m\\'en fiche'], answer: 'J\\'adore ça' },
    { type: 'drag', prompt: 'Remets dans l\\'ordre : "movies / I / love / action"', words: ['I', 'love', 'action', 'movies'], answer: 'I love action movies' },
    { type: 'truefalse', prompt: '"I can\\'t stand it" veut dire "j\\'adore ça"', answer: false },
    { type: 'translate', prompt: 'Traduis : "Ça ne me plaît pas vraiment."', answer: 'I do not really like it' },
    { type: 'qcm', prompt: 'Comment dit-on "préférer" ?', options: ['To prefer', 'To hate', 'To need'], answer: 'To prefer' },
    { type: 'fill', prompt: 'Complète : "I ___ (pr\\u00e9f\\u00e8re) tea to coffee."', answer: 'prefer' }
  ],
  l32: [
    { type: 'qcm', prompt: 'Comment dire "Je suis d\\'accord" ?', options: ['I agree', 'I disagree', 'I refuse'], answer: 'I agree' },
    { type: 'fill', prompt: 'Complète : "I ___ (ne suis pas d\\'accord) with you."', answer: 'disagree' },
    { type: 'translate', prompt: 'Traduis : "Tu as raison."', answer: 'You are right' },
    { type: 'qcm', prompt: '"You are wrong" veut dire...', options: ['Tu as tort', 'Tu as raison', 'Tu es gentil'], answer: 'Tu as tort' },
    { type: 'drag', prompt: 'Remets dans l\\'ordre : "totally / agree / I"', words: ['I', 'totally', 'agree'], answer: 'I totally agree' },
    { type: 'truefalse', prompt: '"I see your point" veut dire "je comprends ton point de vue"', answer: true },
    { type: 'translate', prompt: 'Traduis : "Je ne suis pas d\\'accord du tout."', answer: 'I completely disagree' },
    { type: 'qcm', prompt: 'Comment dit-on "avoir raison" ?', options: ['To be right', 'To be wrong', 'To be kind'], answer: 'To be right' },
    { type: 'fill', prompt: 'Complète : "I ___ (suis d\\'accord) with that idea."', answer: 'agree' }
  ],
  l33: [
    { type: 'qcm', prompt: 'Comment dit-on "parce que" ?', options: ['Because', 'So', 'But'], answer: 'Because' },
    { type: 'fill', prompt: 'Complète : "I think so ___ (parce que) it makes sense."', answer: 'because' },
    { type: 'translate', prompt: 'Traduis : "À mon avis..."', answer: 'In my opinion...' },
    { type: 'qcm', prompt: '"For example" veut dire...', options: ['Par exemple', 'Cependant', 'En conclusion'], answer: 'Par exemple' },
    { type: 'drag', prompt: 'Remets dans l\\'ordre : "opinion / my / In"', words: ['In', 'my', 'opinion'], answer: 'In my opinion' },
    { type: 'truefalse', prompt: '"However" introduit une opposition', answer: true },
    { type: 'translate', prompt: 'Traduis : "Je pense que c\\'est une bonne idée."', answer: 'I think it is a good idea' },
    { type: 'qcm', prompt: 'Comment dit-on "cependant" ?', options: ['However', 'Because', 'Also'], answer: 'However' },
    { type: 'fill', prompt: 'Complète : "___ (\\u00e0 mon avis), this is wrong."', answer: 'In my opinion' }
  ],
  b11: [
    { type: 'qcm', prompt: 'Comment dit-on "je pense que" ?', options: ['I think that', 'I want that', 'I have that'], answer: 'I think that' },
    { type: 'translate', prompt: 'Traduis : "Je suis totalement d\\'accord avec toi."', answer: 'I totally agree with you' },
    { type: 'fill', prompt: 'Complète : "I ___ (pr\\u00e9f\\u00e8re) reading to watching TV."', answer: 'prefer' },
    { type: 'qcm', prompt: 'Comment dit-on "je ne suis pas d\\'accord" ?', options: ['I disagree', 'I agree', 'I like'], answer: 'I disagree' },
    { type: 'drag', prompt: 'Remets dans l\\'ordre : "your / I / point / see"', words: ['I', 'see', 'your', 'point'], answer: 'I see your point' },
    { type: 'translate', prompt: 'Traduis : "À mon avis, c\\'est faux."', answer: 'In my opinion, it is wrong' },
    { type: 'qcm', prompt: 'Comment dit-on "détester" ?', options: ['To hate', 'To love', 'To like'], answer: 'To hate' },
    { type: 'fill', prompt: 'Complète : "You are ___ (tort) about this."', answer: 'wrong' },
    { type: 'truefalse', prompt: '"To agree" veut dire "être en désaccord"', answer: false }
  ],

''' + marker

if marker not in content:
    print('MOTIF NON TROUVÉ')
else:
    content = content.replace(marker, unit11, 1)
    open(path, 'w').write(content)
    print('ok')
