path = 'src/database/stories.js'
content = open(path).read()

marker = '''}

export function getStory(unitId) {'''

count = content.count(marker)
print(f'Occurrences du marqueur : {count}')

new_content = '''  ,

  u12: {
    title: 'Un souvenir de vacances',
    unlockAfter: 'b12',
    panels: [
      { mood: 'idle', en: 'Once upon a time, I went to the beach.', fr: 'Il était une fois, je suis allé à la plage.' },
      { mood: 'happy', en: 'I swam in the sea.', fr: "J'ai nagé dans la mer." },
      { mood: 'excited', en: 'Suddenly, I saw a dolphin!', fr: "Soudain, j'ai vu un dauphin !" },
      { mood: 'happy', en: 'It was an amazing trip.', fr: 'C\\u2019était un voyage incroyable.' },
      { mood: 'happy', en: 'I will never forget it.', fr: 'Je ne l\\u2019oublierai jamais.' }
    ],
    rewardXp: 20,
    rewardGems: 10
  },

  u13: {
    title: 'Le plan de Max',
    unlockAfter: 'b13',
    panels: [
      { mood: 'idle', en: 'My goal is to learn English.', fr: 'Mon objectif est d\\u2019apprendre l\\u2019anglais.' },
      { mood: 'idle', en: 'I am going to practice every day.', fr: 'Je vais pratiquer tous les jours.' },
      { mood: 'happy', en: 'I will succeed, I am sure.', fr: 'Je vais réussir, j\\u2019en suis sûr.' },
      { mood: 'excited', en: 'In the future, I will travel a lot.', fr: 'Dans le futur, je voyagerai beaucoup.' },
      { mood: 'happy', en: 'My dream is coming true!', fr: 'Mon rêve devient réalité !' }
    ],
    rewardXp: 20,
    rewardGems: 10
  },

  u14: {
    title: 'Un imprévu à l\\u2019aéroport',
    unlockAfter: 'b14',
    panels: [
      { mood: 'idle', en: 'My flight leaves at 6am.', fr: 'Mon vol part à 6h.' },
      { mood: 'sad', en: 'Oh no, my flight is cancelled!', fr: 'Oh non, mon vol est annulé !' },
      { mood: 'sad', en: 'Can you help me, please?', fr: 'Pouvez-vous m\\u2019aider, s\\u2019il vous plaît ?' },
      { mood: 'idle', en: 'There is another flight tomorrow.', fr: 'Il y a un autre vol demain.' },
      { mood: 'happy', en: 'Finally, I am on my way!', fr: 'Enfin, je suis en route !' }
    ],
    rewardXp: 20,
    rewardGems: 10
  },

  u15: {
    title: 'Chez le médecin',
    unlockAfter: 'b15',
    panels: [
      { mood: 'sad', en: 'I don\\u2019t feel well today.', fr: 'Je ne me sens pas bien aujourd\\u2019hui.' },
      { mood: 'sad', en: 'I have a headache and a fever.', fr: 'J\\u2019ai mal à la tête et de la fièvre.' },
      { mood: 'idle', en: 'You should see a doctor.', fr: 'Tu devrais voir un médecin.' },
      { mood: 'idle', en: 'The doctor gave me a prescription.', fr: 'Le médecin m\\u2019a donné une ordonnance.' },
      { mood: 'happy', en: 'I feel better now!', fr: 'Je me sens mieux maintenant !' }
    ],
    rewardXp: 20,
    rewardGems: 10
  },

  u16: {
    title: 'Le grand débat',
    unlockAfter: 'b16',
    panels: [
      { mood: 'idle', en: 'On one hand, it saves time.', fr: 'D\\u2019un côté, ça fait gagner du temps.' },
      { mood: 'idle', en: 'On the other hand, it is expensive.', fr: 'De l\\u2019autre côté, c\\u2019est cher.' },
      { mood: 'idle', en: 'It seems to me that it is worth it.', fr: 'Il me semble que ça en vaut la peine.' },
      { mood: 'happy', en: 'I am convinced now.', fr: 'Je suis convaincu maintenant.' },
      { mood: 'happy', en: 'Thanks for the great discussion!', fr: 'Merci pour cette super discussion !' }
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
