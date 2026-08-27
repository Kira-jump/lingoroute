path = 'src/database/lessonContent.js'
content = open(path).read()

replacements = [
    ("{ en: 'Red', fr: 'Rouge' }", "{ en: 'Red', phon: 'rèd', fr: 'Rouge' }"),
    ("{ en: 'Blue', fr: 'Bleu' }", "{ en: 'Blue', phon: 'blou', fr: 'Bleu' }"),
    ("{ en: 'Green', fr: 'Vert' }", "{ en: 'Green', phon: 'grine', fr: 'Vert' }"),
    ("{ en: 'Black / White', fr: 'Noir / Blanc' }", "{ en: 'Black / White', phon: 'blak / waïte', fr: 'Noir / Blanc' }"),
    ("{ en: 'Purple', fr: 'Violet' }", "{ en: 'Purple', phon: 'peur-peul', fr: 'Violet' }"),
    ("{ en: 'Pink', fr: 'Rose' }", "{ en: 'Pink', phon: 'pinque', fr: 'Rose' }"),
    ("{ en: 'Backpack', fr: 'Sac à dos' }", "{ en: 'Backpack', phon: 'bak-pak', fr: 'Sac à dos' }"),
    ("{ en: 'Phone', fr: 'Téléphone' }", "{ en: 'Phone', phon: 'fôoune', fr: 'Téléphone' }"),
    ("{ en: 'Keys', fr: 'Clés' }", "{ en: 'Keys', phon: 'kiz', fr: 'Clés' }"),
    ("{ en: 'Book', fr: 'Livre' }", "{ en: 'Book', phon: 'bouk', fr: 'Livre' }"),
    ("{ en: 'Computer', fr: 'Ordinateur' }", "{ en: 'Computer', phon: 'keum-piou-teur', fr: 'Ordinateur' }"),
    ("{ en: 'Watch', fr: 'Montre' }", "{ en: 'Watch', phon: 'wotch', fr: 'Montre' }"),
    ("{ en: 'This', fr: 'Ceci (proche, singulier)' }", "{ en: 'This', phon: 'ziss', fr: 'Ceci (proche, singulier)' }"),
    ("{ en: 'That', fr: 'Cela (loin, singulier)' }", "{ en: 'That', phon: 'zat', fr: 'Cela (loin, singulier)' }"),
    ("{ en: 'These', fr: 'Ceux-ci (proche, pluriel)' }", "{ en: 'These', phon: 'ziz', fr: 'Ceux-ci (proche, pluriel)' }"),
    ("{ en: 'Those', fr: 'Ceux-là (loin, pluriel)' }", "{ en: 'Those', phon: 'zôouz', fr: 'Ceux-là (loin, pluriel)' }"),
    ("{ en: 'Grey', fr: 'Gris' }", "{ en: 'Grey', phon: 'gréï', fr: 'Gris' }"),
    ("{ en: 'Glasses', fr: 'Lunettes' }", "{ en: 'Glasses', phon: 'gla-siz', fr: 'Lunettes' }"),
    ("{ en: 'Door / Window', fr: 'Porte / Fenêtre' }", "{ en: 'Door / Window', phon: 'dor / wine-dôou', fr: 'Porte / Fenêtre' }"),
]

count = 0
for old, new in replacements:
    if old in content:
        content = content.replace(old, new, 1)
        count += 1

open(path, 'w').write(content)
print(f'{count}/{len(replacements)} remplacements (Unité 4)')
