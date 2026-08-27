path = 'src/database/exercises.js'
content = open(path).read()

marker = '''}

export function getExercises(lessonId) {'''

unit17 = '''  ,

  // ===== UNITÉ 17 — Actualité =====
  l49: [
    { type: 'qcm', prompt: 'Comment dit-on "gros titre" ?', options: ['Headline', 'Article', 'Newspaper'], answer: 'Headline' },
    { type: 'fill', prompt: 'Complète : "The ___ (titre) says the economy is growing."', answer: 'headline' },
    { type: 'translate', prompt: 'Traduis : "Cet article parle du climat."', answer: 'This article is about the climate' },
    { type: 'qcm', prompt: '"Breaking news" veut dire...', options: ['Dernière minute', 'Vieille nouvelle', 'Article payant'], answer: 'Dernière minute' },
    { type: 'drag', prompt: 'Remets dans l\\'ordre : "news / is / This / breaking"', words: ['This', 'is', 'breaking', 'news'], answer: 'This is breaking news' },
    { type: 'truefalse', prompt: '"Journalist" veut dire "journaliste"', answer: true },
    { type: 'translate', prompt: 'Traduis : "Les journalistes ont posé beaucoup de questions."', answer: 'The journalists asked many questions' },
    { type: 'qcm', prompt: 'Comment dit-on "source" ?', options: ['Source', 'Reader', 'Editor'], answer: 'Source' },
    { type: 'fill', prompt: 'Complète : "According to the ___ (source), it is true."', answer: 'source' }
  ],
  l50: [
    { type: 'qcm', prompt: 'Comment dit-on "résumer" ?', options: ['To summarize', 'To repeat', 'To translate'], answer: 'To summarize' },
    { type: 'fill', prompt: 'Complète : "Can you ___ (r\\u00e9sumer) the article?"', answer: 'summarize' },
    { type: 'translate', prompt: 'Traduis : "En bref, la situation s\\'améliore."', answer: 'In short, the situation is improving' },
    { type: 'qcm', prompt: '"In short" veut dire...', options: ['En bref', 'En détail', 'Jamais'], answer: 'En bref' },
    { type: 'drag', prompt: 'Remets dans l\\'ordre : "main / What / point / the / is / ?"', words: ['What', 'is', 'the', 'main', 'point?'], answer: 'What is the main point?' },
    { type: 'truefalse', prompt: '"Key point" veut dire "point clé"', answer: true },
    { type: 'translate', prompt: 'Traduis : "Le point principal est le coût."', answer: 'The main point is the cost' },
    { type: 'qcm', prompt: 'Comment dit-on "en détail" ?', options: ['In detail', 'In short', 'In fact'], answer: 'In detail' },
    { type: 'fill', prompt: 'Complète : "To ___ (r\\u00e9sumer), the plan failed."', answer: 'summarize' }
  ],
  l51: [
    { type: 'qcm', prompt: 'Comment dit-on "chaîne" (TV) ?', options: ['Channel', 'Screen', 'Remote'], answer: 'Channel' },
    { type: 'fill', prompt: 'Complète : "I watch the news on ___ (cha\\u00eene) 4."', answer: 'channel' },
    { type: 'translate', prompt: 'Traduis : "Les réseaux sociaux ont changé les médias."', answer: 'Social media changed the media' },
    { type: 'qcm', prompt: '"Broadcast" veut dire...', options: ['Diffuser', 'Éteindre', 'Lire'], answer: 'Diffuser' },
    { type: 'drag', prompt: 'Remets dans l\\'ordre : "live / They / broadcast / the / event"', words: ['They', 'broadcast', 'the', 'event', 'live'], answer: 'They broadcast the event live' },
    { type: 'truefalse', prompt: '"Live" (en direct) se prononce comme "give"', answer: true },
    { type: 'translate', prompt: 'Traduis : "Ce documentaire est très intéressant."', answer: 'This documentary is very interesting' },
    { type: 'qcm', prompt: 'Comment dit-on "présentateur" ?', options: ['Anchor', 'Actor', 'Editor'], answer: 'Anchor' },
    { type: 'fill', prompt: 'Complète : "The news ___ (pr\\u00e9sentateur) spoke clearly."', answer: 'anchor' }
  ],
  b17: [
    { type: 'qcm', prompt: 'Comment dit-on "actualité" ?', options: ['News', 'History', 'Story'], answer: 'News' },
    { type: 'translate', prompt: 'Traduis : "Ce titre est trompeur."', answer: 'This headline is misleading' },
    { type: 'fill', prompt: 'Complète : "Can you ___ (r\\u00e9sumer) this article for me?"', answer: 'summarize' },
    { type: 'qcm', prompt: 'Comment dit-on "diffuser" ?', options: ['To broadcast', 'To hide', 'To delete'], answer: 'To broadcast' },
    { type: 'drag', prompt: 'Remets dans l\\'ordre : "breaking / This / news / is"', words: ['This', 'is', 'breaking', 'news'], answer: 'This is breaking news' },
    { type: 'translate', prompt: 'Traduis : "En bref, le projet est annulé."', answer: 'In short, the project is cancelled' },
    { type: 'qcm', prompt: 'Comment dit-on "journaliste" ?', options: ['Journalist', 'Anchor', 'Editor'], answer: 'Journalist' },
    { type: 'fill', prompt: 'Complète : "According to this ___ (source), it is confirmed."', answer: 'source' },
    { type: 'truefalse', prompt: '"In detail" veut dire "en bref"', answer: false }
  ]
''' + marker

if marker not in content:
    print('MOTIF NON TROUVÉ')
else:
    content = content.replace(marker, unit17, 1)
    open(path, 'w').write(content)
    print('ok')
