path = 'src/screens/Login/index.jsx'
content = open(path).read()

old = '''          <button className="btn-primary" disabled={loading}>
            {loading ? 'Connexion...' : 'Se connecter'}
          </button>
        </form>'''

new = '''          <button className="btn-primary" disabled={loading}>
            {loading ? 'Connexion...' : 'Se connecter'}
          </button>
        </form>

        <div className="text-center text-sm mt-4">
          <Link to="/forgot-password" className="text-slate-400">
            Mot de passe oublié ?
          </Link>
        </div>'''

if old not in content:
    print('MOTIF NON TROUVÉ')
else:
    content = content.replace(old, new, 1)
    open(path, 'w').write(content)
    print('ok')
