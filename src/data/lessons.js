export const lessons = [
  {
    id: 'l1',
    title: 'Premiers pas',
    theme: 'Se présenter',
    icon: '👋',
    questions: [
      {
        type: 'qcm',
        prompt: 'Comment dit-on "Bonjour, je m\'appelle..." ?',
        options: ['Hello, my name is...', 'Goodbye, my name is...', 'Hello, your name is...'],
        answer: 'Hello, my name is...'
      },
      {
        type: 'qcm',
        prompt: 'Que signifie "How are you?"',
        options: ['Où es-tu ?', 'Comment vas-tu ?', 'Qui es-tu ?'],
        answer: 'Comment vas-tu ?'
      },
      {
        type: 'fill',
        prompt: 'Complète : "I ___ from France."',
        answer: 'am'
      },
      {
        type: 'qcm',
        prompt: 'Comment dit-on "Au revoir" ?',
        options: ['Hello', 'Please', 'Goodbye'],
        answer: 'Goodbye'
      }
    ]
  },
  {
    id: 'l2',
    title: 'Au café',
    theme: 'Commander',
    icon: '☕',
    questions: [
      {
        type: 'qcm',
        prompt: 'Comment demander un café poliment ?',
        options: ['Give me coffee!', 'Could I have a coffee, please?', 'Coffee now.'],
        answer: 'Could I have a coffee, please?'
      },
      {
        type: 'fill',
        prompt: 'Complète : "How much ___ it cost?"',
        answer: 'does'
      },
      {
        type: 'qcm',
        prompt: 'Que veut dire "the bill" ?',
        options: ['Le menu', 'L\'addition', 'La table'],
        answer: 'L\'addition'
      },
      {
        type: 'qcm',
        prompt: 'Comment dit-on "C\'est délicieux" ?',
        options: ['It\'s delicious', 'It\'s terrible', 'It\'s expensive'],
        answer: 'It\'s delicious'
      }
    ]
  },
  {
    id: 'l3',
    title: 'En voyage',
    theme: 'Demander son chemin',
    icon: '🧭',
    questions: [
      {
        type: 'qcm',
        prompt: 'Comment demander son chemin ?',
        options: ['Where am I?', 'How do I get to the station?', 'What time is it?'],
        answer: 'How do I get to the station?'
      },
      {
        type: 'fill',
        prompt: 'Complète : "Turn ___ at the next street."',
        answer: 'left'
      },
      {
        type: 'qcm',
        prompt: 'Que signifie "straight ahead" ?',
        options: ['Tout droit', 'À droite', 'Derrière'],
        answer: 'Tout droit'
      },
      {
        type: 'qcm',
        prompt: 'Comment dit-on "Je suis perdu" ?',
        options: ['I am lost', 'I am late', 'I am tired'],
        answer: 'I am lost'
      }
    ]
  }
]
