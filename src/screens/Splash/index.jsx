export default function Splash() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-blue-950">
      <div className="font-display text-3xl font-semibold text-slate-100 animate-fadeInUp">
        Lingo<span className="text-amber-400">Route</span>
      </div>
      <div className="mt-3 text-sm text-slate-400 font-mono animate-pulseSoft">
        Chargement...
      </div>
    </div>
  )
}
