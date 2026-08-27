path = 'src/database/exercises.js'
content = open(path).read()

marker = '''}

export function getExercises(lessonId) {'''

unit15 = '''  ,

  // ===== UNITÉ 15 — Santé =====
  l43: [
    { type: 'qcm', prompt: 'Comment dit-on "médecin" ?', options: ['Doctor', 'Nurse', 'Patient'], answer: 'Doctor' },
    { type: 'fill', prompt: 'Complète : "I have an ___ (rendez-vous) at 3pm."', answer: 'appointment' },
    { type: 'translate', prompt: 'Traduis : "J\\'ai besoin de voir un médecin."', answer: 'I need to see a doctor' },
    { type: 'qcm', prompt: '"Nurse" désigne...', options: ["L'infirmier/ère", 'Le médecin', 'Le patient'], answer: "L'infirmier/ère" },
    { type: 'drag', prompt: 'Remets dans l\\'ordre : "an / I / appointment / have"', words: ['I', 'have', 'an', 'appointment'], answer: 'I have an appointment' },
    { type: 'truefalse', prompt: '"Prescription" veut dire "ordonnance"', answer: true },
    { type: 'translate', prompt: 'Traduis : "La pharmacie est fermée."', answer: 'The pharmacy is closed' },
    { type: 'qcm', prompt: 'Comment dit-on "pharmacie" ?', options: ['Pharmacy', 'Hospital', 'Clinic'], answer: 'Pharmacy' },
    { type: 'fill', prompt: 'Complète : "The doctor gave me a ___ (ordonnance)."', answer: 'prescription' }
  ],
  l44: [
    { type: 'qcm', prompt: 'Comment dit-on "j\\'ai mal à la tête" ?', options: ['I have a headache', 'I have a leg', 'I have a cold'], answer: 'I have a headache' },
    { type: 'fill', prompt: 'Complète : "I have a ___ (fi\\u00e8vre)."', answer: 'fever' },
    { type: 'translate', prompt: 'Traduis : "J\\'ai mal à la gorge."', answer: 'I have a sore throat' },
    { type: 'qcm', prompt: '"Cough" veut dire...', options: ['Toux', 'Fièvre', 'Rhume'], answer: 'Toux' },
    { type: 'drag', prompt: 'Remets dans l\\'ordre : "hurts / stomach / My"', words: ['My', 'stomach', 'hurts'], answer: 'My stomach hurts' },
    { type: 'truefalse', prompt: '"Cold" peut vouloir dire "rhume"', answer: true },
    { type: 'translate', prompt: 'Traduis : "Je me sens malade."', answer: 'I feel sick' },
    { type: 'qcm', prompt: 'Comment dit-on "douleur" ?', options: ['Pain', 'Health', 'Rest'], answer: 'Pain' },
    { type: 'fill', prompt: 'Complète : "I feel ___ (malade) today."', answer: 'sick' }
  ],
  l45: [
    { type: 'qcm', prompt: 'Comment dit-on "reposer" ?', options: ['To rest', 'To run', 'To work'], answer: 'To rest' },
    { type: 'fill', prompt: 'Complète : "You should ___ (te reposer)."', answer: 'rest' },
    { type: 'translate', prompt: 'Traduis : "Bois beaucoup d\\'eau."', answer: 'Drink a lot of water' },
    { type: 'qcm', prompt: '"You should see a doctor" veut dire...', options: ['Tu devrais voir un médecin', 'Tu es en bonne santé', 'Tu dois travailler'], answer: 'Tu devrais voir un médecin' },
    { type: 'drag', prompt: 'Remets dans l\\'ordre : "should / rest / You"', words: ['You', 'should', 'rest'], answer: 'You should rest' },
    { type: 'truefalse', prompt: '"Take medicine" veut dire "prendre un médicament"', answer: true },
    { type: 'translate', prompt: 'Traduis : "Tu devrais dormir davantage."', answer: 'You should sleep more' },
    { type: 'qcm', prompt: 'Comment dit-on "guérir" ?', options: ['To heal', 'To hurt', 'To feel'], answer: 'To heal' },
    { type: 'fill', prompt: 'Complète : "You should ___ (prendre) some medicine."', answer: 'take' }
  ],
  b15: [
    { type: 'qcm', prompt: 'Comment dit-on "j\\'ai de la fièvre" ?', options: ['I have a fever', 'I have a doctor', 'I have a pain'], answer: 'I have a fever' },
    { type: 'translate', prompt: 'Traduis : "Je dois prendre rendez-vous chez le médecin."', answer: 'I need to make an appointment with the doctor' },
    { type: 'fill', prompt: 'Complète : "You should ___ (te reposer) and drink water."', answer: 'rest' },
    { type: 'qcm', prompt: 'Comment dit-on "ordonnance" ?', options: ['Prescription', 'Appointment', 'Pharmacy'], answer: 'Prescription' },
    { type: 'drag', prompt: 'Remets dans l\\'ordre : "hurts / My / head"', words: ['My', 'head', 'hurts'], answer: 'My head hurts' },
    { type: 'translate', prompt: 'Traduis : "Je me sens mieux maintenant."', answer: 'I feel better now' },
    { type: 'qcm', prompt: 'Comment dit-on "toux" ?', options: ['Cough', 'Cold', 'Fever'], answer: 'Cough' },
    { type: 'fill', prompt: 'Complète : "You should see a ___ (m\\u00e9decin)."', answer: 'doctor' },
    { type: 'truefalse', prompt: '"To heal" veut dire "tomber malade"', answer: false }
  ]
''' + marker

if marker not in content:
    print('MOTIF NON TROUVÉ')
else:
    content = content.replace(marker, unit15, 1)
    open(path, 'w').write(content)
    print('ok')
