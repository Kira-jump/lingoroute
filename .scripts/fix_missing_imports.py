path = 'src/screens/Exercise/index.jsx'
content = open(path).read()

old = "import { isAnswerCorrect } from '../../utils/answerCheck'"
new = """import { isAnswerCorrect } from '../../utils/answerCheck'
import HeartsShopModal from '../../components/HeartsShopModal'
import { formatCountdown } from '../../services/hearts'"""

if old not in content:
    print('MOTIF NON TROUVÉ')
elif 'HeartsShopModal' in content.split(old)[0]:
    print('DÉJÀ IMPORTÉ')
else:
    content = content.replace(old, new, 1)
    open(path, 'w').write(content)
    print('ok')
