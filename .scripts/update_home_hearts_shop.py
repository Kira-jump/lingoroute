path = 'src/screens/Home/index.jsx'
content = open(path).read()

content = content.replace(
    "import HeartsModal from '../../components/HeartsModal'",
    "import HeartsShopModal from '../../components/HeartsShopModal'"
)

old = '''      {showHeartsModal && (
        <HeartsModal
          countdown={formatCountdown(heartsState.msUntilNext)}
          onClose={() => setShowHeartsModal(false)}
        />
      )}'''

new = '''      {showHeartsModal && (
        <HeartsShopModal
          uid={user.uid}
          profile={profile}
          countdown={formatCountdown(heartsState.msUntilNext)}
          onProfileUpdate={setProfile}
          onClose={() => setShowHeartsModal(false)}
        />
      )}'''

if old not in content:
    print('MOTIF NON TROUVÉ')
else:
    content = content.replace(old, new, 1)
    open(path, 'w').write(content)
    print('ok')
