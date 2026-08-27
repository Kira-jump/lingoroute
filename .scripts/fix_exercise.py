path = 'src/screens/Exercise/index.jsx'
content = open(path).read()

content = content.replace(
    "import { formatCountdown } from '../../services/hearts'",
    "import { formatCountdown } from '../../services/hearts'\nimport HeartsModal from '../../components/HeartsModal'"
)

old_block_start = 'if (heartsState.hearts <= 0) {'
idx = content.find(old_block_start)
end_marker = "const usedIndexes = new Set()"
end_idx = content.find(end_marker)
new_block = "if (heartsState.hearts <= 0 && !finished) {\n    navigate('/home')\n    return null\n  }\n\n  "
content = content[:idx] + new_block + content[end_idx:]
open(path, 'w').write(content)
print('ok')
