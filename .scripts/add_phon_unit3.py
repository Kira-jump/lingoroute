path = 'src/database/lessonContent.js'
content = open(path).read()

replacements = [
    ("{ en: 'One, two, three', fr: 'Un, deux, trois' }", "{ en: 'One, two, three', phon: 'ouann, tou, tri', fr: 'Un, deux, trois' }"),
    ("{ en: 'Ten', fr: 'Dix' }", "{ en: 'Ten', phon: 'tènn', fr: 'Dix' }"),
    ("{ en: 'Twenty', fr: 'Vingt' }", "{ en: 'Twenty', phon: 'toui-ni', fr: 'Vingt' }"),
    ("{ en: 'Hundred', fr: 'Cent' }", "{ en: 'Hundred', phon: 'heune-dreud', fr: 'Cent' }"),
    ("{ en: 'Seven', fr: 'Sept' }", "{ en: 'Seven', phon: 'sè-veunn', fr: 'Sept' }"),
    ("{ en: 'What time is it?', fr: 'Quelle heure est-il ?' }", "{ en: 'What time is it?', phon: 'wot taïme iz it', fr: 'Quelle heure est-il ?' }"),
    ("{ en: 'It is ... o\\'clock', fr: 'Il est ... heures' }", "{ en: 'It is ... o\\'clock', phon: 'it iz ... eu-klok', fr: 'Il est ... heures' }"),
    ("{ en: 'Half past', fr: 'Et demie' }", "{ en: 'Half past', phon: 'af past', fr: 'Et demie' }"),
    ("{ en: 'Noon / Midnight', fr: 'Midi / Minuit' }", "{ en: 'Noon / Midnight', phon: 'noune / mide-naïte', fr: 'Midi / Minuit' }"),
    ("{ en: 'Early / Late', fr: 'Tôt / Tard' }", "{ en: 'Early / Late', phon: 'eur-li / léïte', fr: 'Tôt / Tard' }"),
    ("{ en: 'Monday', fr: 'Lundi' }", "{ en: 'Monday', phon: 'meune-déï', fr: 'Lundi' }"),
    ("{ en: 'Saturday', fr: 'Samedi' }", "{ en: 'Saturday', phon: 'sa-teur-déï', fr: 'Samedi' }"),
    ("{ en: 'Weekend', fr: 'Week-end' }", "{ en: 'Weekend', phon: 'wik-ènde', fr: 'Week-end' }"),
    ("{ en: 'January', fr: 'Janvier' }", "{ en: 'January', phon: 'dja-niou-è-ri', fr: 'Janvier' }"),
    ("{ en: 'Month', fr: 'Mois' }", "{ en: 'Month', phon: 'meunse', fr: 'Mois' }"),
    ("{ en: 'Fifteen', fr: 'Quinze' }", "{ en: 'Fifteen', phon: 'fif-tine', fr: 'Quinze' }"),
    ("{ en: 'Year', fr: 'Année' }", "{ en: 'Year', phon: 'yir', fr: 'Année' }"),
    ("{ en: 'Thirty', fr: 'Trente' }", "{ en: 'Thirty', phon: 'seur-ti', fr: 'Trente' }"),
]

count = 0
for old, new in replacements:
    if old in content:
        content = content.replace(old, new, 1)
        count += 1

open(path, 'w').write(content)
print(f'{count}/{len(replacements)} remplacements (Unité 3)')
