path = 'src/screens/Exercise/index.jsx'
content = open(path).read()

old = "    return inputVal.trim().toLowerCase().replace(/[.!?]/g, '') === q.answer.toLowerCase().replace(/[.!?]/g, '')"
new = "    return isAnswerCorrect(inputVal, q.answer)"

if old not in content:
    print('MOTIF NON TROUVÉ')
else:
    content = content.replace(old, new, 1)
    open(path, 'w').write(content)
    print('ok')
