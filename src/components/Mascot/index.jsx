// Mascotte hamster en SVG — variant: 'dad' | 'mom' | 'daughter' | 'son'
// mood: 'idle' | 'happy' | 'sad' | 'excited'
const PALETTES = {
  dad:      { fur: '#e8b26b', ear: '#d99a5b', cheek: '#f0c586', muzzle: '#faead0' },
  son:      { fur: '#e8b26b', ear: '#d99a5b', cheek: '#f0c586', muzzle: '#faead0' },
  mom:      { fur: '#f2b8c6', ear: '#e89aad', cheek: '#f7cdd9', muzzle: '#fff0f3' },
  daughter: { fur: '#f2b8c6', ear: '#e89aad', cheek: '#f7cdd9', muzzle: '#fff0f3' }
}

export default function Mascot({ mood = 'idle', variant = 'dad', size = 72, className = '' }) {
  const p = PALETTES[variant] || PALETTES.dad
  const isFemale = variant === 'mom' || variant === 'daughter'

  const wrapperAnim = {
    idle: 'animate-mascotIdle',
    happy: 'animate-mascotWiggle',
    sad: 'animate-mascotSlump',
    excited: 'animate-mascotJump'
  }[mood]

  const eyes = mood === 'sad' ? (
    <>
      <path d="M38 44 Q42 40 46 44" stroke="#2b1a12" strokeWidth="3" strokeLinecap="round" fill="none" />
      <path d="M54 44 Q58 40 62 44" stroke="#2b1a12" strokeWidth="3" strokeLinecap="round" fill="none" />
    </>
  ) : (
    <>
      <circle cx="42" cy="44" r="4" fill="#2b1a12" />
      <circle cx="58" cy="44" r="4" fill="#2b1a12" />
    </>
  )

  const mouth = {
    idle: <path d="M44 56 Q50 60 56 56" stroke="#2b1a12" strokeWidth="2.5" strokeLinecap="round" fill="none" />,
    happy: <path d="M40 55 Q50 66 60 55" stroke="#2b1a12" strokeWidth="2.5" strokeLinecap="round" fill="none" />,
    sad: <path d="M42 60 Q50 53 58 60" stroke="#2b1a12" strokeWidth="2.5" strokeLinecap="round" fill="none" />,
    excited: <path d="M38 54 Q50 68 62 54" stroke="#2b1a12" strokeWidth="2.5" strokeLinecap="round" fill="none" />
  }[mood]

  const arms = {
    idle: (
      <>
        <ellipse cx="20" cy="88" rx="7" ry="14" fill={p.ear} transform="rotate(-15 20 88)" />
        <ellipse cx="80" cy="88" rx="7" ry="14" fill={p.ear} transform="rotate(15 80 88)" />
      </>
    ),
    happy: (
      <>
        <ellipse cx="18" cy="82" rx="7" ry="14" fill={p.ear} transform="rotate(-35 18 82)" />
        <ellipse cx="82" cy="82" rx="7" ry="14" fill={p.ear} transform="rotate(35 82 82)" />
      </>
    ),
    sad: (
      <>
        <ellipse cx="42" cy="92" rx="18" ry="8" fill={p.ear} transform="rotate(10 42 92)" />
        <ellipse cx="58" cy="92" rx="18" ry="8" fill={p.ear} transform="rotate(-10 58 92)" />
      </>
    ),
    excited: (
      <>
        <ellipse cx="14" cy="70" rx="7" ry="16" fill={p.ear} transform="rotate(-55 14 70)" />
        <ellipse cx="86" cy="70" rx="7" ry="16" fill={p.ear} transform="rotate(55 86 70)" />
      </>
    )
  }[mood]

  return (
    <div className={`${wrapperAnim} ${className}`} style={{ width: size, height: size }}>
      <svg viewBox="0 0 100 110" width={size} height={size}>
        <ellipse cx="38" cy="102" rx="9" ry="7" fill={p.ear} />
        <ellipse cx="62" cy="102" rx="9" ry="7" fill={p.ear} />

        <ellipse cx="50" cy="86" rx="24" ry="20" fill={p.fur} />

        {arms}

        <circle cx="26" cy="24" r="14" fill={p.ear} />
        <circle cx="74" cy="24" r="14" fill={p.ear} />
        <circle cx="26" cy="24" r="8" fill={p.cheek} />
        <circle cx="74" cy="24" r="8" fill={p.cheek} />

        <circle cx="50" cy="52" r="38" fill={p.fur} />

        <ellipse cx="26" cy="58" rx="12" ry="10" fill={p.cheek} />
        <ellipse cx="74" cy="58" rx="12" ry="10" fill={p.cheek} />

        <ellipse cx="50" cy="62" rx="20" ry="16" fill={p.muzzle} />

        {eyes}
        <ellipse cx="50" cy="52" rx="3" ry="2.5" fill="#8a5a3a" />
        {mouth}

        {/* Nœud rose pour les filles */}
        {isFemale && (
          <g transform="translate(66 14) rotate(15)">
            <path d="M0 0 L-9 -6 L-9 6 Z" fill="#e05a8a" />
            <path d="M0 0 L9 -6 L9 6 Z" fill="#e05a8a" />
            <circle cx="0" cy="0" r="3.5" fill="#c93f70" />
          </g>
        )}

        {mood === 'excited' && (
          <>
            <path d="M8 16 l3 6 l6 3 l-6 3 l-3 6 l-3 -6 l-6 -3 l6 -3 z" fill="#fbbf24" />
            <path d="M90 26 l2 4 l4 2 l-4 2 l-2 4 l-2 -4 l-4 -2 l4 -2 z" fill="#fbbf24" />
          </>
        )}
      </svg>
    </div>
  )
}
