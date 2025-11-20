import { useEffect, useRef, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Programs from './components/Programs'
import Coaches from './components/Coaches'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import Lenis from 'lenis'
import { motion } from 'framer-motion'

function App() {
  const [showModal, setShowModal] = useState(false)
  const ctaRef = useRef(null)

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.1,
      smoothWheel: true,
      smoothTouch: false,
      lerp: 0.1,
    })
    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    const onKey = (e) => {
      if (e.key === ' ' && !showModal) {
        e.preventDefault()
        document.querySelector('#features')?.scrollIntoView({ behavior: 'smooth' })
      }
    }
    window.addEventListener('keydown', onKey)
    return () => {
      window.removeEventListener('keydown', onKey)
    }
  }, [showModal])

  return (
    <div className="min-h-screen w-full bg-slate-950 text-white selection:bg-cyan-500/30 relative">
      {/* Dim layer to lower overall brightness if any embedded canvases are too bright */}
      <div className="pointer-events-none fixed inset-0 z-[1] bg-black/40" />

      {/* subtle color glows */}
      <div className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(1200px_600px_at_50%_-10%,rgba(56,189,248,0.08),transparent),radial-gradient(800px_400px_at_80%_30%,rgba(147,51,234,0.06),transparent)]" />

      <Navbar onCtaClick={() => setShowModal(true)} />

      <main className="relative z-10">
        <Hero onCtaClick={() => setShowModal(true)} />
        <Features />

        {/* Small in-between band to add rhythm down the page */}
        <section className="py-8">
          <div className="mx-auto max-w-5xl px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[0,1,2].map((i) => (
                <motion.div
                  key={i}
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 18 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.6, delay: i * 0.06 }}
                  className="h-28 rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur flex items-center justify-center text-slate-300/80"
                >
                  Smooth scroll by Lenis — section {i + 1}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <Programs />
        <Coaches />
        <FAQ />

        {/* CTA Section */}
        <section id="cta" className="py-24">
          <div className="mx-auto max-w-6xl px-6 text-center">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              className="text-3xl font-bold"
            >
              Ready to feel futuristic?
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-3 text-slate-300/80"
            >
              Join Neurofit beta and get early access to adaptive programs, minimal UI, and guided flows.
            </motion.p>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => setShowModal(true)}
              className="mt-8 inline-flex rounded-xl border border-cyan-300/20 bg-gradient-to-br from-cyan-500/25 to-violet-500/25 px-6 py-3 font-semibold"
            >
              Request invite
            </motion.button>
          </div>
        </section>
      </main>

      <Footer />

      {showModal && (
        <div className="fixed inset-0 z-[100] grid place-items-center p-6">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setShowModal(false)} />

          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.98 }}
            transition={{ duration: 0.25 }}
            className="relative z-10 w-full max-w-md rounded-2xl border border-white/10 bg-slate-900/90 p-6 text-left shadow-xl"
          >
            <h4 className="text-xl font-semibold">Join the Neurofit beta</h4>
            <p className="mt-2 text-sm text-slate-300/80">
              Enter your email and we’ll send an invite as soon as spots open. You’ll get early access updates and content.
            </p>

            <form
              onSubmit={(e) => {
                e.preventDefault()
                setShowModal(false)
                setTimeout(() => alert('Thanks! You\'re on the list for Neurofit beta.'), 150)
              }}
              className="mt-5 flex gap-2"
            >
              <input
                ref={ctaRef}
                type="email"
                required
                placeholder="you@neuro.fit"
                className="flex-1 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none placeholder:text-slate-400 focus:border-cyan-400/40"
              />
              <button className="rounded-xl border border-cyan-300/20 bg-gradient-to-br from-cyan-500/25 to-violet-500/25 px-5 py-3 text-sm font-semibold">
                Request
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </div>
  )
}

export default App
