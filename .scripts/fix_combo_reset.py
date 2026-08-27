path = 'src/screens/Exercise/index.jsx'
content = open(path).read()

old = '''      const newCombo = combo + 1
      setCombo(newCombo)
      if (newCombo > 0 && newCombo % COMBO_THRESHOLD === 0) {
        const { profile: updated, reward } = await grantChestReward(user.uid, profile)
        setProfile(updated)
        setChestReward(reward)
      }'''

new = '''      const newCombo = combo + 1
      if (newCombo >= COMBO_THRESHOLD) {
        setCombo(0)
        const { profile: updated, reward } = await grantChestReward(user.uid, profile)
        setProfile(updated)
        setChestReward(reward)
      } else {
        setCombo(newCombo)
      }'''

if old not in content:
    print('MOTIF NON TROUVÉ')
else:
    content = content.replace(old, new, 1)
    open(path, 'w').write(content)
    print('ok')
