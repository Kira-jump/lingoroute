path = 'src/database/stories.js'
content = open(path).read()

marker = '''}

export function getStory(unitId) {'''

count = content.count(marker)
print(f'Occurrences du marqueur : {count}')

new_content = '''  ,

  u2: {
    title: 'La famille de Max',
    unlockAfter: 'b2',
    panels: [
      { mood: 'happy', en: 'This is my family!', fr: 'Voici ma famille !' },
      { mood: 'idle', en: 'This is my mother.', fr: 'Voici ma mère.' },
      { mood: 'idle', en: 'This is my father.', fr: 'Voici mon père.' },
      { mood: 'happy', en: 'I have two sisters.', fr: "J'ai deux sœurs." },
      { mood: 'excited', en: 'My family is big and kind!', fr: 'Ma famille est grande et gentille !' }
    ],
    rewardXp: 20,
    rewardGems: 10
  },

  u3: {
    title: "L'heure du rendez-vous",
    unlockAfter: 'b3',
    panels: [
      { mood: 'idle', en: 'What time is it?', fr: 'Quelle heure est-il ?' },
      { mood: 'idle', en: 'It is nine o\\u2019clock.', fr: 'Il est neuf heures.' },
      { mood: 'sad', en: 'Oh no, I am late!', fr: 'Oh non, je suis en retard !' },
      { mood: 'excited', en: 'I need to hurry!', fr: 'Je dois me dépêcher !' },
      { mood: 'happy', en: 'I arrived just in time.', fr: 'Je suis arrivé juste à temps.' }
    ],
    rewardXp: 20,
    rewardGems: 10
  },

  u4: {
    title: 'Le sac magique',
    unlockAfter: 'b4',
    panels: [
      { mood: 'idle', en: 'What is in my bag?', fr: 'Qu\\u2019y a-t-il dans mon sac ?' },
      { mood: 'happy', en: 'A blue phone!', fr: 'Un téléphone bleu !' },
      { mood: 'happy', en: 'A red book!', fr: 'Un livre rouge !' },
      { mood: 'excited', en: 'And my favorite watch!', fr: 'Et ma montre préférée !' },
      { mood: 'happy', en: 'This is my backpack.', fr: 'Voici mon sac à dos.' }
    ],
    rewardXp: 20,
    rewardGems: 10
  },

  u5: {
    title: 'Une journée active',
    unlockAfter: 'b5',
    panels: [
      { mood: 'idle', en: 'I wake up early.', fr: 'Je me réveille tôt.' },
      { mood: 'idle', en: 'I eat breakfast.', fr: 'Je mange le petit-déjeuner.' },
      { mood: 'happy', en: 'I walk to school.', fr: 'Je marche jusqu\\u2019à l\\u2019école.' },
      { mood: 'excited', en: 'I play with my friends.', fr: 'Je joue avec mes amis.' },
      { mood: 'happy', en: 'It was a good day!', fr: 'C\\u2019était une bonne journée !' }
    ],
    rewardXp: 20,
    rewardGems: 10
  },

  u6: {
    title: 'Les courses de Max',
    unlockAfter: 'b6',
    panels: [
      { mood: 'idle', en: 'I am going shopping.', fr: 'Je vais faire les courses.' },
      { mood: 'idle', en: 'I need some bread.', fr: "J'ai besoin de pain." },
      { mood: 'sad', en: 'This is too expensive!', fr: "C'est trop cher !" },
      { mood: 'happy', en: 'This one is cheaper.', fr: "Celui-ci est moins cher." },
      { mood: 'excited', en: 'Great, I found a discount!', fr: "Super, j'ai trouvé une réduction !" }
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
