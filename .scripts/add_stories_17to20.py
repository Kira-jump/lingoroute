path = 'src/database/stories.js'
content = open(path).read()

marker = '''}

export function getStory(unitId) {'''

count = content.count(marker)
print(f'Occurrences du marqueur : {count}')

new_content = '''  ,

  u17: {
    title: 'Les gros titres',
    unlockAfter: 'b17',
    panels: [
      { mood: 'idle', en: 'Look at this headline!', fr: 'Regarde ce titre !' },
      { mood: 'excited', en: 'This is breaking news!', fr: 'C\\u2019est une info de dernière minute !' },
      { mood: 'idle', en: 'Can you summarize the article?', fr: 'Peux-tu résumer l\\u2019article ?' },
      { mood: 'idle', en: 'In short, everything is changing fast.', fr: 'En bref, tout change vite.' },
      { mood: 'happy', en: 'Thanks for the update!', fr: 'Merci pour l\\u2019info !' }
    ],
    rewardXp: 20,
    rewardGems: 10
  },

  u18: {
    title: 'Si seulement...',
    unlockAfter: 'b18',
    panels: [
      { mood: 'idle', en: 'If I were you, I would travel more.', fr: 'Si j\\u2019étais toi, je voyagerais plus.' },
      { mood: 'sad', en: 'I should have saved more money.', fr: 'J\\u2019aurais dû économiser plus.' },
      { mood: 'idle', en: 'What if we started today?', fr: 'Et si on commençait aujourd\\u2019hui ?' },
      { mood: 'happy', en: 'Imagine all the places we could see!', fr: 'Imagine tous les endroits qu\\u2019on pourrait voir !' },
      { mood: 'excited', en: 'Let\\u2019s make it happen!', fr: 'Faisons en sorte que ça arrive !' }
    ],
    rewardXp: 20,
    rewardGems: 10
  },

  u19: {
    title: 'Un ami dans le besoin',
    unlockAfter: 'b19',
    panels: [
      { mood: 'sad', en: 'I feel really disappointed today.', fr: 'Je me sens vraiment déçu aujourd\\u2019hui.' },
      { mood: 'idle', en: 'I understand how you feel.', fr: 'Je comprends ce que tu ressens.' },
      { mood: 'idle', en: 'I am here for you.', fr: 'Je suis là pour toi.' },
      { mood: 'happy', en: 'Thank you, that means a lot.', fr: 'Merci, ça compte beaucoup pour moi.' },
      { mood: 'happy', en: 'I feel grateful to have you.', fr: 'Je suis reconnaissant de t\\u2019avoir.' }
    ],
    rewardXp: 20,
    rewardGems: 10
  },

  u20: {
    title: 'Le dernier chapitre',
    unlockAfter: 'b20',
    panels: [
      { mood: 'idle', en: 'This is a piece of cake!', fr: 'C\\u2019est du gâteau ! (très facile)' },
      { mood: 'happy', en: 'You really crack me up!', fr: 'Tu me fais vraiment rire !' },
      { mood: 'idle', en: 'Don\\u2019t give up, we are almost there.', fr: 'N\\u2019abandonne pas, on y est presque.' },
      { mood: 'excited', en: 'We did it! Break a leg for what comes next!', fr: 'On l\\u2019a fait ! Bonne chance pour la suite !' },
      { mood: 'excited', en: 'Thank you for this amazing journey!', fr: 'Merci pour cette incroyable aventure !' }
    ],
    rewardXp: 30,
    rewardGems: 20
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
