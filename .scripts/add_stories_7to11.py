path = 'src/database/stories.js'
content = open(path).read()

marker = '''}

export function getStory(unitId) {'''

count = content.count(marker)
print(f'Occurrences du marqueur : {count}')

new_content = '''  ,

  u7: {
    title: 'Au restaurant',
    unlockAfter: 'b7',
    panels: [
      { mood: 'idle', en: 'A table for two, please.', fr: "Une table pour deux, s'il vous plaît." },
      { mood: 'idle', en: 'I would like to order.', fr: 'Je voudrais commander.' },
      { mood: 'happy', en: 'This chicken is delicious!', fr: 'Ce poulet est délicieux !' },
      { mood: 'idle', en: 'Can I have the bill, please?', fr: "Puis-je avoir l'addition, s'il vous plaît ?" },
      { mood: 'happy', en: 'Thank you, see you next time!', fr: 'Merci, à la prochaine !' }
    ],
    rewardXp: 20,
    rewardGems: 10
  },

  u8: {
    title: 'Le voyage en train',
    unlockAfter: 'b8',
    panels: [
      { mood: 'idle', en: 'Where is the train station?', fr: "Où est la gare ?" },
      { mood: 'idle', en: 'Turn left at the corner.', fr: 'Tourne à gauche au coin de la rue.' },
      { mood: 'happy', en: 'I found the platform!', fr: 'J\\u2019ai trouvé le quai !' },
      { mood: 'sad', en: 'Oh no, the train is delayed.', fr: 'Oh non, le train est retardé.' },
      { mood: 'happy', en: 'Finally, here it comes!', fr: 'Enfin, le voici !' }
    ],
    rewardXp: 20,
    rewardGems: 10
  },

  u9: {
    title: 'Un pique-nique sous la pluie',
    unlockAfter: 'b9',
    panels: [
      { mood: 'idle', en: 'What\\u2019s the weather like today?', fr: 'Quel temps fait-il aujourd\\u2019hui ?' },
      { mood: 'sad', en: 'Oh no, it is raining!', fr: 'Oh non, il pleut !' },
      { mood: 'idle', en: 'Let\\u2019s stay inside and read.', fr: 'Restons à l\\u2019intérieur et lisons.' },
      { mood: 'happy', en: 'Reading is my favorite hobby.', fr: 'La lecture est mon passe-temps préféré.' },
      { mood: 'excited', en: 'Tomorrow will be sunny!', fr: 'Demain il fera beau !' }
    ],
    rewardXp: 20,
    rewardGems: 10
  },

  u10: {
    title: 'Le premier jour de travail',
    unlockAfter: 'b10',
    panels: [
      { mood: 'idle', en: 'I have a job interview today.', fr: "J'ai un entretien d'embauche aujourd'hui." },
      { mood: 'sad', en: 'I am a little nervous.', fr: 'Je suis un peu nerveux.' },
      { mood: 'happy', en: 'The interview went well!', fr: "L'entretien s'est bien passé !" },
      { mood: 'excited', en: 'I got the job!', fr: "J'ai eu le poste !" },
      { mood: 'happy', en: 'My new colleagues are very kind.', fr: 'Mes nouveaux collègues sont très gentils.' }
    ],
    rewardXp: 20,
    rewardGems: 10
  },

  u11: {
    title: 'Un débat amical',
    unlockAfter: 'b11',
    panels: [
      { mood: 'idle', en: 'I think this movie is great.', fr: 'Je pense que ce film est génial.' },
      { mood: 'sad', en: 'I disagree, it was boring.', fr: "Je ne suis pas d'accord, c'était ennuyeux." },
      { mood: 'idle', en: 'In my opinion, the story was good.', fr: "À mon avis, l'histoire était bonne." },
      { mood: 'happy', en: 'I see your point.', fr: 'Je comprends ton point de vue.' },
      { mood: 'happy', en: 'Let\\u2019s agree to disagree!', fr: 'Restons chacun sur notre position, amicalement !' }
    ],
    rewardXp: 20,
    rewardGems: 10
  }
''' + marker

if marker not in content:
    print('MOTIF NON TROUVÉ')
elif count != 1:
    print(f'ANNULÉ : le marqueur apparaît {count} fois')
else:
    content = content.replace(marker, new_content, 1)
    open(path, 'w').write(content)
    print('ok')
