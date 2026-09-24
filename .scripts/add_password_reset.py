path = 'src/context/AuthContext.jsx'
content = open(path).read()

content = content.replace(
    "  signOut,\n  updateProfile",
    "  signOut,\n  updateProfile,\n  sendPasswordResetEmail"
)

old = "  async function logout() {\n    await signOut(auth)\n  }"
new = """  async function logout() {
    await signOut(auth)
  }

  async function resetPassword(email) {
    await sendPasswordResetEmail(auth, email)
  }"""

if old not in content:
    print('MOTIF 1 NON TROUVÉ')
else:
    content = content.replace(old, new, 1)

old2 = "value={{ user, profile, setProfile, loading, register, login, logout }}"
new2 = "value={{ user, profile, setProfile, loading, register, login, logout, resetPassword }}"

if old2 not in content:
    print('MOTIF 2 NON TROUVÉ')
else:
    content = content.replace(old2, new2, 1)

open(path, 'w').write(content)
print('done')
