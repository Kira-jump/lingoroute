path = 'src/database/lessonContent.js'
content = open(path).read()

replacements = [
    # Unité 1
    ("{ en: 'Hello', fr: 'Bonjour / Salut' }", "{ en: 'Hello', phon: 'hè-lôou', fr: 'Bonjour / Salut' }"),
    ("{ en: 'Hi', fr: 'Salut (familier)' }", "{ en: 'Hi', phon: 'haï', fr: 'Salut (familier)' }"),
    ("{ en: 'Good morning', fr: 'Bonjour (le matin)' }", "{ en: 'Good morning', phon: 'goud mor-nigne', fr: 'Bonjour (le matin)' }"),
    ("{ en: 'Good evening', fr: 'Bonsoir' }", "{ en: 'Good evening', phon: 'goud iv-nigne', fr: 'Bonsoir' }"),
    ("{ en: 'Good night', fr: 'Bonne nuit' }", "{ en: 'Good night', phon: 'goud naït', fr: 'Bonne nuit' }"),
    ("{ en: 'Goodbye', fr: 'Au revoir' }", "{ en: 'Goodbye', phon: 'goud-baï', fr: 'Au revoir' }"),
    ("{ en: 'See you soon', fr: 'À bientôt' }", "{ en: 'See you soon', phon: 'si you soune', fr: 'À bientôt' }"),
    ("{ en: 'My name is...', fr: 'Je m\\'appelle...' }", "{ en: 'My name is...', phon: 'maï néïm iz', fr: 'Je m\\'appelle...' }"),
    ("{ en: 'I am ... years old', fr: 'J\\'ai ... ans' }", "{ en: 'I am ... years old', phon: 'aï am ... yirz ôould', fr: 'J\\'ai ... ans' }"),
    ("{ en: 'Nice to meet you', fr: 'Enchanté(e)' }", "{ en: 'Nice to meet you', phon: 'naïss tou mit you', fr: 'Enchanté(e)' }"),
    ("{ en: 'What is your name?', fr: 'Quel est ton nom ?' }", "{ en: 'What is your name?', phon: 'wot iz your néïm', fr: 'Quel est ton nom ?' }"),
    ("{ en: 'How old are you?', fr: 'Quel âge as-tu ?' }", "{ en: 'How old are you?', phon: 'haou ôould ar you', fr: 'Quel âge as-tu ?' }"),
    ("{ en: 'Where are you from?', fr: 'D\\'où viens-tu ?' }", "{ en: 'Where are you from?', phon: 'wèr ar you from', fr: 'D\\'où viens-tu ?' }"),
    ("{ en: 'I am from France', fr: 'Je viens de France' }", "{ en: 'I am from France', phon: 'aï am from france', fr: 'Je viens de France' }"),
    ("{ en: 'French', fr: 'Français(e)' }", "{ en: 'French', phon: 'frèntch', fr: 'Français(e)' }"),
    ("{ en: 'English', fr: 'Anglais(e)' }", "{ en: 'English', phon: 'igne-glich', fr: 'Anglais(e)' }"),
    ("{ en: 'American', fr: 'Américain(e)' }", "{ en: 'American', phon: 'eu-mè-ri-keunn', fr: 'Américain(e)' }"),
    ("{ en: 'Canadian', fr: 'Canadien(ne)' }", "{ en: 'Canadian', phon: 'keu-néï-di-eunn', fr: 'Canadien(ne)' }"),
    ("{ en: 'Belgian', fr: 'Belge' }", "{ en: 'Belgian', phon: 'bèl-djeunn', fr: 'Belge' }"),
    ("{ en: 'country', fr: 'pays' }", "{ en: 'country', phon: 'keunn-tri', fr: 'pays' }"),
    # Boss 1
    ("{ en: 'Hello / Goodbye', fr: 'Bonjour / Au revoir' }", "{ en: 'Hello / Goodbye', phon: 'hè-lôou / goud-baï', fr: 'Bonjour / Au revoir' }"),
]

count = 0
for old, new in replacements:
    if old in content:
        content = content.replace(old, new, 1)
        count += 1

open(path, 'w').write(content)
print(f'{count}/{len(replacements)} remplacements effectués (Unité 1)')
