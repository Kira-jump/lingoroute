export const exercisesByLesson = {
  // ===== UNITÉ 1 =====
  l1: [
    { type: 'qcm', prompt: 'Comment dit-on "Bonjour" (le matin) ?', options: ['Good morning', 'Good night', 'Good bye'], answer: 'Good morning' },
    { type: 'qcm', prompt: 'Comment dit-on "Bonsoir" ?', options: ['Good morning', 'Good evening', 'Good afternoon'], answer: 'Good evening' },
    { type: 'translate', prompt: 'Traduis : "Salut !"', answer: 'Hi!' },
    { type: 'fill', prompt: 'Complète : "How ___ you?"', answer: 'are' },
    { type: 'qcm', prompt: 'Réponse à "How are you?"', options: ['I am fine, thanks', 'I am Paris', 'I am Monday'], answer: 'I am fine, thanks' },
    { type: 'drag', prompt: 'Remets dans l\'ordre : "you / see / Goodbye, / later"', words: ['Goodbye,', 'see', 'you', 'later'], answer: 'Goodbye, see you later' },
    { type: 'translate', prompt: 'Traduis : "À bientôt"', answer: 'See you soon' },
    { type: 'qcm', prompt: 'Comment dit-on "Bonne nuit" ?', options: ['Good night', 'Good morning', 'Hello'], answer: 'Good night' },
    { type: 'fill', prompt: 'Complète : "Nice to ___ you."', answer: 'meet' },
    { type: 'truefalse', prompt: '"Hi" veut dire "Salut"', answer: true },
    { type: 'truefalse', prompt: '"Bye" veut dire "Bonjour"', answer: false }
  ],
  l2: [
    { type: 'qcm', prompt: 'Comment dit-on "Je m\'appelle..." ?', options: ['My name is...', 'I am from...', 'I have...'], answer: 'My name is...' },
    { type: 'fill', prompt: 'Complète : "I ___ 20 years old."', answer: 'am' },
    { type: 'translate', prompt: 'Traduis : "Quel est ton nom ?"', answer: 'What is your name?' },
    { type: 'qcm', prompt: 'Que veut dire "I am a student" ?', options: ['Je suis étudiant', 'Je suis fatigué', 'Je suis désolé'], answer: 'Je suis étudiant' },
    { type: 'drag', prompt: 'Remets dans l\'ordre : "old / I / years / 25 / am"', words: ['I', 'am', '25', 'years', 'old'], answer: 'I am 25 years old' },
    { type: 'qcm', prompt: 'Comment demander l\'âge de quelqu\'un ?', options: ['How old are you?', 'How are you old?', 'What old are you?'], answer: 'How old are you?' },
    { type: 'translate', prompt: 'Traduis : "J\'ai vingt ans."', answer: 'I am twenty years old' },
    { type: 'fill', prompt: 'Complète : "Nice to meet ___."', answer: 'you' },
    { type: 'qcm', prompt: 'Que signifie "Where are you from?"', options: ['D\'où viens-tu ?', 'Où vas-tu ?', 'Qui es-tu ?'], answer: 'D\'où viens-tu ?' }
  ],
  l3: [
    { type: 'qcm', prompt: 'Comment dit-on "Je viens de France" ?', options: ['I am from France', 'I go to France', 'I am France'], answer: 'I am from France' },
    { type: 'fill', prompt: 'Complète : "She is ___ (française)."', answer: 'French' },
    { type: 'translate', prompt: 'Traduis : "Il est anglais."', answer: 'He is English' },
    { type: 'qcm', prompt: '"American" correspond à...', options: ['Américain', 'Africain', 'Asiatique'], answer: 'Américain' },
    { type: 'drag', prompt: 'Remets dans l\'ordre : "from / are / Where / you / ?"', words: ['Where', 'are', 'you', 'from?'], answer: 'Where are you from?' },
    { type: 'qcm', prompt: 'Quelle nationalité pour quelqu\'un du Canada ?', options: ['Canadian', 'Canadish', 'Canadan'], answer: 'Canadian' },
    { type: 'translate', prompt: 'Traduis : "Nous sommes belges."', answer: 'We are Belgian' },
    { type: 'fill', prompt: 'Complète : "They ___ from Spain."', answer: 'are' },
    { type: 'qcm', prompt: 'Que veut dire "country" ?', options: ['Pays', 'Ville', 'Langue'], answer: 'Pays' }
  ],
  b1: [
    { type: 'qcm', prompt: 'Comment dit-on "Bonjour" et "Au revoir" en un mot chacun ?', options: ['Hello / Goodbye', 'Hi / Hello', 'Bye / Hi'], answer: 'Hello / Goodbye' },
    { type: 'translate', prompt: 'Traduis : "Je m\'appelle Sarah et j\'ai 22 ans."', answer: 'My name is Sarah and I am 22 years old' },
    { type: 'fill', prompt: 'Complète : "I ___ from Senegal."', answer: 'am' },
    { type: 'qcm', prompt: 'Réponse polie à une présentation ?', options: ['Nice to meet you', 'See you later', 'Good night'], answer: 'Nice to meet you' },
    { type: 'drag', prompt: 'Remets dans l\'ordre : "is / What / your / name / ?"', words: ['What', 'is', 'your', 'name?'], answer: 'What is your name?' },
    { type: 'translate', prompt: 'Traduis : "D\'où viens-tu ?"', answer: 'Where are you from?' },
    { type: 'qcm', prompt: 'Comment dit-on "Enchanté(e)" ?', options: ['Nice to meet you', 'Thank you', 'Excuse me'], answer: 'Nice to meet you' },
    { type: 'fill', prompt: 'Complète : "She ___ French."', answer: 'is' },
    { type: 'qcm', prompt: 'Comment dit-on "À bientôt" ?', options: ['See you soon', 'Good morning', 'I am sorry'], answer: 'See you soon' }
  ],

  // ===== UNITÉ 2 — Famille =====
  l4: [
    { type: 'qcm', prompt: 'Comment dit-on "père" ?', options: ['Father', 'Brother', 'Son'], answer: 'Father' },
    { type: 'qcm', prompt: 'Comment dit-on "mère" ?', options: ['Sister', 'Mother', 'Daughter'], answer: 'Mother' },
    { type: 'translate', prompt: 'Traduis : "mon frère"', answer: 'my brother' },
    { type: 'fill', prompt: 'Complète : "This is my ___ (sœur)."', answer: 'sister' },
    { type: 'qcm', prompt: 'Comment dit-on "grands-parents" ?', options: ['Grandparents', 'Bigparents', 'Oldparents'], answer: 'Grandparents' },
    { type: 'drag', prompt: 'Remets dans l\'ordre : "my / This / mother / is"', words: ['This', 'is', 'my', 'mother'], answer: 'This is my mother' },
    { type: 'truefalse', prompt: '"Son" veut dire "fils"', answer: true },
    { type: 'translate', prompt: 'Traduis : "ma fille"', answer: 'my daughter' },
    { type: 'qcm', prompt: 'Comment dit-on "enfants" ?', options: ['Children', 'Childs', 'Kider'], answer: 'Children' }
  ],
  l5: [
    { type: 'qcm', prompt: 'Comment décrire quelqu\'un de "grand" ?', options: ['Tall', 'Short', 'Small'], answer: 'Tall' },
    { type: 'fill', prompt: 'Complète : "He is very ___ (gentil)."', answer: 'kind' },
    { type: 'translate', prompt: 'Traduis : "Elle est jeune."', answer: 'She is young' },
    { type: 'qcm', prompt: '"Old" veut dire...', options: ['Vieux', 'Jeune', 'Grand'], answer: 'Vieux' },
    { type: 'drag', prompt: 'Remets dans l\'ordre : "hair / has / She / long"', words: ['She', 'has', 'long', 'hair'], answer: 'She has long hair' },
    { type: 'truefalse', prompt: '"Short" veut dire "petit/court"', answer: true },
    { type: 'translate', prompt: 'Traduis : "Il a les yeux bleus."', answer: 'He has blue eyes' },
    { type: 'qcm', prompt: 'Comment dit-on "beau/belle" ?', options: ['Beautiful', 'Ugly', 'Boring'], answer: 'Beautiful' },
    { type: 'fill', prompt: 'Complète : "She is ___ (petite)."', answer: 'short' }
  ],
  l6: [
    { type: 'qcm', prompt: 'Comment dit-on "mon" (masculin) ?', options: ['My', 'Your', 'His'], answer: 'My' },
    { type: 'fill', prompt: 'Complète : "This is ___ (son, à lui) car."', answer: 'his' },
    { type: 'translate', prompt: 'Traduis : "C\'est sa maison (à elle)."', answer: 'This is her house' },
    { type: 'qcm', prompt: '"Their" veut dire...', options: ['Leur', 'Notre', 'Votre'], answer: 'Leur' },
    { type: 'drag', prompt: 'Remets dans l\'ordre : "our / This / house / is"', words: ['This', 'is', 'our', 'house'], answer: 'This is our house' },
    { type: 'truefalse', prompt: '"Your" veut dire "ton/votre"', answer: true },
    { type: 'translate', prompt: 'Traduis : "C\'est mon livre."', answer: 'This is my book' },
    { type: 'qcm', prompt: 'Comment dit-on "leur" (pluriel) ?', options: ['Their', 'They', 'Them'], answer: 'Their' },
    { type: 'fill', prompt: 'Complète : "Is this ___ (ta) bag?"', answer: 'your' }
  ],
  b2: [
    { type: 'qcm', prompt: 'Comment dit-on "famille" ?', options: ['Family', 'Familly', 'Familia'], answer: 'Family' },
    { type: 'translate', prompt: 'Traduis : "Mon père est grand et gentil."', answer: 'My father is tall and kind' },
    { type: 'fill', prompt: 'Complète : "This is ___ (notre) family."', answer: 'our' },
    { type: 'qcm', prompt: 'Comment dit-on "cousin" ?', options: ['Cousin', 'Nephew', 'Uncle'], answer: 'Cousin' },
    { type: 'drag', prompt: 'Remets dans l\'ordre : "sister / has / She / a"', words: ['She', 'has', 'a', 'sister'], answer: 'She has a sister' },
    { type: 'translate', prompt: 'Traduis : "C\'est ma grand-mère."', answer: 'This is my grandmother' },
    { type: 'qcm', prompt: 'Comment dit-on "oncle" ?', options: ['Uncle', 'Aunt', 'Cousin'], answer: 'Uncle' },
    { type: 'fill', prompt: 'Complète : "He has ___ (bleus) eyes."', answer: 'blue' },
    { type: 'truefalse', prompt: '"Daughter" veut dire "fils"', answer: false }
  ],

  // ===== UNITÉ 3 — Nombres & heure =====
  l7: [
    { type: 'qcm', prompt: 'Comment dit-on "un" ?', options: ['One', 'Two', 'Ten'], answer: 'One' },
    { type: 'fill', prompt: 'Complète la suite : "one, two, ___"', answer: 'three' },
    { type: 'translate', prompt: 'Traduis : "cinq"', answer: 'five' },
    { type: 'qcm', prompt: '"Ten" correspond à...', options: ['10', '2', '100'], answer: '10' },
    { type: 'drag', prompt: 'Remets dans l\'ordre croissant : "three / one / two"', words: ['one', 'two', 'three'], answer: 'one two three' },
    { type: 'truefalse', prompt: '"Seven" veut dire "sept"', answer: true },
    { type: 'translate', prompt: 'Traduis : "vingt"', answer: 'twenty' },
    { type: 'qcm', prompt: 'Comment dit-on "cent" ?', options: ['Hundred', 'Thousand', 'Million'], answer: 'Hundred' },
    { type: 'fill', prompt: 'Complète : "I have ___ (deux) brothers."', answer: 'two' }
  ],
  l8: [
    { type: 'qcm', prompt: 'Comment demander l\'heure ?', options: ['What time is it?', 'What day is it?', 'Where is it?'], answer: 'What time is it?' },
    { type: 'fill', prompt: 'Complète : "It is 3 ___ (heures)."', answer: "o'clock" },
    { type: 'translate', prompt: 'Traduis : "Il est midi."', answer: 'It is noon' },
    { type: 'qcm', prompt: '"Half past two" signifie...', options: ['14h30', '14h00', '2h15'], answer: '14h30' },
    { type: 'drag', prompt: 'Remets dans l\'ordre : "it / time / is / What / ?"', words: ['What', 'time', 'is', 'it?'], answer: 'What time is it?' },
    { type: 'truefalse', prompt: '"Midnight" veut dire "minuit"', answer: true },
    { type: 'translate', prompt: 'Traduis : "Il est neuf heures."', answer: 'It is nine o\'clock' },
    { type: 'qcm', prompt: 'Comment dit-on "tôt" ?', options: ['Early', 'Late', 'Soon'], answer: 'Early' },
    { type: 'fill', prompt: 'Complète : "I wake up ___ (tôt)."', answer: 'early' }
  ],
  l9: [
    { type: 'qcm', prompt: 'Comment dit-on "lundi" ?', options: ['Monday', 'Sunday', 'Tuesday'], answer: 'Monday' },
    { type: 'fill', prompt: 'Complète : "Today is ___ (samedi)."', answer: 'Saturday' },
    { type: 'translate', prompt: 'Traduis : "janvier"', answer: 'January' },
    { type: 'qcm', prompt: '"Weekend" désigne...', options: ['Samedi et dimanche', 'Toute la semaine', 'Le premier jour'], answer: 'Samedi et dimanche' },
    { type: 'drag', prompt: 'Remets dans l\'ordre : "week / this / busy / is / My"', words: ['My', 'week', 'is', 'busy', 'this'], answer: 'My week is busy this' },
    { type: 'truefalse', prompt: '"December" est le premier mois de l\'année', answer: false },
    { type: 'translate', prompt: 'Traduis : "vendredi"', answer: 'Friday' },
    { type: 'qcm', prompt: 'Comment dit-on "mois" ?', options: ['Month', 'Week', 'Year'], answer: 'Month' },
    { type: 'fill', prompt: 'Complète : "My birthday is in ___ (mai)."', answer: 'May' }
  ],
  b3: [
    { type: 'qcm', prompt: 'Comment dit-on "quinze" ?', options: ['Fifteen', 'Fifty', 'Five'], answer: 'Fifteen' },
    { type: 'translate', prompt: 'Traduis : "Il est cinq heures du soir."', answer: 'It is five o\'clock in the evening' },
    { type: 'fill', prompt: 'Complète : "Today is ___ (mardi)."', answer: 'Tuesday' },
    { type: 'qcm', prompt: 'Comment dit-on "année" ?', options: ['Year', 'Day', 'Hour'], answer: 'Year' },
    { type: 'drag', prompt: 'Remets dans l\'ordre : "at / meet / We / 6pm"', words: ['We', 'meet', 'at', '6pm'], answer: 'We meet at 6pm' },
    { type: 'translate', prompt: 'Traduis : "trente"', answer: 'thirty' },
    { type: 'qcm', prompt: 'Comment dit-on "dimanche" ?', options: ['Sunday', 'Monday', 'Saturday'], answer: 'Sunday' },
    { type: 'fill', prompt: 'Complète : "It is ___ (minuit)."', answer: 'midnight' },
    { type: 'truefalse', prompt: '"Fourty" est l\'orthographe correcte de 40', answer: false }
  ],

  // ===== UNITÉ 4 — Couleurs & objets =====
  l10: [
    { type: 'qcm', prompt: 'Comment dit-on "rouge" ?', options: ['Red', 'Blue', 'Green'], answer: 'Red' },
    { type: 'fill', prompt: 'Complète : "The sky is ___ (bleu)."', answer: 'blue' },
    { type: 'translate', prompt: 'Traduis : "jaune"', answer: 'yellow' },
    { type: 'qcm', prompt: '"Black" veut dire...', options: ['Noir', 'Blanc', 'Gris'], answer: 'Noir' },
    { type: 'drag', prompt: 'Remets dans l\'ordre : "car / red / My / is"', words: ['My', 'car', 'is', 'red'], answer: 'My car is red' },
    { type: 'truefalse', prompt: '"Green" veut dire "vert"', answer: true },
    { type: 'translate', prompt: 'Traduis : "violet"', answer: 'purple' },
    { type: 'qcm', prompt: 'Comment dit-on "orange" ?', options: ['Orange', 'Pink', 'Brown'], answer: 'Orange' },
    { type: 'fill', prompt: 'Complète : "I like the color ___ (rose)."', answer: 'pink' }
  ],
  l11: [
    { type: 'qcm', prompt: 'Comment dit-on "sac à dos" ?', options: ['Backpack', 'Bag', 'Box'], answer: 'Backpack' },
    { type: 'fill', prompt: 'Complète : "Where is my ___ (téléphone)?"', answer: 'phone' },
    { type: 'translate', prompt: 'Traduis : "les clés"', answer: 'the keys' },
    { type: 'qcm', prompt: '"Book" veut dire...', options: ['Livre', 'Table', 'Chaise'], answer: 'Livre' },
    { type: 'drag', prompt: 'Remets dans l\'ordre : "table / on / The / is / the / book"', words: ['The', 'book', 'is', 'on', 'the', 'table'], answer: 'The book is on the table' },
    { type: 'truefalse', prompt: '"Chair" veut dire "table"', answer: false },
    { type: 'translate', prompt: 'Traduis : "l\'ordinateur"', answer: 'the computer' },
    { type: 'qcm', prompt: 'Comment dit-on "montre" ?', options: ['Watch', 'Clock', 'Time'], answer: 'Watch' },
    { type: 'fill', prompt: 'Complète : "I need a ___ (stylo)."', answer: 'pen' }
  ],
  l12: [
    { type: 'qcm', prompt: 'Comment dit-on "ceci" (proche) ?', options: ['This', 'That', 'These'], answer: 'This' },
    { type: 'fill', prompt: 'Complète : "___ (Cela) is my car."', answer: 'That' },
    { type: 'translate', prompt: 'Traduis : "Ces livres sont à moi."', answer: 'These books are mine' },
    { type: 'qcm', prompt: '"Those" (pluriel, loin) veut dire...', options: ['Ceux-là', 'Celui-ci', 'Ceci'], answer: 'Ceux-là' },
    { type: 'drag', prompt: 'Remets dans l\'ordre : "is / pen / This / my"', words: ['This', 'is', 'my', 'pen'], answer: 'This is my pen' },
    { type: 'truefalse', prompt: '"These" s\'utilise pour des objets proches et au pluriel', answer: true },
    { type: 'translate', prompt: 'Traduis : "Cette table est grande."', answer: 'This table is big' },
    { type: 'qcm', prompt: 'Comment dit-on "ceux-ci" ?', options: ['These', 'This', 'That'], answer: 'These' },
    { type: 'fill', prompt: 'Complète : "___ (Ceux-là) are expensive."', answer: 'Those' }
  ],
  b4: [
    { type: 'qcm', prompt: 'Comment dit-on "gris" ?', options: ['Grey', 'Green', 'Gold'], answer: 'Grey' },
    { type: 'translate', prompt: 'Traduis : "Mon sac est noir et bleu."', answer: 'My bag is black and blue' },
    { type: 'fill', prompt: 'Complète : "___ (Ceci) is my phone."', answer: 'This' },
    { type: 'qcm', prompt: 'Comment dit-on "lunettes" ?', options: ['Glasses', 'Glass', 'Eyes'], answer: 'Glasses' },
    { type: 'drag', prompt: 'Remets dans l\'ordre : "is / My / pink / backpack"', words: ['My', 'backpack', 'is', 'pink'], answer: 'My backpack is pink' },
    { type: 'translate', prompt: 'Traduis : "la fenêtre"', answer: 'the window' },
    { type: 'qcm', prompt: 'Comment dit-on "porte" ?', options: ['Door', 'Floor', 'Wall'], answer: 'Door' },
    { type: 'fill', prompt: 'Complète : "The wall is ___ (blanc)."', answer: 'white' },
    { type: 'truefalse', prompt: '"Brown" veut dire "marron"', answer: true }
  ],

  // ===== UNITÉ 5 — Verbes de base =====
  l13: [
    { type: 'qcm', prompt: 'Comment conjuguer "to be" avec "she" ?', options: ['is', 'are', 'am'], answer: 'is' },
    { type: 'fill', prompt: 'Complète : "I ___ (ai) a car."', answer: 'have' },
    { type: 'translate', prompt: 'Traduis : "Ils sont fatigués."', answer: 'They are tired' },
    { type: 'qcm', prompt: '"We are" se traduit par...', options: ['Nous sommes', 'Je suis', 'Il est'], answer: 'Nous sommes' },
    { type: 'drag', prompt: 'Remets dans l\'ordre : "a / has / dog / He"', words: ['He', 'has', 'a', 'dog'], answer: 'He has a dog' },
    { type: 'truefalse', prompt: '"You is" est grammaticalement correct', answer: false },
    { type: 'translate', prompt: 'Traduis : "J\'ai deux sœurs."', answer: 'I have two sisters' },
    { type: 'qcm', prompt: 'Comment conjuguer "to have" avec "he" ?', options: ['has', 'have', 'haves'], answer: 'has' },
    { type: 'fill', prompt: 'Complète : "They ___ (ont) a house."', answer: 'have' }
  ],
  l14: [
    { type: 'qcm', prompt: 'Comment dit-on "manger" ?', options: ['Eat', 'Drink', 'Sleep'], answer: 'Eat' },
    { type: 'fill', prompt: 'Complète : "I ___ (marche) to school."', answer: 'walk' },
    { type: 'translate', prompt: 'Traduis : "Elle court vite."', answer: 'She runs fast' },
    { type: 'qcm', prompt: '"To sleep" veut dire...', options: ['Dormir', 'Manger', 'Courir'], answer: 'Dormir' },
    { type: 'drag', prompt: 'Remets dans l\'ordre : "coffee / drinks / He"', words: ['He', 'drinks', 'coffee'], answer: 'He drinks coffee' },
    { type: 'truefalse', prompt: '"To read" veut dire "lire"', answer: true },
    { type: 'translate', prompt: 'Traduis : "Nous jouons au foot."', answer: 'We play football' },
    { type: 'qcm', prompt: 'Comment dit-on "travailler" ?', options: ['Work', 'Play', 'Rest'], answer: 'Work' },
    { type: 'fill', prompt: 'Complète : "They ___ (regardent) TV."', answer: 'watch' }
  ],
  l15: [
    { type: 'qcm', prompt: 'Structure correcte pour une phrase affirmative simple ?', options: ['Sujet + verbe + complément', 'Verbe + sujet', 'Complément + sujet'], answer: 'Sujet + verbe + complément' },
    { type: 'fill', prompt: 'Complète : "She ___ (aime) music."', answer: 'likes' },
    { type: 'translate', prompt: 'Traduis : "Je ne comprends pas."', answer: 'I do not understand' },
    { type: 'qcm', prompt: 'Comment forme-t-on une question simple avec "do" ?', options: ['Do + sujet + verbe ?', 'Sujet + do + verbe ?', 'Verbe + do + sujet ?'], answer: 'Do + sujet + verbe ?' },
    { type: 'drag', prompt: 'Remets dans l\'ordre : "English / speak / you / Do / ?"', words: ['Do', 'you', 'speak', 'English?'], answer: 'Do you speak English?' },
    { type: 'truefalse', prompt: '"He don\'t like it" est grammaticalement correct', answer: false },
    { type: 'translate', prompt: 'Traduis : "Elle ne parle pas anglais."', answer: 'She does not speak English' },
    { type: 'qcm', prompt: 'Forme négative de "I like" ?', options: ['I do not like', 'I not like', 'I no like'], answer: 'I do not like' },
    { type: 'fill', prompt: 'Complète : "___ you like tea?"', answer: 'Do' }
  ],
  b5: [
    { type: 'qcm', prompt: 'Comment dit-on "je suis" ?', options: ['I am', 'I is', 'I are'], answer: 'I am' },
    { type: 'translate', prompt: 'Traduis : "Nous avons un chat."', answer: 'We have a cat' },
    { type: 'fill', prompt: 'Complète : "He ___ (mange) breakfast."', answer: 'eats' },
    { type: 'qcm', prompt: 'Forme correcte : "She ___ happy"', options: ['is', 'are', 'am'], answer: 'is' },
    { type: 'drag', prompt: 'Remets dans l\'ordre : "you / speak / Do / French / ?"', words: ['Do', 'you', 'speak', 'French?'], answer: 'Do you speak French?' },
    { type: 'translate', prompt: 'Traduis : "Ils travaillent le lundi."', answer: 'They work on Monday' },
    { type: 'qcm', prompt: 'Comment dit-on "je n\'ai pas" ?', options: ['I do not have', 'I not have', 'I no have'], answer: 'I do not have' },
    { type: 'fill', prompt: 'Complète : "We ___ (jouons) football."', answer: 'play' },
    { type: 'truefalse', prompt: '"She like music" est correct sans "s" à like', answer: false }
  ],

  // ===== UNITÉ 6 — Courses =====
  l16: [
    { type: 'qcm', prompt: 'Comment dit-on "supermarché" ?', options: ['Supermarket', 'Restaurant', 'Bakery'], answer: 'Supermarket' },
    { type: 'fill', prompt: 'Complète : "I need to buy some ___ (pain)."', answer: 'bread' },
    { type: 'translate', prompt: 'Traduis : "Où sont les légumes ?"', answer: 'Where are the vegetables?' },
    { type: 'qcm', prompt: '"Trolley" désigne...', options: ['Un chariot', 'Une caisse', 'Un panier'], answer: 'Un chariot' },
    { type: 'drag', prompt: 'Remets dans l\'ordre : "milk / need / some / I"', words: ['I', 'need', 'some', 'milk'], answer: 'I need some milk' },
    { type: 'truefalse', prompt: '"Checkout" veut dire "caisse"', answer: true },
    { type: 'translate', prompt: 'Traduis : "le rayon fruits"', answer: 'the fruit aisle' },
    { type: 'qcm', prompt: 'Comment dit-on "panier" ?', options: ['Basket', 'Bag', 'Box'], answer: 'Basket' },
    { type: 'fill', prompt: 'Complète : "The store ___ (ferme) at 8pm."', answer: 'closes' }
  ],
  l17: [
    { type: 'qcm', prompt: 'Comment demander le prix ?', options: ['How much is it?', 'How many is it?', 'What price it?'], answer: 'How much is it?' },
    { type: 'fill', prompt: 'Complète : "It costs five ___ (dollars)."', answer: 'dollars' },
    { type: 'translate', prompt: 'Traduis : "C\'est trop cher."', answer: 'It is too expensive' },
    { type: 'qcm', prompt: '"Cheap" veut dire...', options: ['Bon marché', 'Cher', 'Gratuit'], answer: 'Bon marché' },
    { type: 'drag', prompt: 'Remets dans l\'ordre : "much / is / How / this / ?"', words: ['How', 'much', 'is', 'this?'], answer: 'How much is this?' },
    { type: 'truefalse', prompt: '"A dozen" signifie 12', answer: true },
    { type: 'translate', prompt: 'Traduis : "deux kilos de pommes"', answer: 'two kilos of apples' },
    { type: 'qcm', prompt: 'Comment dit-on "gratuit" ?', options: ['Free', 'Cheap', 'Expensive'], answer: 'Free' },
    { type: 'fill', prompt: 'Complète : "Can I have a ___ (r\u00e9duction)?"', answer: 'discount' }
  ],
  l18: [
    { type: 'qcm', prompt: 'Comparatif de "big" ?', options: ['Bigger', 'More big', 'Biggest'], answer: 'Bigger' },
    { type: 'fill', prompt: 'Complète : "This one is ___ (moins cher) than that one."', answer: 'cheaper' },
    { type: 'translate', prompt: 'Traduis : "C\'est la meilleure option."', answer: 'This is the best option' },
    { type: 'qcm', prompt: 'Superlatif de "good" ?', options: ['Best', 'Gooder', 'More good'], answer: 'Best' },
    { type: 'drag', prompt: 'Remets dans l\'ordre : "than / This / is / bigger / that"', words: ['This', 'is', 'bigger', 'than', 'that'], answer: 'This is bigger than that' },
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
    { type: 'drag', prompt: 'Remets dans l\'ordre : "is / than / cheaper / This / that"', words: ['This', 'is', 'cheaper', 'than', 'that'], answer: 'This is cheaper than that' },
    { type: 'translate', prompt: 'Traduis : "le rayon des boissons"', answer: 'the drinks aisle' },
    { type: 'qcm', prompt: 'Comment dit-on "chariot" ?', options: ['Trolley', 'Basket', 'Bag'], answer: 'Trolley' },
    { type: 'fill', prompt: 'Complète : "Where is the ___ (caisse)?"', answer: 'checkout' },
    { type: 'truefalse', prompt: '"Expensive" veut dire "bon marché"', answer: false }
  ],


  // ===== UNITÉ 7 — Restaurant =====
  l19: [
    { type: 'qcm', prompt: 'Comment demander une table ?', options: ['A table for two, please', 'A table two please', 'Table for two now'], answer: 'A table for two, please' },
    { type: 'fill', prompt: 'Complète : "Can I ___ (voir) the menu?"', answer: 'see' },
    { type: 'translate', prompt: 'Traduis : "Je voudrais commander."', answer: 'I would like to order' },
    { type: 'qcm', prompt: '"Waiter" désigne...', options: ['Le serveur', 'Le client', 'Le chef'], answer: 'Le serveur' },
    { type: 'drag', prompt: 'Remets dans l\'ordre : "like / would / I / water / some"', words: ['I', 'would', 'like', 'some', 'water'], answer: 'I would like some water' },
    { type: 'truefalse', prompt: '"Menu" veut dire "addition"', answer: false },
    { type: 'translate', prompt: 'Traduis : "Qu\'est-ce que vous recommandez ?"', answer: 'What do you recommend?' },
    { type: 'qcm', prompt: 'Comment dit-on "réserver" ?', options: ['Book a table', 'Buy a table', 'Take a table'], answer: 'Book a table' },
    { type: 'fill', prompt: 'Complète : "I ___ (ai) a reservation."', answer: 'have' }
  ],
  l20: [
    { type: 'qcm', prompt: 'Comment dit-on "poulet" ?', options: ['Chicken', 'Beef', 'Fish'], answer: 'Chicken' },
    { type: 'fill', prompt: 'Complète : "This soup is very ___ (épicé)."', answer: 'spicy' },
    { type: 'translate', prompt: 'Traduis : "Je suis végétarien."', answer: 'I am vegetarian' },
    { type: 'qcm', prompt: '"Dessert" se prononce et se traduit par...', options: ['Dessert', 'Entrée', 'Plat principal'], answer: 'Dessert' },
    { type: 'drag', prompt: 'Remets dans l\'ordre : "salad / I / a / want"', words: ['I', 'want', 'a', 'salad'], answer: 'I want a salad' },
    { type: 'truefalse', prompt: '"Sweet" veut dire "sucré"', answer: true },
    { type: 'translate', prompt: 'Traduis : "sans sucre"', answer: 'without sugar' },
    { type: 'qcm', prompt: 'Comment dit-on "poisson" ?', options: ['Fish', 'Meat', 'Bread'], answer: 'Fish' },
    { type: 'fill', prompt: 'Complète : "I am ___ (allergique) to nuts."', answer: 'allergic' }
  ],
  l21: [
    { type: 'qcm', prompt: 'Comment demander l\'addition ?', options: ['Can I have the bill, please?', 'Give me money please', 'Where is my money?'], answer: 'Can I have the bill, please?' },
    { type: 'fill', prompt: 'Complète : "Do you accept ___ (cartes)?"', answer: 'cards' },
    { type: 'translate', prompt: 'Traduis : "Gardez la monnaie."', answer: 'Keep the change' },
    { type: 'qcm', prompt: '"Tip" désigne...', options: ['Le pourboire', 'La note', 'Le reçu'], answer: 'Le pourboire' },
    { type: 'drag', prompt: 'Remets dans l\'ordre : "the / have / Can / bill / I / ?"', words: ['Can', 'I', 'have', 'the', 'bill?'], answer: 'Can I have the bill?' },
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
    { type: 'drag', prompt: 'Remets dans l\'ordre : "like / I / order / to / would"', words: ['I', 'would', 'like', 'to', 'order'], answer: 'I would like to order' },
    { type: 'translate', prompt: 'Traduis : "C\'était délicieux."', answer: 'It was delicious' },
    { type: 'qcm', prompt: 'Comment dit-on "végétarien" ?', options: ['Vegetarian', 'Vegetable', 'Vegan'], answer: 'Vegetarian' },
    { type: 'fill', prompt: 'Complète : "Can I have the ___ (addition), please?"', answer: 'bill' },
    { type: 'truefalse', prompt: '"Waiter" et "waitress" désignent tous les deux des clients', answer: false }
  ],


  // ===== UNITÉ 8 — Transports =====
  l22: [
    { type: 'qcm', prompt: 'Comment dit-on "bus" ?', options: ['Bus', 'Car', 'Bike'], answer: 'Bus' },
    { type: 'fill', prompt: 'Complète : "The train ___ (part) at 9am."', answer: 'leaves' },
    { type: 'translate', prompt: 'Traduis : "Où est l\'arrêt de bus ?"', answer: 'Where is the bus stop?' },
    { type: 'qcm', prompt: '"Platform" désigne...', options: ['Le quai', 'Le billet', 'Le wagon'], answer: 'Le quai' },
    { type: 'drag', prompt: 'Remets dans l\'ordre : "take / I / the / train"', words: ['I', 'take', 'the', 'train'], answer: 'I take the train' },
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
    { type: 'drag', prompt: 'Remets dans l\'ordre : "get / I / to / How / do / the / station / ?"', words: ['How', 'do', 'I', 'get', 'to', 'the', 'station?'], answer: 'How do I get to the station?' },
    { type: 'truefalse', prompt: '"Crossroads" veut dire "carrefour"', answer: true },
    { type: 'translate', prompt: 'Traduis : "C\'est près d\'ici ?"', answer: 'Is it near here?' },
    { type: 'qcm', prompt: 'Comment dit-on "au coin de la rue" ?', options: ['At the corner', 'At the end', 'At the middle'], answer: 'At the corner' },
    { type: 'fill', prompt: 'Complète : "It is ___ (loin) from here."', answer: 'far' }
  ],
  l24: [
    { type: 'qcm', prompt: 'Comment réserver un billet ?', options: ['I would like to book a ticket', 'I want ticket now', 'Give me a ticket please now'], answer: 'I would like to book a ticket' },
    { type: 'fill', prompt: 'Complète : "A ___ (aller simple) ticket, please."', answer: 'one-way' },
    { type: 'translate', prompt: 'Traduis : "un aller-retour"', answer: 'a round trip' },
    { type: 'qcm', prompt: '"Departure" veut dire...', options: ['Départ', 'Arrivée', 'Retard'], answer: 'Départ' },
    { type: 'drag', prompt: 'Remets dans l\'ordre : "a / like / would / I / ticket / book / to"', words: ['I', 'would', 'like', 'to', 'book', 'a', 'ticket'], answer: 'I would like to book a ticket' },
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
    { type: 'drag', prompt: 'Remets dans l\'ordre : "leaves / at / train / The / 9am"', words: ['The', 'train', 'leaves', 'at', '9am'], answer: 'The train leaves at 9am' },
    { type: 'translate', prompt: 'Traduis : "C\'est loin d\'ici ?"', answer: 'Is it far from here?' },
    { type: 'qcm', prompt: 'Comment dit-on "en retard" ?', options: ['Delayed', 'Early', 'On time'], answer: 'Delayed' },
    { type: 'fill', prompt: 'Complète : "I need a ___ (aller-retour) ticket."', answer: 'round-trip' },
    { type: 'truefalse', prompt: '"Straight ahead" veut dire "à gauche"', answer: false }
  ],


  // ===== UNITÉ 9 — Météo & loisirs =====
  l25: [
    { type: 'qcm', prompt: 'Comment demander la météo ?', options: ["What's the weather like?", 'What time is the weather?', 'Where is the weather?'], answer: "What's the weather like?" },
    { type: 'fill', prompt: 'Complète : "It is ___ (ensoleillé) today."', answer: 'sunny' },
    { type: 'translate', prompt: 'Traduis : "Il pleut."', answer: 'It is raining' },
    { type: 'qcm', prompt: '"Cloudy" veut dire...', options: ['Nuageux', 'Ensoleillé', 'Venteux'], answer: 'Nuageux' },
    { type: 'drag', prompt: 'Remets dans l\'ordre : "cold / very / today / It / is"', words: ['It', 'is', 'very', 'cold', 'today'], answer: 'It is very cold today' },
    { type: 'truefalse', prompt: '"Snowy" veut dire "neigeux"', answer: true },
    { type: 'translate', prompt: 'Traduis : "Il fait chaud aujourd\'hui."', answer: 'It is hot today' },
    { type: 'qcm', prompt: 'Comment dit-on "venteux" ?', options: ['Windy', 'Rainy', 'Foggy'], answer: 'Windy' },
    { type: 'fill', prompt: 'Complète : "The forecast says it will ___ (neiger)."', answer: 'snow' }
  ],
  l26: [
    { type: 'qcm', prompt: 'Comment dit-on "lecture" (loisir) ?', options: ['Reading', 'Reader', 'Read'], answer: 'Reading' },
    { type: 'fill', prompt: 'Complète : "I enjoy ___ (jouer) football."', answer: 'playing' },
    { type: 'translate', prompt: 'Traduis : "Mon passe-temps préféré est la natation."', answer: 'My favorite hobby is swimming' },
    { type: 'qcm', prompt: '"Hiking" désigne...', options: ['La randonnée', 'La cuisine', 'La peinture'], answer: 'La randonnée' },
    { type: 'drag', prompt: 'Remets dans l\'ordre : "like / movies / I / watching"', words: ['I', 'like', 'watching', 'movies'], answer: 'I like watching movies' },
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
    { type: 'drag', prompt: 'Remets dans l\'ordre : "the / going / to / We / are / beach"', words: ['We', 'are', 'going', 'to', 'the', 'beach'], answer: 'We are going to the beach' },
    { type: 'truefalse', prompt: '"I am planning to travel" est au futur proche', answer: true },
    { type: 'translate', prompt: 'Traduis : "J\'espère voyager cet été."', answer: 'I hope to travel this summer' },
    { type: 'qcm', prompt: 'Comment dit-on "prochainement" ?', options: ['Soon', 'Late', 'Never'], answer: 'Soon' },
    { type: 'fill', prompt: 'Complète : "I ___ (esp\u00e8re) to see you soon."', answer: 'hope' }
  ],
  b9: [
    { type: 'qcm', prompt: 'Comment dit-on "il neige" ?', options: ['It is snowing', 'It is raining', 'It is sunny'], answer: 'It is snowing' },
    { type: 'translate', prompt: 'Traduis : "J\'aime lire et faire de la randonnée."', answer: 'I like reading and hiking' },
    { type: 'fill', prompt: 'Complète : "We are ___ (allons) camping next week."', answer: 'going' },
    { type: 'qcm', prompt: 'Comment dit-on "passe-temps" ?', options: ['Hobby', 'Work', 'Job'], answer: 'Hobby' },
    { type: 'drag', prompt: 'Remets dans l\'ordre : "cold / very / is / It"', words: ['It', 'is', 'very', 'cold'], answer: 'It is very cold' },
    { type: 'translate', prompt: 'Traduis : "Quel temps fait-il ?"', answer: "What's the weather like?" },
    { type: 'qcm', prompt: 'Comment dit-on "randonnée" ?', options: ['Hiking', 'Running', 'Swimming'], answer: 'Hiking' },
    { type: 'fill', prompt: 'Complète : "I enjoy ___ (cuisiner) on weekends."', answer: 'cooking' },
    { type: 'truefalse', prompt: '"Sunny" veut dire "pluvieux"', answer: false }
  ],


  // ===== UNITÉ 10 — Travail =====
  l28: [
    { type: 'qcm', prompt: 'Comment dit-on "professeur" ?', options: ['Teacher', 'Doctor', 'Lawyer'], answer: 'Teacher' },
    { type: 'fill', prompt: 'Complète : "She is a ___ (m\u00e9decin)."', answer: 'doctor' },
    { type: 'translate', prompt: 'Traduis : "Que fais-tu dans la vie ?"', answer: 'What do you do for a living?' },
    { type: 'qcm', prompt: '"Engineer" désigne...', options: ['Ingénieur', 'Infirmier', 'Avocat'], answer: 'Ingénieur' },
    { type: 'drag', prompt: 'Remets dans l\'ordre : "am / an / I / engineer"', words: ['I', 'am', 'an', 'engineer'], answer: 'I am an engineer' },
    { type: 'truefalse', prompt: '"Lawyer" veut dire "avocat"', answer: true },
    { type: 'translate', prompt: 'Traduis : "Il est infirmier."', answer: 'He is a nurse' },
    { type: 'qcm', prompt: 'Comment dit-on "employé" ?', options: ['Employee', 'Employer', 'Manager'], answer: 'Employee' },
    { type: 'fill', prompt: 'Complète : "My job is very ___ (int\u00e9ressant)."', answer: 'interesting' }
  ],
  l29: [
    { type: 'qcm', prompt: 'Comment dit-on "réunion" ?', options: ['Meeting', 'Break', 'Deadline'], answer: 'Meeting' },
    { type: 'fill', prompt: 'Complète : "I start work at 9 ___ (heures)."', answer: "o'clock" },
    { type: 'translate', prompt: 'Traduis : "Je travaille du lundi au vendredi."', answer: 'I work from Monday to Friday' },
    { type: 'qcm', prompt: '"Deadline" désigne...', options: ['La date limite', 'La pause', 'Le salaire'], answer: 'La date limite' },
    { type: 'drag', prompt: 'Remets dans l\'ordre : "have / a / I / meeting / today"', words: ['I', 'have', 'a', 'meeting', 'today'], answer: 'I have a meeting today' },
    { type: 'truefalse', prompt: '"Colleague" veut dire "collègue"', answer: true },
    { type: 'translate', prompt: 'Traduis : "J\'ai une pause à midi."', answer: 'I have a break at noon' },
    { type: 'qcm', prompt: 'Comment dit-on "salaire" ?', options: ['Salary', 'Bonus', 'Tax'], answer: 'Salary' },
    { type: 'fill', prompt: 'Complète : "The ___ (r\u00e9union) starts at 10am."', answer: 'meeting' }
  ],
  l30: [
    { type: 'qcm', prompt: 'Comment dit-on "poste vacant" ?', options: ['Job opening', 'Job closing', 'Job ending'], answer: 'Job opening' },
    { type: 'fill', prompt: 'Complète : "I am looking ___ (pour) a new job."', answer: 'for' },
    { type: 'translate', prompt: 'Traduis : "J\'ai postulé pour ce poste."', answer: 'I applied for this position' },
    { type: 'qcm', prompt: '"Interview" veut dire...', options: ['Entretien', 'Contrat', 'Salaire'], answer: 'Entretien' },
    { type: 'drag', prompt: 'Remets dans l\'ordre : "for / applied / a / I / job"', words: ['I', 'applied', 'for', 'a', 'job'], answer: 'I applied for a job' },
    { type: 'truefalse', prompt: '"Resume" (CV) et "Interview" sont la même chose', answer: false },
    { type: 'translate', prompt: 'Traduis : "L\'entretien est demain."', answer: 'The interview is tomorrow' },
    { type: 'qcm', prompt: 'Comment dit-on "expérience" ?', options: ['Experience', 'Education', 'Skill'], answer: 'Experience' },
    { type: 'fill', prompt: 'Complète : "I have five years of ___ (exp\u00e9rience)."', answer: 'experience' }
  ],
  b10: [
    { type: 'qcm', prompt: 'Comment dit-on "métier" ?', options: ['Job', 'Hobby', 'School'], answer: 'Job' },
    { type: 'translate', prompt: 'Traduis : "Je suis ingénieur et je travaille beaucoup."', answer: 'I am an engineer and I work a lot' },
    { type: 'fill', prompt: 'Complète : "I have a ___ (r\u00e9union) tomorrow."', answer: 'meeting' },
    { type: 'qcm', prompt: 'Comment dit-on "entretien d\'embauche" ?', options: ['Job interview', 'Job opening', 'Job offer'], answer: 'Job interview' },
    { type: 'drag', prompt: 'Remets dans l\'ordre : "job / for / looking / a / I / am / new"', words: ['I', 'am', 'looking', 'for', 'a', 'new', 'job'], answer: 'I am looking for a new job' },
    { type: 'translate', prompt: 'Traduis : "Quel est ton métier ?"', answer: 'What is your job?' },
    { type: 'qcm', prompt: 'Comment dit-on "collègue" ?', options: ['Colleague', 'Boss', 'Client'], answer: 'Colleague' },
    { type: 'fill', prompt: 'Complète : "My ___ (salaire) is good."', answer: 'salary' },
    { type: 'truefalse', prompt: '"Deadline" veut dire "pause déjeuner"', answer: false }
  ],

  // ===== UNITÉ 11 — Donner son avis =====
  l31: [
    { type: 'qcm', prompt: 'Comment dit-on "J\'aime" ?', options: ['I like', 'I hate', 'I want'], answer: 'I like' },
    { type: 'fill', prompt: 'Complète : "I ___ (n\'aime pas) coffee."', answer: 'dislike' },
    { type: 'translate', prompt: 'Traduis : "Je déteste attendre."', answer: 'I hate waiting' },
    { type: 'qcm', prompt: '"I love it" veut dire...', options: ['J\'adore ça', 'Je déteste ça', 'Je m\'en fiche'], answer: 'J\'adore ça' },
    { type: 'drag', prompt: 'Remets dans l\'ordre : "movies / I / love / action"', words: ['I', 'love', 'action', 'movies'], answer: 'I love action movies' },
    { type: 'truefalse', prompt: '"I can\'t stand it" veut dire "j\'adore ça"', answer: false },
    { type: 'translate', prompt: 'Traduis : "Ça ne me plaît pas vraiment."', answer: 'I do not really like it' },
    { type: 'qcm', prompt: 'Comment dit-on "préférer" ?', options: ['To prefer', 'To hate', 'To need'], answer: 'To prefer' },
    { type: 'fill', prompt: 'Complète : "I ___ (pr\u00e9f\u00e8re) tea to coffee."', answer: 'prefer' }
  ],
  l32: [
    { type: 'qcm', prompt: 'Comment dire "Je suis d\'accord" ?', options: ['I agree', 'I disagree', 'I refuse'], answer: 'I agree' },
    { type: 'fill', prompt: 'Complète : "I ___ (ne suis pas d\'accord) with you."', answer: 'disagree' },
    { type: 'translate', prompt: 'Traduis : "Tu as raison."', answer: 'You are right' },
    { type: 'qcm', prompt: '"You are wrong" veut dire...', options: ['Tu as tort', 'Tu as raison', 'Tu es gentil'], answer: 'Tu as tort' },
    { type: 'drag', prompt: 'Remets dans l\'ordre : "totally / agree / I"', words: ['I', 'totally', 'agree'], answer: 'I totally agree' },
    { type: 'truefalse', prompt: '"I see your point" veut dire "je comprends ton point de vue"', answer: true },
    { type: 'translate', prompt: 'Traduis : "Je ne suis pas d\'accord du tout."', answer: 'I completely disagree' },
    { type: 'qcm', prompt: 'Comment dit-on "avoir raison" ?', options: ['To be right', 'To be wrong', 'To be kind'], answer: 'To be right' },
    { type: 'fill', prompt: 'Complète : "I ___ (suis d\'accord) with that idea."', answer: 'agree' }
  ],
  l33: [
    { type: 'qcm', prompt: 'Comment dit-on "parce que" ?', options: ['Because', 'So', 'But'], answer: 'Because' },
    { type: 'fill', prompt: 'Complète : "I think so ___ (parce que) it makes sense."', answer: 'because' },
    { type: 'translate', prompt: 'Traduis : "À mon avis..."', answer: 'In my opinion...' },
    { type: 'qcm', prompt: '"For example" veut dire...', options: ['Par exemple', 'Cependant', 'En conclusion'], answer: 'Par exemple' },
    { type: 'drag', prompt: 'Remets dans l\'ordre : "opinion / my / In"', words: ['In', 'my', 'opinion'], answer: 'In my opinion' },
    { type: 'truefalse', prompt: '"However" introduit une opposition', answer: true },
    { type: 'translate', prompt: 'Traduis : "Je pense que c\'est une bonne idée."', answer: 'I think it is a good idea' },
    { type: 'qcm', prompt: 'Comment dit-on "cependant" ?', options: ['However', 'Because', 'Also'], answer: 'However' },
    { type: 'fill', prompt: 'Complète : "___ (\u00e0 mon avis), this is wrong."', answer: 'In my opinion' }
  ],
  b11: [
    { type: 'qcm', prompt: 'Comment dit-on "je pense que" ?', options: ['I think that', 'I want that', 'I have that'], answer: 'I think that' },
    { type: 'translate', prompt: 'Traduis : "Je suis totalement d\'accord avec toi."', answer: 'I totally agree with you' },
    { type: 'fill', prompt: 'Complète : "I ___ (pr\u00e9f\u00e8re) reading to watching TV."', answer: 'prefer' },
    { type: 'qcm', prompt: 'Comment dit-on "je ne suis pas d\'accord" ?', options: ['I disagree', 'I agree', 'I like'], answer: 'I disagree' },
    { type: 'drag', prompt: 'Remets dans l\'ordre : "your / I / point / see"', words: ['I', 'see', 'your', 'point'], answer: 'I see your point' },
    { type: 'translate', prompt: 'Traduis : "À mon avis, c\'est faux."', answer: 'In my opinion, it is wrong' },
    { type: 'qcm', prompt: 'Comment dit-on "détester" ?', options: ['To hate', 'To love', 'To like'], answer: 'To hate' },
    { type: 'fill', prompt: 'Complète : "You are ___ (tort) about this."', answer: 'wrong' },
    { type: 'truefalse', prompt: '"To agree" veut dire "être en désaccord"', answer: false }
  ],

  // ===== UNITÉ 12 — Raconter le passé =====
  l34: [
    { type: 'qcm', prompt: 'Passé de "go" ?', options: ['Went', 'Goed', 'Gone'], answer: 'Went' },
    { type: 'fill', prompt: 'Complète : "I ___ (suis all\u00e9) to the park yesterday."', answer: 'went' },
    { type: 'translate', prompt: 'Traduis : "Elle a mangé une pomme."', answer: 'She ate an apple' },
    { type: 'qcm', prompt: 'Passé de "eat" ?', options: ['Ate', 'Eated', 'Eaten'], answer: 'Ate' },
    { type: 'drag', prompt: 'Remets dans l\'ordre : "yesterday / to / school / I / went"', words: ['I', 'went', 'to', 'school', 'yesterday'], answer: 'I went to school yesterday' },
    { type: 'truefalse', prompt: 'Le passé de "have" est "had"', answer: true },
    { type: 'translate', prompt: 'Traduis : "Nous avons vu un film hier soir."', answer: 'We watched a movie last night' },
    { type: 'qcm', prompt: 'Passé de "see" ?', options: ['Saw', 'Seed', 'Seen'], answer: 'Saw' },
    { type: 'fill', prompt: 'Complète : "They ___ (\u00e9taient) happy."', answer: 'were' }
  ],
  l35: [
    { type: 'qcm', prompt: 'Comment dit-on "vacances" ?', options: ['Vacation', 'Work', 'School'], answer: 'Vacation' },
    { type: 'fill', prompt: 'Complète : "We ___ (sommes all\u00e9s) to the beach last summer."', answer: 'went' },
    { type: 'translate', prompt: 'Traduis : "J\'ai visité Paris l\'année dernière."', answer: 'I visited Paris last year' },
    { type: 'qcm', prompt: '"Last summer" veut dire...', options: ["L'été dernier", "Cet été", "L'été prochain"], answer: "L'été dernier" },
    { type: 'drag', prompt: 'Remets dans l\'ordre : "amazing / was / trip / The"', words: ['The', 'trip', 'was', 'amazing'], answer: 'The trip was amazing' },
    { type: 'truefalse', prompt: '"I stayed" est le passé de "to stay"', answer: true },
    { type: 'translate', prompt: 'Traduis : "Nous avons nagé dans la mer."', answer: 'We swam in the sea' },
    { type: 'qcm', prompt: 'Passé de "swim" ?', options: ['Swam', 'Swimmed', 'Swum'], answer: 'Swam' },
    { type: 'fill', prompt: 'Complète : "It ___ (\u00e9tait) a wonderful trip."', answer: 'was' }
  ],
  l36: [
    { type: 'qcm', prompt: 'Comment commencer une histoire ?', options: ['Once upon a time', 'The end', 'Thank you'], answer: 'Once upon a time' },
    { type: 'fill', prompt: 'Complète : "Then, she ___ (a trouv\u00e9) a key."', answer: 'found' },
    { type: 'translate', prompt: 'Traduis : "Soudain, il a entendu un bruit."', answer: 'Suddenly, he heard a noise' },
    { type: 'qcm', prompt: '"Suddenly" veut dire...', options: ['Soudain', 'Finalement', 'Avant'], answer: 'Soudain' },
    { type: 'drag', prompt: 'Remets dans l\'ordre : "happily / lived / They / ever / after"', words: ['They', 'lived', 'happily', 'ever', 'after'], answer: 'They lived happily ever after' },
    { type: 'truefalse', prompt: '"The end" se met au début d\'une histoire', answer: false },
    { type: 'translate', prompt: 'Traduis : "Il était une fois une princesse."', answer: 'Once upon a time there was a princess' },
    { type: 'qcm', prompt: 'Comment dit-on "finalement" ?', options: ['Finally', 'Suddenly', 'Never'], answer: 'Finally' },
    { type: 'fill', prompt: 'Complète : "___ (finalement), they found the treasure."', answer: 'Finally' }
  ],
  b12: [
    { type: 'qcm', prompt: 'Passé de "come" ?', options: ['Came', 'Comed', 'Come'], answer: 'Came' },
    { type: 'translate', prompt: 'Traduis : "Nous sommes allés à la plage l\'été dernier."', answer: 'We went to the beach last summer' },
    { type: 'fill', prompt: 'Complète : "I ___ (ai vu) a great movie yesterday."', answer: 'saw' },
    { type: 'qcm', prompt: 'Comment dit-on "il était une fois" ?', options: ['Once upon a time', 'One day', 'The end'], answer: 'Once upon a time' },
    { type: 'drag', prompt: 'Remets dans l\'ordre : "trip / was / The / amazing"', words: ['The', 'trip', 'was', 'amazing'], answer: 'The trip was amazing' },
    { type: 'translate', prompt: 'Traduis : "Soudain, elle a trouvé la clé."', answer: 'Suddenly, she found the key' },
    { type: 'qcm', prompt: 'Passé de "have" ?', options: ['Had', 'Haved', 'Have'], answer: 'Had' },
    { type: 'fill', prompt: 'Complète : "They ___ (\u00e9taient) very happy."', answer: 'were' },
    { type: 'truefalse', prompt: '"Went" est le présent de "go"', answer: false }
  ]
  ,

  // ===== UNITÉ 13 — Futur & projets =====
  l37: [
    { type: 'qcm', prompt: 'Comment dit-on "je vais faire" ?', options: ['I am going to', 'I will to', 'I do to'], answer: 'I am going to' },
    { type: 'fill', prompt: 'Complète : "I ___ (vais) travel next year."', answer: 'will' },
    { type: 'translate', prompt: 'Traduis : "Je vais étudier ce soir."', answer: 'I am going to study tonight' },
    { type: 'qcm', prompt: '"Will" s\'utilise pour...', options: ['Une décision spontanée', 'Un passé', 'Un fait accompli'], answer: 'Une décision spontanée' },
    { type: 'drag', prompt: 'Remets dans l\'ordre : "call / will / I / you"', words: ['I', 'will', 'call', 'you'], answer: 'I will call you' },
    { type: 'truefalse', prompt: '"Going to" s\'utilise pour un projet déjà prévu', answer: true },
    { type: 'translate', prompt: 'Traduis : "Il va pleuvoir demain."', answer: 'It is going to rain tomorrow' },
    { type: 'qcm', prompt: 'Forme correcte pour un projet prévu ?', options: ['I am going to visit', 'I go to visit', 'I visit going'], answer: 'I am going to visit' },
    { type: 'fill', prompt: 'Complète : "We ___ (allons) move next month."', answer: 'are going to' }
  ],
  l38: [
    { type: 'qcm', prompt: 'Comment dit-on "objectif" ?', options: ['Goal', 'Problem', 'Mistake'], answer: 'Goal' },
    { type: 'fill', prompt: 'Complète : "My goal is to ___ (apprendre) English."', answer: 'learn' },
    { type: 'translate', prompt: 'Traduis : "Mon rêve est de voyager dans le monde."', answer: 'My dream is to travel the world' },
    { type: 'qcm', prompt: '"Ambition" veut dire...', options: ['Ambition', 'Peur', 'Regret'], answer: 'Ambition' },
    { type: 'drag', prompt: 'Remets dans l\'ordre : "own / to / a / want / I / business / start"', words: ['I', 'want', 'to', 'start', 'a', 'own', 'business'], answer: 'I want to start a own business' },
    { type: 'truefalse', prompt: '"Achieve a goal" veut dire "atteindre un objectif"', answer: true },
    { type: 'translate', prompt: 'Traduis : "Je veux devenir médecin."', answer: 'I want to become a doctor' },
    { type: 'qcm', prompt: 'Comment dit-on "réussir" ?', options: ['To succeed', 'To fail', 'To stop'], answer: 'To succeed' },
    { type: 'fill', prompt: 'Complète : "I hope to ___ (r\u00e9ussir) in life."', answer: 'succeed' }
  ],
  l39: [
    { type: 'qcm', prompt: 'Comment dit-on "je prédis" ?', options: ['I predict', 'I remember', 'I forget'], answer: 'I predict' },
    { type: 'fill', prompt: 'Complète : "In the future, robots ___ (aideront) us."', answer: 'will help' },
    { type: 'translate', prompt: 'Traduis : "Je pense qu\'il fera beau demain."', answer: 'I think it will be sunny tomorrow' },
    { type: 'qcm', prompt: '"Probably" veut dire...', options: ['Probablement', 'Jamais', 'Toujours'], answer: 'Probablement' },
    { type: 'drag', prompt: 'Remets dans l\'ordre : "will / win / probably / They"', words: ['They', 'will', 'probably', 'win'], answer: 'They will probably win' },
    { type: 'truefalse', prompt: '"Maybe" veut dire "peut-être"', answer: true },
    { type: 'translate', prompt: 'Traduis : "Dans dix ans, tout sera différent."', answer: 'In ten years, everything will be different' },
    { type: 'qcm', prompt: 'Comment dit-on "certainement" ?', options: ['Definitely', 'Rarely', 'Never'], answer: 'Definitely' },
    { type: 'fill', prompt: 'Complète : "It will ___ (probablement) rain."', answer: 'probably' }
  ],
  b13: [
    { type: 'qcm', prompt: 'Comment dit-on "je vais" (projet) ?', options: ['I am going to', 'I was', 'I have'], answer: 'I am going to' },
    { type: 'translate', prompt: 'Traduis : "Mon objectif est de réussir dans la vie."', answer: 'My goal is to succeed in life' },
    { type: 'fill', prompt: 'Complète : "It ___ (va) rain tomorrow."', answer: 'is going to' },
    { type: 'qcm', prompt: 'Comment dit-on "rêve" ?', options: ['Dream', 'Nightmare', 'Sleep'], answer: 'Dream' },
    { type: 'drag', prompt: 'Remets dans l\'ordre : "probably / will / win / They"', words: ['They', 'will', 'probably', 'win'], answer: 'They will probably win' },
    { type: 'translate', prompt: 'Traduis : "Je veux devenir ingénieur."', answer: 'I want to become an engineer' },
    { type: 'qcm', prompt: 'Comment dit-on "prédire" ?', options: ['To predict', 'To forget', 'To remember'], answer: 'To predict' },
    { type: 'fill', prompt: 'Complète : "In the future, we ___ (aurons) flying cars."', answer: 'will have' },
    { type: 'truefalse', prompt: '"Definitely" veut dire "jamais"', answer: false }
  ]
  ,

  // ===== UNITÉ 14 — Voyage & imprévus =====
  l40: [
    { type: 'qcm', prompt: 'Comment dit-on "vol" (avion) ?', options: ['Flight', 'Trip', 'Journey'], answer: 'Flight' },
    { type: 'fill', prompt: 'Complète : "My ___ (vol) leaves at 6am."', answer: 'flight' },
    { type: 'translate', prompt: 'Traduis : "Où est ma porte d\'embarquement ?"', answer: 'Where is my gate?' },
    { type: 'qcm', prompt: '"Boarding pass" désigne...', options: ["La carte d'embarquement", 'Le passeport', 'Le billet retour'], answer: "La carte d'embarquement" },
    { type: 'drag', prompt: 'Remets dans l\'ordre : "boarding / Where / is / my / pass / ?"', words: ['Where', 'is', 'my', 'boarding', 'pass?'], answer: 'Where is my boarding pass?' },
    { type: 'truefalse', prompt: '"Luggage" veut dire "bagages"', answer: true },
    { type: 'translate', prompt: 'Traduis : "Le vol est retardé."', answer: 'The flight is delayed' },
    { type: 'qcm', prompt: 'Comment dit-on "passeport" ?', options: ['Passport', 'Ticket', 'Visa'], answer: 'Passport' },
    { type: 'fill', prompt: 'Complète : "I need to check ___ (enregistrer) my bag."', answer: 'in' }
  ],
  l41: [
    { type: 'qcm', prompt: 'Comment dit-on "j\'ai perdu" ?', options: ['I lost', 'I find', 'I have'], answer: 'I lost' },
    { type: 'fill', prompt: 'Complète : "I ___ (ai perdu) my passport."', answer: 'lost' },
    { type: 'translate', prompt: 'Traduis : "Ma valise est perdue."', answer: 'My suitcase is lost' },
    { type: 'qcm', prompt: '"Cancelled" veut dire...', options: ['Annulé', 'Retardé', 'Confirmé'], answer: 'Annulé' },
    { type: 'drag', prompt: 'Remets dans l\'ordre : "flight / cancelled / My / was"', words: ['My', 'flight', 'was', 'cancelled'], answer: 'My flight was cancelled' },
    { type: 'truefalse', prompt: '"Stolen" veut dire "volé"', answer: true },
    { type: 'translate', prompt: 'Traduis : "J\'ai raté ma correspondance."', answer: 'I missed my connection' },
    { type: 'qcm', prompt: 'Comment dit-on "raté" (un vol) ?', options: ['Missed', 'Caught', 'Booked'], answer: 'Missed' },
    { type: 'fill', prompt: 'Complète : "My bag was ___ (vol\u00e9)."', answer: 'stolen' }
  ],
  l42: [
    { type: 'qcm', prompt: 'Comment demander de l\'aide ?', options: ['Can you help me?', 'You help me now', 'Help now please'], answer: 'Can you help me?' },
    { type: 'fill', prompt: 'Complète : "I need ___ (de l\'aide)."', answer: 'help' },
    { type: 'translate', prompt: 'Traduis : "Je suis perdu."', answer: 'I am lost' },
    { type: 'qcm', prompt: '"Emergency" veut dire...', options: ["Urgence", "Vacances", "Retard"], answer: "Urgence" },
    { type: 'drag', prompt: 'Remets dans l\'ordre : "you / me / Can / help / ?"', words: ['Can', 'you', 'help', 'me?'], answer: 'Can you help me?' },
    { type: 'truefalse', prompt: '"Police station" veut dire "commissariat"', answer: true },
    { type: 'translate', prompt: 'Traduis : "Appelez la police, s\'il vous plaît."', answer: 'Call the police, please' },
    { type: 'qcm', prompt: 'Comment dit-on "ambassade" ?', options: ['Embassy', 'Airport', 'Hotel'], answer: 'Embassy' },
    { type: 'fill', prompt: 'Complète : "Where is the nearest ___ (h\u00f4pital)?"', answer: 'hospital' }
  ],
  b14: [
    { type: 'qcm', prompt: 'Comment dit-on "annulé" ?', options: ['Cancelled', 'Confirmed', 'Delayed'], answer: 'Cancelled' },
    { type: 'translate', prompt: 'Traduis : "J\'ai perdu mon passeport à l\'aéroport."', answer: 'I lost my passport at the airport' },
    { type: 'fill', prompt: 'Complète : "Can you ___ (aider) me, please?"', answer: 'help' },
    { type: 'qcm', prompt: 'Comment dit-on "urgence" ?', options: ['Emergency', 'Holiday', 'Trip'], answer: 'Emergency' },
    { type: 'drag', prompt: 'Remets dans l\'ordre : "was / My / flight / delayed"', words: ['My', 'flight', 'was', 'delayed'], answer: 'My flight was delayed' },
    { type: 'translate', prompt: 'Traduis : "Où est le commissariat ?"', answer: 'Where is the police station?' },
    { type: 'qcm', prompt: 'Comment dit-on "bagages" ?', options: ['Luggage', 'Ticket', 'Gate'], answer: 'Luggage' },
    { type: 'fill', prompt: 'Complète : "I need to find the ___ (ambassade)."', answer: 'embassy' },
    { type: 'truefalse', prompt: '"Boarding pass" veut dire "passeport"', answer: false }
  ]
  ,

  // ===== UNITÉ 15 — Santé =====
  l43: [
    { type: 'qcm', prompt: 'Comment dit-on "médecin" ?', options: ['Doctor', 'Nurse', 'Patient'], answer: 'Doctor' },
    { type: 'fill', prompt: 'Complète : "I have an ___ (rendez-vous) at 3pm."', answer: 'appointment' },
    { type: 'translate', prompt: 'Traduis : "J\'ai besoin de voir un médecin."', answer: 'I need to see a doctor' },
    { type: 'qcm', prompt: '"Nurse" désigne...', options: ["L'infirmier/ère", 'Le médecin', 'Le patient'], answer: "L'infirmier/ère" },
    { type: 'drag', prompt: 'Remets dans l\'ordre : "an / I / appointment / have"', words: ['I', 'have', 'an', 'appointment'], answer: 'I have an appointment' },
    { type: 'truefalse', prompt: '"Prescription" veut dire "ordonnance"', answer: true },
    { type: 'translate', prompt: 'Traduis : "La pharmacie est fermée."', answer: 'The pharmacy is closed' },
    { type: 'qcm', prompt: 'Comment dit-on "pharmacie" ?', options: ['Pharmacy', 'Hospital', 'Clinic'], answer: 'Pharmacy' },
    { type: 'fill', prompt: 'Complète : "The doctor gave me a ___ (ordonnance)."', answer: 'prescription' }
  ],
  l44: [
    { type: 'qcm', prompt: 'Comment dit-on "j\'ai mal à la tête" ?', options: ['I have a headache', 'I have a leg', 'I have a cold'], answer: 'I have a headache' },
    { type: 'fill', prompt: 'Complète : "I have a ___ (fi\u00e8vre)."', answer: 'fever' },
    { type: 'translate', prompt: 'Traduis : "J\'ai mal à la gorge."', answer: 'I have a sore throat' },
    { type: 'qcm', prompt: '"Cough" veut dire...', options: ['Toux', 'Fièvre', 'Rhume'], answer: 'Toux' },
    { type: 'drag', prompt: 'Remets dans l\'ordre : "hurts / stomach / My"', words: ['My', 'stomach', 'hurts'], answer: 'My stomach hurts' },
    { type: 'truefalse', prompt: '"Cold" peut vouloir dire "rhume"', answer: true },
    { type: 'translate', prompt: 'Traduis : "Je me sens malade."', answer: 'I feel sick' },
    { type: 'qcm', prompt: 'Comment dit-on "douleur" ?', options: ['Pain', 'Health', 'Rest'], answer: 'Pain' },
    { type: 'fill', prompt: 'Complète : "I feel ___ (malade) today."', answer: 'sick' }
  ],
  l45: [
    { type: 'qcm', prompt: 'Comment dit-on "reposer" ?', options: ['To rest', 'To run', 'To work'], answer: 'To rest' },
    { type: 'fill', prompt: 'Complète : "You should ___ (te reposer)."', answer: 'rest' },
    { type: 'translate', prompt: 'Traduis : "Bois beaucoup d\'eau."', answer: 'Drink a lot of water' },
    { type: 'qcm', prompt: '"You should see a doctor" veut dire...', options: ['Tu devrais voir un médecin', 'Tu es en bonne santé', 'Tu dois travailler'], answer: 'Tu devrais voir un médecin' },
    { type: 'drag', prompt: 'Remets dans l\'ordre : "should / rest / You"', words: ['You', 'should', 'rest'], answer: 'You should rest' },
    { type: 'truefalse', prompt: '"Take medicine" veut dire "prendre un médicament"', answer: true },
    { type: 'translate', prompt: 'Traduis : "Tu devrais dormir davantage."', answer: 'You should sleep more' },
    { type: 'qcm', prompt: 'Comment dit-on "guérir" ?', options: ['To heal', 'To hurt', 'To feel'], answer: 'To heal' },
    { type: 'fill', prompt: 'Complète : "You should ___ (prendre) some medicine."', answer: 'take' }
  ],
  b15: [
    { type: 'qcm', prompt: 'Comment dit-on "j\'ai de la fièvre" ?', options: ['I have a fever', 'I have a doctor', 'I have a pain'], answer: 'I have a fever' },
    { type: 'translate', prompt: 'Traduis : "Je dois prendre rendez-vous chez le médecin."', answer: 'I need to make an appointment with the doctor' },
    { type: 'fill', prompt: 'Complète : "You should ___ (te reposer) and drink water."', answer: 'rest' },
    { type: 'qcm', prompt: 'Comment dit-on "ordonnance" ?', options: ['Prescription', 'Appointment', 'Pharmacy'], answer: 'Prescription' },
    { type: 'drag', prompt: 'Remets dans l\'ordre : "hurts / My / head"', words: ['My', 'head', 'hurts'], answer: 'My head hurts' },
    { type: 'translate', prompt: 'Traduis : "Je me sens mieux maintenant."', answer: 'I feel better now' },
    { type: 'qcm', prompt: 'Comment dit-on "toux" ?', options: ['Cough', 'Cold', 'Fever'], answer: 'Cough' },
    { type: 'fill', prompt: 'Complète : "You should see a ___ (m\u00e9decin)."', answer: 'doctor' },
    { type: 'truefalse', prompt: '"To heal" veut dire "tomber malade"', answer: false }
  ]
  ,

  // ===== UNITÉ 16 — Débattre =====
  l46: [
    { type: 'qcm', prompt: 'Comment dit-on "d\'un côté... de l\'autre" ?', options: ['On one hand... on the other hand', 'First... then', 'Because... so'], answer: 'On one hand... on the other hand' },
    { type: 'fill', prompt: 'Complète : "___ (D\'un côté), it saves time."', answer: 'On one hand' },
    { type: 'translate', prompt: 'Traduis : "Il y a des avantages et des inconvénients."', answer: 'There are advantages and disadvantages' },
    { type: 'qcm', prompt: '"Advantage" veut dire...', options: ['Avantage', 'Inconvénient', 'Problème'], answer: 'Avantage' },
    { type: 'drag', prompt: 'Remets dans l\'ordre : "hand / one / On"', words: ['On', 'one', 'hand'], answer: 'On one hand' },
    { type: 'truefalse', prompt: '"Drawback" veut dire "inconvénient"', answer: true },
    { type: 'translate', prompt: 'Traduis : "Le principal inconvénient est le prix."', answer: 'The main drawback is the price' },
    { type: 'qcm', prompt: 'Comment dit-on "en revanche" ?', options: ['On the other hand', 'For example', 'In conclusion'], answer: 'On the other hand' },
    { type: 'fill', prompt: 'Complète : "___ (En revanche), it is expensive."', answer: 'On the other hand' }
  ],
  l47: [
    { type: 'qcm', prompt: 'Comment dit-on "il me semble que" ?', options: ['It seems to me that', 'I am sure that', 'I know that'], answer: 'It seems to me that' },
    { type: 'fill', prompt: 'Complète : "It ___ (semble) true, but I am not sure."', answer: 'seems' },
    { type: 'translate', prompt: 'Traduis : "Dans une certaine mesure, tu as raison."', answer: 'To some extent, you are right' },
    { type: 'qcm', prompt: '"Not necessarily" veut dire...', options: ['Pas nécessairement', 'Absolument', 'Jamais'], answer: 'Pas nécessairement' },
    { type: 'drag', prompt: 'Remets dans l\'ordre : "extent / some / To"', words: ['To', 'some', 'extent'], answer: 'To some extent' },
    { type: 'truefalse', prompt: '"It depends" veut dire "ça dépend"', answer: true },
    { type: 'translate', prompt: 'Traduis : "Ça dépend de la situation."', answer: 'It depends on the situation' },
    { type: 'qcm', prompt: 'Comment dit-on "clairement" ?', options: ['Clearly', 'Rarely', 'Hardly'], answer: 'Clearly' },
    { type: 'fill', prompt: 'Complète : "It ___ (semble) complicated."', answer: 'seems' }
  ],
  l48: [
    { type: 'qcm', prompt: 'Comment dit-on "je suis convaincu que" ?', options: ['I am convinced that', 'I doubt that', 'I forget that'], answer: 'I am convinced that' },
    { type: 'fill', prompt: 'Complète : "I strongly ___ (crois) this is right."', answer: 'believe' },
    { type: 'translate', prompt: 'Traduis : "Cela prouve que j\'ai raison."', answer: 'This proves that I am right' },
    { type: 'qcm', prompt: '"Evidence" veut dire...', options: ['Preuve', 'Opinion', 'Doute'], answer: 'Preuve' },
    { type: 'drag', prompt: 'Remets dans l\'ordre : "convinced / am / I"', words: ['I', 'am', 'convinced'], answer: 'I am convinced' },
    { type: 'truefalse', prompt: '"Undoubtedly" veut dire "sans aucun doute"', answer: true },
    { type: 'translate', prompt: 'Traduis : "Sans aucun doute, c\'est la meilleure option."', answer: 'Undoubtedly, this is the best option' },
    { type: 'qcm', prompt: 'Comment dit-on "convaincre" ?', options: ['To convince', 'To doubt', 'To forget'], answer: 'To convince' },
    { type: 'fill', prompt: 'Complète : "This ___ (prouve) my point."', answer: 'proves' }
  ],
  b16: [
    { type: 'qcm', prompt: 'Comment dit-on "avantage" ?', options: ['Advantage', 'Drawback', 'Problem'], answer: 'Advantage' },
    { type: 'translate', prompt: 'Traduis : "D\'un côté c\'est pratique, de l\'autre c\'est cher."', answer: 'On one hand it is practical, on the other hand it is expensive' },
    { type: 'fill', prompt: 'Complète : "It ___ (semble) reasonable."', answer: 'seems' },
    { type: 'qcm', prompt: 'Comment dit-on "convaincre" ?', options: ['To convince', 'To forget', 'To doubt'], answer: 'To convince' },
    { type: 'drag', prompt: 'Remets dans l\'ordre : "some / extent / To"', words: ['To', 'some', 'extent'], answer: 'To some extent' },
    { type: 'translate', prompt: 'Traduis : "Ça dépend du contexte."', answer: 'It depends on the context' },
    { type: 'qcm', prompt: 'Comment dit-on "preuve" ?', options: ['Evidence', 'Opinion', 'Doubt'], answer: 'Evidence' },
    { type: 'fill', prompt: 'Complète : "___ (Sans aucun doute), this is correct."', answer: 'Undoubtedly' },
    { type: 'truefalse', prompt: '"Drawback" veut dire "avantage"', answer: false }
  ]
  ,

  // ===== UNITÉ 17 — Actualité =====
  l49: [
    { type: 'qcm', prompt: 'Comment dit-on "gros titre" ?', options: ['Headline', 'Article', 'Newspaper'], answer: 'Headline' },
    { type: 'fill', prompt: 'Complète : "The ___ (titre) says the economy is growing."', answer: 'headline' },
    { type: 'translate', prompt: 'Traduis : "Cet article parle du climat."', answer: 'This article is about the climate' },
    { type: 'qcm', prompt: '"Breaking news" veut dire...', options: ['Dernière minute', 'Vieille nouvelle', 'Article payant'], answer: 'Dernière minute' },
    { type: 'drag', prompt: 'Remets dans l\'ordre : "news / is / This / breaking"', words: ['This', 'is', 'breaking', 'news'], answer: 'This is breaking news' },
    { type: 'truefalse', prompt: '"Journalist" veut dire "journaliste"', answer: true },
    { type: 'translate', prompt: 'Traduis : "Les journalistes ont posé beaucoup de questions."', answer: 'The journalists asked many questions' },
    { type: 'qcm', prompt: 'Comment dit-on "source" ?', options: ['Source', 'Reader', 'Editor'], answer: 'Source' },
    { type: 'fill', prompt: 'Complète : "According to the ___ (source), it is true."', answer: 'source' }
  ],
  l50: [
    { type: 'qcm', prompt: 'Comment dit-on "résumer" ?', options: ['To summarize', 'To repeat', 'To translate'], answer: 'To summarize' },
    { type: 'fill', prompt: 'Complète : "Can you ___ (r\u00e9sumer) the article?"', answer: 'summarize' },
    { type: 'translate', prompt: 'Traduis : "En bref, la situation s\'améliore."', answer: 'In short, the situation is improving' },
    { type: 'qcm', prompt: '"In short" veut dire...', options: ['En bref', 'En détail', 'Jamais'], answer: 'En bref' },
    { type: 'drag', prompt: 'Remets dans l\'ordre : "main / What / point / the / is / ?"', words: ['What', 'is', 'the', 'main', 'point?'], answer: 'What is the main point?' },
    { type: 'truefalse', prompt: '"Key point" veut dire "point clé"', answer: true },
    { type: 'translate', prompt: 'Traduis : "Le point principal est le coût."', answer: 'The main point is the cost' },
    { type: 'qcm', prompt: 'Comment dit-on "en détail" ?', options: ['In detail', 'In short', 'In fact'], answer: 'In detail' },
    { type: 'fill', prompt: 'Complète : "To ___ (r\u00e9sumer), the plan failed."', answer: 'summarize' }
  ],
  l51: [
    { type: 'qcm', prompt: 'Comment dit-on "chaîne" (TV) ?', options: ['Channel', 'Screen', 'Remote'], answer: 'Channel' },
    { type: 'fill', prompt: 'Complète : "I watch the news on ___ (cha\u00eene) 4."', answer: 'channel' },
    { type: 'translate', prompt: 'Traduis : "Les réseaux sociaux ont changé les médias."', answer: 'Social media changed the media' },
    { type: 'qcm', prompt: '"Broadcast" veut dire...', options: ['Diffuser', 'Éteindre', 'Lire'], answer: 'Diffuser' },
    { type: 'drag', prompt: 'Remets dans l\'ordre : "live / They / broadcast / the / event"', words: ['They', 'broadcast', 'the', 'event', 'live'], answer: 'They broadcast the event live' },
    { type: 'truefalse', prompt: '"Live" (en direct) se prononce comme "give"', answer: true },
    { type: 'translate', prompt: 'Traduis : "Ce documentaire est très intéressant."', answer: 'This documentary is very interesting' },
    { type: 'qcm', prompt: 'Comment dit-on "présentateur" ?', options: ['Anchor', 'Actor', 'Editor'], answer: 'Anchor' },
    { type: 'fill', prompt: 'Complète : "The news ___ (pr\u00e9sentateur) spoke clearly."', answer: 'anchor' }
  ],
  b17: [
    { type: 'qcm', prompt: 'Comment dit-on "actualité" ?', options: ['News', 'History', 'Story'], answer: 'News' },
    { type: 'translate', prompt: 'Traduis : "Ce titre est trompeur."', answer: 'This headline is misleading' },
    { type: 'fill', prompt: 'Complète : "Can you ___ (r\u00e9sumer) this article for me?"', answer: 'summarize' },
    { type: 'qcm', prompt: 'Comment dit-on "diffuser" ?', options: ['To broadcast', 'To hide', 'To delete'], answer: 'To broadcast' },
    { type: 'drag', prompt: 'Remets dans l\'ordre : "breaking / This / news / is"', words: ['This', 'is', 'breaking', 'news'], answer: 'This is breaking news' },
    { type: 'translate', prompt: 'Traduis : "En bref, le projet est annulé."', answer: 'In short, the project is cancelled' },
    { type: 'qcm', prompt: 'Comment dit-on "journaliste" ?', options: ['Journalist', 'Anchor', 'Editor'], answer: 'Journalist' },
    { type: 'fill', prompt: 'Complète : "According to this ___ (source), it is confirmed."', answer: 'source' },
    { type: 'truefalse', prompt: '"In detail" veut dire "en bref"', answer: false }
  ]
  ,

  // ===== UNITÉ 18 — Hypothèses =====
  l52: [
    { type: 'qcm', prompt: 'Comment dit-on "si j\'étais toi" ?', options: ['If I were you', 'If I am you', 'If I was you'], answer: 'If I were you' },
    { type: 'fill', prompt: 'Complète : "If it ___ (pleuvait), I would stay home."', answer: 'rained' },
    { type: 'translate', prompt: 'Traduis : "Si j\'avais de l\'argent, je voyagerais."', answer: 'If I had money, I would travel' },
    { type: 'qcm', prompt: '"If I were you, I would..." veut dire...', options: ['Si j\'étais toi, je...', 'Si tu étais moi...', 'Quand je serai toi...'], answer: 'Si j\'étais toi, je...' },
    { type: 'drag', prompt: 'Remets dans l\'ordre : "were / you / If / I"', words: ['If', 'I', 'were', 'you'], answer: 'If I were you' },
    { type: 'truefalse', prompt: '"Would" s\'utilise dans les phrases hypothétiques', answer: true },
    { type: 'translate', prompt: 'Traduis : "Que ferais-tu si tu gagnais à la loterie ?"', answer: 'What would you do if you won the lottery?' },
    { type: 'qcm', prompt: 'Comment dit-on "à ta place" ?', options: ['In your place', 'At your place', 'On your place'], answer: 'In your place' },
    { type: 'fill', prompt: 'Complète : "If I ___ (\u00e9tais) rich, I would help others."', answer: 'were' }
  ],
  l53: [
    { type: 'qcm', prompt: 'Comment dit-on "j\'aurais dû" ?', options: ['I should have', 'I would have', 'I could have'], answer: 'I should have' },
    { type: 'fill', prompt: 'Complète : "I ___ (aurais d\u00fb) study more."', answer: 'should have' },
    { type: 'translate', prompt: 'Traduis : "J\'aurais pu réussir."', answer: 'I could have succeeded' },
    { type: 'qcm', prompt: '"I regret that" veut dire...', options: ['Je regrette que', "J'espère que", 'Je pense que'], answer: 'Je regrette que' },
    { type: 'drag', prompt: 'Remets dans l\'ordre : "have / should / earlier / You / left"', words: ['You', 'should', 'have', 'left', 'earlier'], answer: 'You should have left earlier' },
    { type: 'truefalse', prompt: '"I wish I had known" exprime un regret', answer: true },
    { type: 'translate', prompt: 'Traduis : "J\'aurais aimé le savoir plus tôt."', answer: 'I wish I had known earlier' },
    { type: 'qcm', prompt: 'Comment dit-on "j\'aurais pu" ?', options: ['I could have', 'I can have', 'I will have'], answer: 'I could have' },
    { type: 'fill', prompt: 'Complète : "You ___ (aurais d\u00fb) call me."', answer: 'should have' }
  ],
  l54: [
    { type: 'qcm', prompt: 'Comment dit-on "imagine que" ?', options: ['Imagine that', 'Remember that', 'Forget that'], answer: 'Imagine that' },
    { type: 'fill', prompt: 'Complète : "___ (Imagine) you could fly."', answer: 'Imagine' },
    { type: 'translate', prompt: 'Traduis : "Que se passerait-il si les robots dirigeaient le monde ?"', answer: 'What would happen if robots ruled the world?' },
    { type: 'qcm', prompt: '"Suppose" veut dire...', options: ['Suppose', 'Refuse', 'Forget'], answer: 'Suppose' },
    { type: 'drag', prompt: 'Remets dans l\'ordre : "could / you / Suppose / fly"', words: ['Suppose', 'you', 'could', 'fly'], answer: 'Suppose you could fly' },
    { type: 'truefalse', prompt: '"What if...?" introduit une hypothèse', answer: true },
    { type: 'translate', prompt: 'Traduis : "Et si nous avions tort ?"', answer: 'What if we are wrong?' },
    { type: 'qcm', prompt: 'Comment dit-on "supposons que" ?', options: ['Suppose that', 'Remember that', 'Deny that'], answer: 'Suppose that' },
    { type: 'fill', prompt: 'Complète : "What ___ (si) it never happened?"', answer: 'if' }
  ],
  b18: [
    { type: 'qcm', prompt: 'Comment dit-on "si j\'étais toi" ?', options: ['If I were you', 'If I am you', 'If I be you'], answer: 'If I were you' },
    { type: 'translate', prompt: 'Traduis : "Si j\'avais du temps, je lirais plus."', answer: 'If I had time, I would read more' },
    { type: 'fill', prompt: 'Complète : "I ___ (aurais d\u00fb) listen to you."', answer: 'should have' },
    { type: 'qcm', prompt: 'Comment dit-on "imaginer" ?', options: ['To imagine', 'To forget', 'To ignore'], answer: 'To imagine' },
    { type: 'drag', prompt: 'Remets dans l\'ordre : "if / What / wrong / we / are"', words: ['What', 'if', 'we', 'are', 'wrong'], answer: 'What if we are wrong' },
    { type: 'translate', prompt: 'Traduis : "J\'aurais aimé être là."', answer: 'I wish I had been there' },
    { type: 'qcm', prompt: 'Comment dit-on "regretter" ?', options: ['To regret', 'To hope', 'To imagine'], answer: 'To regret' },
    { type: 'fill', prompt: 'Complète : "Suppose you ___ (pouvais) travel anywhere."', answer: 'could' },
    { type: 'truefalse', prompt: '"I should have" exprime un regret', answer: true }
  ]
  ,

  // ===== UNITÉ 19 — Émotions nuancées =====
  l55: [
    { type: 'qcm', prompt: 'Comment dit-on "déçu" ?', options: ['Disappointed', 'Happy', 'Excited'], answer: 'Disappointed' },
    { type: 'fill', prompt: 'Complète : "I feel ___ (frustr\u00e9) about this."', answer: 'frustrated' },
    { type: 'translate', prompt: 'Traduis : "Je suis anxieux avant les examens."', answer: 'I am anxious before exams' },
    { type: 'qcm', prompt: '"Overwhelmed" veut dire...', options: ['Débordé/submergé', 'Détendu', 'Ennuyé'], answer: 'Débordé/submergé' },
    { type: 'drag', prompt: 'Remets dans l\'ordre : "feel / a / I / bit / nervous"', words: ['I', 'feel', 'a', 'bit', 'nervous'], answer: 'I feel a bit nervous' },
    { type: 'truefalse', prompt: '"Relieved" veut dire "soulagé"', answer: true },
    { type: 'translate', prompt: 'Traduis : "Elle se sent soulagée maintenant."', answer: 'She feels relieved now' },
    { type: 'qcm', prompt: 'Comment dit-on "gêné" ?', options: ['Embarrassed', 'Proud', 'Confident'], answer: 'Embarrassed' },
    { type: 'fill', prompt: 'Complète : "He seems ___ (\u00e9nerv\u00e9) today."', answer: 'annoyed' }
  ],
  l56: [
    { type: 'qcm', prompt: 'Comment dit-on "je me sens..." ?', options: ['I feel...', 'I am doing...', 'I have...'], answer: 'I feel...' },
    { type: 'fill', prompt: 'Complète : "I am ___ (fier) of you."', answer: 'proud' },
    { type: 'translate', prompt: 'Traduis : "Je me sens vraiment reconnaissant."', answer: 'I feel really grateful' },
    { type: 'qcm', prompt: '"Grateful" veut dire...', options: ['Reconnaissant', 'Jaloux', 'Fâché'], answer: 'Reconnaissant' },
    { type: 'drag', prompt: 'Remets dans l\'ordre : "you / of / proud / I / am"', words: ['I', 'am', 'proud', 'of', 'you'], answer: 'I am proud of you' },
    { type: 'truefalse', prompt: '"Jealous" veut dire "jaloux"', answer: true },
    { type: 'translate', prompt: 'Traduis : "Il est fier de son travail."', answer: 'He is proud of his work' },
    { type: 'qcm', prompt: 'Comment dit-on "confiant" ?', options: ['Confident', 'Shy', 'Nervous'], answer: 'Confident' },
    { type: 'fill', prompt: 'Complète : "She feels ___ (confiante) today."', answer: 'confident' }
  ],
  l57: [
    { type: 'qcm', prompt: 'Comment dit-on "je comprends comment tu te sens" ?', options: ['I understand how you feel', 'I know your name', 'I like your feelings'], answer: 'I understand how you feel' },
    { type: 'fill', prompt: 'Complète : "I am here ___ (pour) you."', answer: 'for' },
    { type: 'translate', prompt: 'Traduis : "Ça va aller."', answer: 'It will be okay' },
    { type: 'qcm', prompt: '"Take your time" veut dire...', options: ['Prends ton temps', 'Dépêche-toi', 'Arrête maintenant'], answer: 'Prends ton temps' },
    { type: 'drag', prompt: 'Remets dans l\'ordre : "you / here / for / I / am"', words: ['I', 'am', 'here', 'for', 'you'], answer: 'I am here for you' },
    { type: 'truefalse', prompt: '"I am here for you" est une phrase de soutien', answer: true },
    { type: 'translate', prompt: 'Traduis : "Je suis désolé pour toi."', answer: 'I am sorry for you' },
    { type: 'qcm', prompt: 'Comment dit-on "réconforter" ?', options: ['To comfort', 'To ignore', 'To blame'], answer: 'To comfort' },
    { type: 'fill', prompt: 'Complète : "Don\'t worry, ___ (\u00e7a) will be okay."', answer: 'it' }
  ],
  b19: [
    { type: 'qcm', prompt: 'Comment dit-on "déçu" ?', options: ['Disappointed', 'Delighted', 'Confident'], answer: 'Disappointed' },
    { type: 'translate', prompt: 'Traduis : "Je suis fier de toi et reconnaissant."', answer: 'I am proud of you and grateful' },
    { type: 'fill', prompt: 'Complète : "I feel ___ (soulag\u00e9) now."', answer: 'relieved' },
    { type: 'qcm', prompt: 'Comment dit-on "gêné" ?', options: ['Embarrassed', 'Proud', 'Calm'], answer: 'Embarrassed' },
    { type: 'drag', prompt: 'Remets dans l\'ordre : "here / am / you / for / I"', words: ['I', 'am', 'here', 'for', 'you'], answer: 'I am here for you' },
    { type: 'translate', prompt: 'Traduis : "Ça va aller, prends ton temps."', answer: 'It will be okay, take your time' },
    { type: 'qcm', prompt: 'Comment dit-on "jaloux" ?', options: ['Jealous', 'Grateful', 'Calm'], answer: 'Jealous' },
    { type: 'fill', prompt: 'Complète : "He seems ___ (\u00e9nerv\u00e9) today."', answer: 'annoyed' },
    { type: 'truefalse', prompt: '"Grateful" veut dire "en colère"', answer: false }
  ]
  ,

  // ===== UNITÉ 20 — Expressions idiomatiques =====
  l58: [
    { type: 'qcm', prompt: 'Que signifie "It\'s raining cats and dogs" ?', options: ['Il pleut très fort', 'Il fait beau', 'Il neige'], answer: 'Il pleut très fort' },
    { type: 'fill', prompt: 'Complète : "Break a ___ (jambe) !" (bonne chance)', answer: 'leg' },
    { type: 'translate', prompt: 'Traduis le sens : "Piece of cake" (facile)', answer: 'It is very easy' },
    { type: 'qcm', prompt: '"Under the weather" signifie...', options: ['Se sentir malade', 'Être en pleine forme', 'Avoir froid'], answer: 'Se sentir malade' },
    { type: 'drag', prompt: 'Remets dans l\'ordre : "a / It\'s / cake / piece / of"', words: ["It's", 'a', 'piece', 'of', 'cake'], answer: "It's a piece of cake" },
    { type: 'truefalse', prompt: '"Break a leg" veut dire se faire mal à la jambe', answer: false },
    { type: 'translate', prompt: 'Que veut dire "Cost an arm and a leg" ?', answer: 'Cela coûte très cher' },
    { type: 'qcm', prompt: '"Once in a blue moon" signifie...', options: ['Très rarement', 'Souvent', 'Chaque jour'], answer: 'Très rarement' },
    { type: 'fill', prompt: 'Complète : "It costs an arm and a ___ (jambe)."', answer: 'leg' }
  ],
  l59: [
    { type: 'qcm', prompt: 'Que signifie "give up" ?', options: ['Abandonner', 'Commencer', 'Continuer'], answer: 'Abandonner' },
    { type: 'fill', prompt: 'Complète : "Please turn ___ (\u00e9teins) the light."', answer: 'off' },
    { type: 'translate', prompt: 'Traduis le sens : "Look forward to" (avoir hâte de)', answer: 'To be excited about something coming' },
    { type: 'qcm', prompt: '"Work out" (au sens figuré) veut dire...', options: ['Se résoudre / s\'arranger', 'Travailler dehors', 'Sortir'], answer: 'Se résoudre / s\'arranger' },
    { type: 'drag', prompt: 'Remets dans l\'ordre : "up / don\'t / Please / give"', words: ['Please', "don't", 'give', 'up'], answer: "Please don't give up" },
    { type: 'truefalse', prompt: '"Look forward to" exprime l\'impatience positive', answer: true },
    { type: 'translate', prompt: 'Que veut dire "figure out" ?', answer: 'To understand or solve something' },
    { type: 'qcm', prompt: '"Run into" (quelqu\'un) veut dire...', options: ['Rencontrer par hasard', 'Éviter', 'Fuir'], answer: 'Rencontrer par hasard' },
    { type: 'fill', prompt: 'Complète : "I need to figure ___ (r\u00e9soudre) this problem."', answer: 'out' }
  ],
  l60: [
    { type: 'qcm', prompt: 'Que signifie "That\'s hilarious" ?', options: ["C'est très drôle", "C'est triste", "C'est ennuyeux"], answer: "C'est très drôle" },
    { type: 'fill', prompt: 'Complète : "You\'re ___ (blague)!" (sans façon)', answer: 'kidding' },
    { type: 'translate', prompt: 'Traduis le sens : "To crack a joke"', answer: 'To tell a joke' },
    { type: 'qcm', prompt: '"No kidding" veut dire...', options: ['Sans blague', 'Bien sûr que non', 'Jamais'], answer: 'Sans blague' },
    { type: 'drag', prompt: 'Remets dans l\'ordre : "hilarious / That\'s"', words: ["That's", 'hilarious'], answer: "That's hilarious" },
    { type: 'truefalse', prompt: '"To crack a joke" veut dire "raconter une blague"', answer: true },
    { type: 'translate', prompt: 'Que veut dire "You crack me up" ?', answer: 'You make me laugh a lot' },
    { type: 'qcm', prompt: '"Pun" désigne...', options: ['Un jeu de mots', 'Une insulte', 'Un compliment'], answer: 'Un jeu de mots' },
    { type: 'fill', prompt: 'Complète : "You always ___ (me fais rire) me up."', answer: 'crack' }
  ],
  b20: [
    { type: 'qcm', prompt: 'Que signifie "Piece of cake" ?', options: ["C'est très facile", "C'est délicieux", "C'est difficile"], answer: "C'est très facile" },
    { type: 'translate', prompt: 'Traduis le sens : "Break a leg" (bonne chance)', answer: 'Good luck' },
    { type: 'fill', prompt: 'Complète : "I need to figure ___ (comprendre) this out."', answer: 'out' },
    { type: 'qcm', prompt: 'Que signifie "Once in a blue moon" ?', options: ['Très rarement', 'Tous les jours', 'Jamais'], answer: 'Très rarement' },
    { type: 'drag', prompt: 'Remets dans l\'ordre : "hilarious / That\'s"', words: ["That's", 'hilarious'], answer: "That's hilarious" },
    { type: 'translate', prompt: 'Que veut dire "Cost an arm and a leg" ?', answer: 'It is very expensive' },
    { type: 'qcm', prompt: 'Que signifie "Under the weather" ?', options: ['Se sentir malade', 'Avoir chaud', 'Être joyeux'], answer: 'Se sentir malade' },
    { type: 'fill', prompt: 'Complète : "Please don\'t give ___ (abandonne)."', answer: 'up' },
    { type: 'truefalse', prompt: '"You crack me up" veut dire "tu m\'énerves"', answer: false }
  ]
}

export function getExercises(lessonId) {
  return exercisesByLesson[lessonId] || exercisesByLesson.l2
}
