path = 'src/database/lessonContent.js'
content = open(path).read()

marker = "\nexport function getLessonContent(lessonId) {"

new_content = '''
  // ===== UNITÉ 6 — Courses =====
  l16: {
    title: 'Au supermarché',
    intro: 'Le vocabulaire pour faire ses courses au supermarché.',
    vocab: [
      { en: 'Supermarket', phon: 'sou-peur-mar-kit', fr: 'Supermarché' },
      { en: 'Trolley', phon: 'tro-li', fr: 'Chariot' },
      { en: 'Basket', phon: 'bas-kit', fr: 'Panier' },
      { en: 'Checkout', phon: 'tchèque-aoute', fr: 'Caisse' },
      { en: 'Aisle', phon: 'aïl', fr: 'Rayon' },
      { en: 'Bread', phon: 'brèd', fr: 'Pain' }
    ],
    examples: [
      { en: 'I need to buy some bread.', fr: "J'ai besoin d'acheter du pain." },
      { en: 'Where is the checkout?', fr: 'Où est la caisse ?' }
    ]
  },
  l17: {
    title: 'Prix & quantités',
    intro: 'Comment demander un prix et parler de quantités.',
    vocab: [
      { en: 'How much is it?', phon: 'haou meutch iz it', fr: 'Combien ça coûte ?' },
      { en: 'Expensive', phon: 'ex-pèn-siv', fr: 'Cher' },
      { en: 'Cheap', phon: 'tchip', fr: 'Bon marché' },
      { en: 'Discount', phon: 'dis-kaount', fr: 'Réduction' },
      { en: 'A dozen', phon: 'eu deu-zeun', fr: 'Une douzaine' }
    ],
    examples: [
      { en: 'It costs five dollars.', fr: 'Ça coûte cinq dollars.' },
      { en: 'Can I have a discount?', fr: 'Puis-je avoir une réduction ?' }
    ]
  },
  l18: {
    title: 'Comparer',
    intro: 'Comment comparer deux objets ou options.',
    vocab: [
      { en: 'Bigger', phon: 'bi-gueur', fr: 'Plus grand' },
      { en: 'Cheaper', phon: 'tchi-peur', fr: 'Moins cher' },
      { en: 'The best', phon: 'ze bèst', fr: 'Le meilleur' },
      { en: 'The same', phon: 'ze séim', fr: 'Identique' },
      { en: 'Different', phon: 'di-feu-reunt', fr: 'Différent' }
    ],
    examples: [
      { en: 'This one is cheaper than that one.', fr: "Celui-ci est moins cher que celui-là." },
      { en: 'This is the best shop in town.', fr: 'C\\'est le meilleur magasin de la ville.' }
    ]
  },
  b6: {
    title: 'Récapitulatif — Unité 6',
    intro: 'Révise le vocabulaire des courses avant le Boss.',
    vocab: [
      { en: 'Go shopping', phon: 'gôou cho-pigne', fr: 'Faire les courses' },
      { en: 'List', phon: 'list', fr: 'Liste' },
      { en: 'Drinks aisle', phon: 'drinks aïl', fr: 'Rayon boissons' }
    ],
    examples: [
      { en: 'How much does it cost?', fr: 'Combien ça coûte ?' }
    ]
  },

  // ===== UNITÉ 7 — Restaurant =====
  l19: {
    title: 'Commander',
    intro: 'Le vocabulaire pour commander au restaurant.',
    vocab: [
      { en: 'A table for two', phon: 'eu téi-beul for tou', fr: 'Une table pour deux' },
      { en: 'Menu', phon: 'mé-niou', fr: 'Menu' },
      { en: 'Waiter', phon: 'wéi-teur', fr: 'Serveur' },
      { en: 'I would like...', phon: 'aï woud laïk', fr: 'Je voudrais...' },
      { en: 'Reservation', phon: 'ré-zeur-véi-cheun', fr: 'Réservation' }
    ],
    examples: [
      { en: 'I would like to order.', fr: 'Je voudrais commander.' },
      { en: 'A table for two, please.', fr: 'Une table pour deux, s\\'il vous plaît.' }
    ]
  },
  l20: {
    title: 'Nourriture',
    intro: 'Le vocabulaire des aliments et des goûts.',
    vocab: [
      { en: 'Chicken', phon: 'tchi-keunn', fr: 'Poulet' },
      { en: 'Fish', phon: 'fich', fr: 'Poisson' },
      { en: 'Spicy', phon: 'spaï-si', fr: 'Épicé' },
      { en: 'Sweet', phon: 'souit', fr: 'Sucré' },
      { en: 'Vegetarian', phon: 'vè-dji-téi-ri-eun', fr: 'Végétarien' }
    ],
    examples: [
      { en: 'I am vegetarian.', fr: 'Je suis végétarien.' },
      { en: 'This soup is very spicy.', fr: 'Cette soupe est très épicée.' }
    ]
  },
  l21: {
    title: 'Payer l\\'addition',
    intro: 'Comment demander et payer l\\'addition.',
    vocab: [
      { en: 'The bill', phon: 'ze bil', fr: "L'addition" },
      { en: 'Tip', phon: 'tip', fr: 'Pourboire' },
      { en: 'Cash', phon: 'kach', fr: 'Espèces' },
      { en: 'Receipt', phon: 'ri-sit', fr: 'Reçu' },
      { en: 'Keep the change', phon: 'kip ze tchéindj', fr: 'Gardez la monnaie' }
    ],
    examples: [
      { en: 'Can I have the bill, please?', fr: "Puis-je avoir l'addition, s'il vous plaît ?" },
      { en: 'Do you accept cards?', fr: 'Acceptez-vous les cartes ?' }
    ]
  },
  b7: {
    title: 'Récapitulatif — Unité 7',
    intro: 'Révise le vocabulaire du restaurant avant le Boss.',
    vocab: [
      { en: 'Delicious', phon: 'di-li-cheus', fr: 'Délicieux' },
      { en: 'Excellent service', phon: 'èk-seu-leunt seur-vis', fr: 'Excellent service' }
    ],
    examples: [
      { en: 'It was delicious.', fr: "C'était délicieux." }
    ]
  },

''' + marker

if marker not in content:
    print('MOTIF NON TROUVÉ')
else:
    content = content.replace(marker, new_content, 1)
    open(path, 'w').write(content)
    print('ok')
