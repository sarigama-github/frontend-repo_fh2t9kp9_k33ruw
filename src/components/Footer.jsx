export default function Footer() {
  return (
    <footer className="py-12 border-t border-white/10">
      <div className="mx-auto max-w-6xl px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
        <p className="text-sm text-slate-400">© {new Date().getFullYear()} Neurofit. All rights reserved.</p>
        <div className="flex items-center gap-6 text-sm text-slate-400">
          <a href="#" className="hover:text-white">Privacy</a>
          <a href="#" className="hover:text-white">Terms</a>
          <a href="#" className="hover:text-white">Contact</a>
        </div>
      </div>
    </footer>
  )
}
