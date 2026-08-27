import { NavLink } from 'react-router-dom'
import { Home as HomeIcon, BookOpen, Trophy, CircleUserRound } from 'lucide-react'

const TABS = [
  { to: '/home', Icon: HomeIcon },
  { to: '/books', Icon: BookOpen },
  { to: '/leaderboard', Icon: Trophy },
  { to: '/profile', Icon: CircleUserRound }
]

export default function BottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-20">
      <div className="max-w-md mx-auto px-5 pb-[max(12px,env(safe-area-inset-bottom))] pt-2">
        <div className="glass-card flex justify-around items-center py-2.5">
          {TABS.map(({ to, Icon }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `p-3 rounded-xl transition ${
                  isActive ? 'bg-amber-400/20 text-amber-400 scale-110' : 'text-slate-400'
                }`
              }
            >
              <Icon className="w-6 h-6" />
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  )
}
