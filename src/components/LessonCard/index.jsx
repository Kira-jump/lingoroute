import AppIcon from '../../utils/icons'

export default function LessonNode({ lesson, status, onClick, isBoss, offset = 0 }) {
  const base = 'w-16 h-16 rounded-full flex items-center justify-center border-2 transition active:scale-95 shadow-lg'

  const styles = {
    done: 'bg-gradient-to-br from-emerald-400 to-emerald-600 border-emerald-300 shadow-emerald-500/30',
    unlocked: isBoss
      ? 'bg-gradient-to-br from-amber-400 to-amber-600 border-amber-300 shadow-amber-400/40 animate-pulseSoft'
      : 'bg-gradient-to-br from-blue-700 to-blue-800 border-amber-400/60 shadow-amber-400/10',
    locked: 'bg-blue-900/40 border-blue-400/10 opacity-40'
  }

  const iconColor = status === 'locked' ? 'text-slate-500' : 'text-white'

  return (
    <button
      className={`${base} ${styles[status]}`}
      style={{ transform: `translateX(${offset}px)` }}
      onClick={status !== 'locked' ? onClick : undefined}
      disabled={status === 'locked'}
    >
      {status === 'done' && <AppIcon name="CheckCircle2" className="w-7 h-7 text-white" />}
      {status === 'locked' && <AppIcon name="Lock" className="w-6 h-6 text-slate-500" />}
      {status === 'unlocked' && <AppIcon name={lesson.icon} className={`w-7 h-7 ${iconColor}`} />}
    </button>
  )
}
