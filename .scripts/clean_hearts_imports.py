path = 'src/services/hearts.js'
content = open(path).read()

# Ajoute les imports normaux en haut du fichier s'ils n'y sont pas déjà
if "import { doc, updateDoc } from 'firebase/firestore'" not in content:
    content = "import { doc, updateDoc } from 'firebase/firestore'\nimport { db } from './firebase'\n\n" + content

# Retire les imports dynamiques dans les fonctions
content = content.replace(
    "  const { doc, updateDoc } = await import('firebase/firestore')\n  const { db } = await import('./firebase')\n  ",
    "  "
)

open(path, 'w').write(content)
print('ok')
