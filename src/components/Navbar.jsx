import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar({ onCtaClick }) {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setOpen(false)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const NavLink = ({ children, href }) => (
    <a
      href={href}
      className="text-slate-200 hover:text-white/90 transition-colors"
      onClick={() => setOpen(false)}
    >
      {children}
    </a>
  )

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 flex items-center justify-between gap-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl px-5 py-3">
          <div className="flex items-center gap-3">
            <div className="size-8 rounded-lg bg-gradient-to-br from-cyan-400 to-violet-500" />
            <span className="text-white font-semibold tracking-tight">Neurofit</span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <NavLink href="#features">Features</NavLink>
            <NavLink href="#programs">Programs</NavLink>
            <NavLink href="#coaches">Coaches</NavLink>
            <NavLink href="#faq">FAQ</NavLink>
          </nav>

          <button
            onClick={onCtaClick}
            className="hidden md:inline-flex group relative overflow-hidden rounded-xl border border-cyan-300/20 bg-gradient-to-br from-cyan-500/20 to-violet-500/20 px-4 py-2 text-sm font-semibold text-white backdrop-blur transition hover:scale-[1.02]"
          >
            <span className="relative z-10">Join the Beta</span>
            <span className="pointer-events-none absolute inset-0 bg-gradient-to-r from-cyan-500/30 to-violet-500/30 opacity-0 transition group-hover:opacity-100" />
          </button>

          <button className="md:hidden text-white" onClick={() => setOpen((o) => !o)}>
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mt-3 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl px-5 py-4 flex flex-col gap-4">
            <NavLink href="#features">Features</NavLink>
            <NavLink href="#programs">Programs</NavLink>
            <NavLink href="#coaches">Coaches</NavLink>
            <NavLink href="#faq">FAQ</NavLink>
            <button
              onClick={onCtaClick}
              className="mt-2 inline-flex rounded-xl border border-cyan-300/20 bg-gradient-to-br from-cyan-500/20 to-violet-500/20 px-4 py-2 text-sm font-semibold text-white backdrop-blur"
            >
              Join the Beta
            </button>
          </div>
        </div>
      )}
    </header>
  )
}
