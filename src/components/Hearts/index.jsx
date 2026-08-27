import { useEffect, useRef, useState } from 'react'
import { Heart } from 'lucide-react'

export default function Hearts({ count, max = 5 }) {
  const prevCount = useRef(count)
  const [shakeIndex, setShakeIndex] = useState(null)

  useEffect(() => {
    if (count < prevCount.current) {
      setShakeIndex(count)
      const t = setTimeout(() => setShakeIndex(null), 400)
      prevCount.current = count
      return () => clearTimeout(t)
    }
    prevCount.current = count
  }, [count])

  return (
    <div className="flex gap-1">
      {Array.from({ length: max }).map((_, i) => (
        <Heart
          key={i}
          className={`w-5 h-5 transition-colors ${
            i < count ? 'text-red-500 fill-red-500' : 'text-blue-800 fill-blue-800'
          } ${i === shakeIndex ? 'animate-shake' : ''}`}
        />
      ))}
    </div>
  )
}
