path = 'src/database/exercises.js'
content = open(path).read()

marker = "\nexport function getExercises(lessonId) {"

unit10 = '''
  // ===== UNITÉ 10 — Travail =====
  l28: [
    { type: 'qcm', prompt: 'Comment dit-on "professeur" ?', options: ['Teacher', 'Doctor', 'Lawyer'], answer: 'Teacher' },
    { type: 'fill', prompt: 'Complète : "She is a ___ (m\\u00e9decin)."', answer: 'doctor' },
    { type: 'translate', prompt: 'Traduis : "Que fais-tu dans la vie ?"', answer: 'What do you do for a living?' },
    { type: 'qcm', prompt: '"Engineer" désigne...', options: ['Ingénieur', 'Infirmier', 'Avocat'], answer: 'Ingénieur' },
    { type: 'drag', prompt: 'Remets dans l\\'ordre : "am / an / I / engineer"', words: ['I', 'am', 'an', 'engineer'], answer: 'I am an engineer' },
    { type: 'truefalse', prompt: '"Lawyer" veut dire "avocat"', answer: true },
    { type: 'translate', prompt: 'Traduis : "Il est infirmier."', answer: 'He is a nurse' },
    { type: 'qcm', prompt: 'Comment dit-on "employé" ?', options: ['Employee', 'Employer', 'Manager'], answer: 'Employee' },
    { type: 'fill', prompt: 'Complète : "My job is very ___ (int\\u00e9ressant)."', answer: 'interesting' }
  ],
  l29: [
    { type: 'qcm', prompt: 'Comment dit-on "réunion" ?', options: ['Meeting', 'Break', 'Deadline'], answer: 'Meeting' },
    { type: 'fill', prompt: 'Complète : "I start work at 9 ___ (heures)."', answer: "o'clock" },
    { type: 'translate', prompt: 'Traduis : "Je travaille du lundi au vendredi."', answer: 'I work from Monday to Friday' },
    { type: 'qcm', prompt: '"Deadline" désigne...', options: ['La date limite', 'La pause', 'Le salaire'], answer: 'La date limite' },
    { type: 'drag', prompt: 'Remets dans l\\'ordre : "have / a / I / meeting / today"', words: ['I', 'have', 'a', 'meeting', 'today'], answer: 'I have a meeting today' },
    { type: 'truefalse', prompt: '"Colleague" veut dire "collègue"', answer: true },
    { type: 'translate', prompt: 'Traduis : "J\\'ai une pause à midi."', answer: 'I have a break at noon' },
    { type: 'qcm', prompt: 'Comment dit-on "salaire" ?', options: ['Salary', 'Bonus', 'Tax'], answer: 'Salary' },
    { type: 'fill', prompt: 'Complète : "The ___ (r\\u00e9union) starts at 10am."', answer: 'meeting' }
  ],
  l30: [
    { type: 'qcm', prompt: 'Comment dit-on "poste vacant" ?', options: ['Job opening', 'Job closing', 'Job ending'], answer: 'Job opening' },
    { type: 'fill', prompt: 'Complète : "I am looking ___ (pour) a new job."', answer: 'for' },
    { type: 'translate', prompt: 'Traduis : "J\\'ai postulé pour ce poste."', answer: 'I applied for this position' },
    { type: 'qcm', prompt: '"Interview" veut dire...', options: ['Entretien', 'Contrat', 'Salaire'], answer: 'Entretien' },
    { type: 'drag', prompt: 'Remets dans l\\'ordre : "for / applied / a / I / job"', words: ['I', 'applied', 'for', 'a', 'job'], answer: 'I applied for a job' },
    { type: 'truefalse', prompt: '"Resume" (CV) et "Interview" sont la même chose', answer: false },
    { type: 'translate', prompt: 'Traduis : "L\\'entretien est demain."', answer: 'The interview is tomorrow' },
    { type: 'qcm', prompt: 'Comment dit-on "expérience" ?', options: ['Experience', 'Education', 'Skill'], answer: 'Experience' },
    { type: 'fill', prompt: 'Complète : "I have five years of ___ (exp\\u00e9rience)."', answer: 'experience' }
  ],
  b10: [
    { type: 'qcm', prompt: 'Comment dit-on "métier" ?', options: ['Job', 'Hobby', 'School'], answer: 'Job' },
    { type: 'translate', prompt: 'Traduis : "Je suis ingénieur et je travaille beaucoup."', answer: 'I am an engineer and I work a lot' },
    { type: 'fill', prompt: 'Complète : "I have a ___ (r\\u00e9union) tomorrow."', answer: 'meeting' },
    { type: 'qcm', prompt: 'Comment dit-on "entretien d\\'embauche" ?', options: ['Job interview', 'Job opening', 'Job offer'], answer: 'Job interview' },
    { type: 'drag', prompt: 'Remets dans l\\'ordre : "job / for / looking / a / I / am / new"', words: ['I', 'am', 'looking', 'for', 'a', 'new', 'job'], answer: 'I am looking for a new job' },
    { type: 'translate', prompt: 'Traduis : "Quel est ton métier ?"', answer: 'What is your job?' },
    { type: 'qcm', prompt: 'Comment dit-on "collègue" ?', options: ['Colleague', 'Boss', 'Client'], answer: 'Colleague' },
    { type: 'fill', prompt: 'Complète : "My ___ (salaire) is good."', answer: 'salary' },
    { type: 'truefalse', prompt: '"Deadline" veut dire "pause déjeuner"', answer: false }
  ],

''' + marker

if marker not in content:
    print('MOTIF NON TROUVÉ')
else:
    content = content.replace(marker, unit10, 1)
    open(path, 'w').write(content)
    print('ok')
