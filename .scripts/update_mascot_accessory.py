path = 'src/components/Mascot/index.jsx'
content = open(path).read()

old = "export default function Mascot({ mood = 'idle', variant = 'dad', size = 72, className = '' }) {"
new = "export default function Mascot({ mood = 'idle', variant = 'dad', accessory = null, size = 72, className = '' }) {"

if old not in content:
    print('MOTIF 1 NON TROUVÉ')
else:
    content = content.replace(old, new, 1)

old2 = '''        {mood === 'excited' && (
          <>
            <path d="M8 16 l3 6 l6 3 l-6 3 l-3 6 l-3 -6 l-6 -3 l6 -3 z" fill="#fbbf24" />
            <path d="M90 26 l2 4 l4 2 l-4 2 l-2 4 l-2 -4 l-4 -2 l4 -2 z" fill="#fbbf24" />
          </>
        )}
      </svg>
    </div>
  )
}'''

new2 = '''        {mood === 'excited' && (
          <>
            <path d="M8 16 l3 6 l6 3 l-6 3 l-3 6 l-3 -6 l-6 -3 l6 -3 z" fill="#fbbf24" />
            <path d="M90 26 l2 4 l4 2 l-4 2 l-2 4 l-2 -4 l-4 -2 l4 -2 z" fill="#fbbf24" />
          </>
        )}

        {accessory === 'glasses' && (
          <g>
            <circle cx="42" cy="44" r="9" fill="none" stroke="#1F2A44" strokeWidth="3" />
            <circle cx="58" cy="44" r="9" fill="none" stroke="#1F2A44" strokeWidth="3" />
            <line x1="51" y1="44" x2="51" y2="44" stroke="#1F2A44" strokeWidth="3" />
          </g>
        )}

        {accessory === 'hat' && (
          <g>
            <ellipse cx="50" cy="16" rx="22" ry="5" fill="#1F2A44" />
            <path d="M35 16 Q35 -2 50 -2 Q65 -2 65 16 Z" fill="#2b3a5c" />
          </g>
        )}

        {accessory === 'bandana' && (
          <path d="M14 52 Q50 66 86 52 L86 60 Q50 74 14 60 Z" fill="#C1432D" />
        )}

        {accessory === 'crown' && (
          <g>
            <path d="M32 14 L38 26 L50 12 L62 26 L68 14 L68 22 L32 22 Z" fill="#C9A227" stroke="#a5811a" strokeWidth="1" />
            <circle cx="38" cy="14" r="2.5" fill="#e05a8a" />
            <circle cx="50" cy="10" r="2.5" fill="#60a5fa" />
            <circle cx="62" cy="14" r="2.5" fill="#e05a8a" />
          </g>
        )}
      </svg>
    </div>
  )
}'''

if old2 not in content:
    print('MOTIF 2 NON TROUVÉ')
else:
    content = content.replace(old2, new2, 1)

open(path, 'w').write(content)
print('done')
