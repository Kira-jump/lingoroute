path = 'src/database/lessonContent.js'
content = open(path).read()

replacements = [
    ("{ en: 'I am / You are / He is', fr: 'Je suis / Tu es / Il est' }", "{ en: 'I am / You are / He is', phon: 'aï am / you ar / hi iz', fr: 'Je suis / Tu es / Il est' }"),
    ("{ en: 'I have / He has', fr: 'J\\'ai / Il a' }", "{ en: 'I have / He has', phon: 'aï hav / hi haz', fr: 'J\\'ai / Il a' }"),
    ("{ en: 'We are', fr: 'Nous sommes' }", "{ en: 'We are', phon: 'oui ar', fr: 'Nous sommes' }"),
    ("{ en: 'They have', fr: 'Ils ont' }", "{ en: 'They have', phon: 'zéï hav', fr: 'Ils ont' }"),
    ("{ en: 'Eat', fr: 'Manger' }", "{ en: 'Eat', phon: 'ite', fr: 'Manger' }"),
    ("{ en: 'Sleep', fr: 'Dormir' }", "{ en: 'Sleep', phon: 'slipe', fr: 'Dormir' }"),
    ("{ en: 'Walk', fr: 'Marcher' }", "{ en: 'Walk', phon: 'woke', fr: 'Marcher' }"),
    ("{ en: 'Work', fr: 'Travailler' }", "{ en: 'Work', phon: 'weurk', fr: 'Travailler' }"),
    ("{ en: 'Play', fr: 'Jouer' }", "{ en: 'Play', phon: 'pléï', fr: 'Jouer' }"),
    ("{ en: 'Read', fr: 'Lire' }", "{ en: 'Read', phon: 'ride', fr: 'Lire' }"),
    ("{ en: 'Sujet + verbe + complément', fr: 'Structure de base' }", "{ en: 'Sujet + verbe + complément', phon: '', fr: 'Structure de base' }"),
    ("{ en: 'Do you...?', fr: 'Est-ce que tu... ?' }", "{ en: 'Do you...?', phon: 'dou you', fr: 'Est-ce que tu... ?' }"),
    ("{ en: 'I do not...', fr: 'Je ne... pas' }", "{ en: 'I do not...', phon: 'aï dou not', fr: 'Je ne... pas' }"),
    ("{ en: 'Does he...?', fr: 'Est-ce qu\\'il... ?' }", "{ en: 'Does he...?', phon: 'deuz hi', fr: 'Est-ce qu\\'il... ?' }"),
    ("{ en: 'I am / I have', fr: 'Je suis / J\\'ai' }", "{ en: 'I am / I have', phon: 'aï am / aï hav', fr: 'Je suis / J\\'ai' }"),
    ("{ en: 'I do not have', fr: 'Je n\\'ai pas' }", "{ en: 'I do not have', phon: 'aï dou not hav', fr: 'Je n\\'ai pas' }"),
]

count = 0
for old, new in replacements:
    if old in content:
        content = content.replace(old, new, 1)
        count += 1

open(path, 'w').write(content)
print(f'{count}/{len(replacements)} remplacements (Unité 5)')
