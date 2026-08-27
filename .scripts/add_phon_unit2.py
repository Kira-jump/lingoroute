path = 'src/database/lessonContent.js'
content = open(path).read()

replacements = [
    ("{ en: 'Father', fr: 'Père' }", "{ en: 'Father', phon: 'fa-zeur', fr: 'Père' }"),
    ("{ en: 'Mother', fr: 'Mère' }", "{ en: 'Mother', phon: 'meu-zeur', fr: 'Mère' }"),
    ("{ en: 'Brother', fr: 'Frère' }", "{ en: 'Brother', phon: 'breu-zeur', fr: 'Frère' }"),
    ("{ en: 'Sister', fr: 'Sœur' }", "{ en: 'Sister', phon: 'sis-teur', fr: 'Sœur' }"),
    ("{ en: 'Son / Daughter', fr: 'Fils / Fille' }", "{ en: 'Son / Daughter', phon: 'seunn / do-teur', fr: 'Fils / Fille' }"),
    ("{ en: 'Grandparents', fr: 'Grands-parents' }", "{ en: 'Grandparents', phon: 'grande-pè-reunnts', fr: 'Grands-parents' }"),
    ("{ en: 'Children', fr: 'Enfants' }", "{ en: 'Children', phon: 'tchil-dreunn', fr: 'Enfants' }"),
    ("{ en: 'Tall / Short', fr: 'Grand / Petit' }", "{ en: 'Tall / Short', phon: 'tol / chort', fr: 'Grand / Petit' }"),
    ("{ en: 'Young / Old', fr: 'Jeune / Vieux' }", "{ en: 'Young / Old', phon: 'yeung / ôould', fr: 'Jeune / Vieux' }"),
    ("{ en: 'Kind', fr: 'Gentil' }", "{ en: 'Kind', phon: 'kaïnde', fr: 'Gentil' }"),
    ("{ en: 'Beautiful', fr: 'Beau / Belle' }", "{ en: 'Beautiful', phon: 'bioux-ti-foul', fr: 'Beau / Belle' }"),
    ("{ en: 'Long hair', fr: 'Cheveux longs' }", "{ en: 'Long hair', phon: 'longue èr', fr: 'Cheveux longs' }"),
    ("{ en: 'Blue eyes', fr: 'Yeux bleus' }", "{ en: 'Blue eyes', phon: 'blou aïz', fr: 'Yeux bleus' }"),
    ("{ en: 'My', fr: 'Mon / Ma / Mes' }", "{ en: 'My', phon: 'maï', fr: 'Mon / Ma / Mes' }"),
    ("{ en: 'Your', fr: 'Ton / Ta / Tes' }", "{ en: 'Your', phon: 'your', fr: 'Ton / Ta / Tes' }"),
    ("{ en: 'His', fr: 'Son (à lui)' }", "{ en: 'His', phon: 'hiz', fr: 'Son (à lui)' }"),
    ("{ en: 'Her', fr: 'Son (à elle)' }", "{ en: 'Her', phon: 'heur', fr: 'Son (à elle)' }"),
    ("{ en: 'Our', fr: 'Notre / Nos' }", "{ en: 'Our', phon: 'aou-eur', fr: 'Notre / Nos' }"),
    ("{ en: 'Their', fr: 'Leur / Leurs' }", "{ en: 'Their', phon: 'zèr', fr: 'Leur / Leurs' }"),
    ("{ en: 'Family', fr: 'Famille' }", "{ en: 'Family', phon: 'fa-mi-li', fr: 'Famille' }"),
    ("{ en: 'Cousin', fr: 'Cousin(e)' }", "{ en: 'Cousin', phon: 'keu-zeunn', fr: 'Cousin(e)' }"),
    ("{ en: 'Uncle / Aunt', fr: 'Oncle / Tante' }", "{ en: 'Uncle / Aunt', phon: 'eune-keul / ainte', fr: 'Oncle / Tante' }"),
    ("{ en: 'Grandmother', fr: 'Grand-mère' }", "{ en: 'Grandmother', phon: 'grande-meu-zeur', fr: 'Grand-mère' }"),
]

count = 0
for old, new in replacements:
    if old in content:
        content = content.replace(old, new, 1)
        count += 1

open(path, 'w').write(content)
print(f'{count}/{len(replacements)} remplacements (Unité 2)')
