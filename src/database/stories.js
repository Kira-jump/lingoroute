export const stories = {
  u1: {
    title: 'Premier jour',
    unlockAfter: 'b1',
    panels: [
      { mood: 'idle', en: 'Hi! My name is Max.', fr: "Salut ! Je m'appelle Max." },
      { mood: 'happy', en: 'Nice to meet you!', fr: 'Enchanté !' },
      { mood: 'idle', en: 'I am from France.', fr: 'Je viens de France.' },
      { mood: 'idle', en: 'Where are you from?', fr: "D'où viens-tu ?" },
      { mood: 'happy', en: 'I am from Senegal!', fr: 'Je viens du Sénégal !' },
      { mood: 'excited', en: 'Great! See you soon!', fr: 'Super ! À bientôt !' },
      { mood: 'happy', en: 'Goodbye, Max!', fr: 'Au revoir, Max !' }
    ],
    rewardXp: 20,
    rewardGems: 10
  }
}

export function getStory(unitId) {
  return stories[unitId] || null
}
