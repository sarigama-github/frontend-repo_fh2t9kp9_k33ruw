import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

export default function Hero({ onCtaClick }) {
  return (
    <section className="relative min-h-[90svh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VyGeZv58yuk8j7Yy/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* gradient overlay */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_0%,rgba(14,165,233,0.35),transparent),radial-gradient(40%_40%_at_80%_50%,rgba(168,85,247,0.25),transparent)]" />
      {/* fade bottom */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-slate-900" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-36 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-3xl"
        >
          <motion.span
            whileHover={{ scale: 1.04 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-1 text-xs font-medium text-white/90 backdrop-blur"
          >
            Neurofit • Future fitness, today
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="mt-5 text-5xl sm:text-6xl leading-tight font-extrabold tracking-tight text-white"
          >
            Train your body like your brain: adaptive, precise, effortless
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mt-6 text-lg text-slate-200/80"
          >
            Neurofit blends neuroscience and movement to build programs that learn with you. A minimal, futuristic way to get strong and stay consistent.
          </motion.p>

          <motion.div className="mt-10 flex flex-col sm:flex-row gap-4">
            <motion.button
              whileTap={{ scale: 0.96 }}
              whileHover={{ scale: 1.02 }}
              onClick={onCtaClick}
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-xl border border-cyan-300/20 bg-gradient-to-r from-cyan-500/25 to-violet-500/25 px-6 py-3 font-semibold text-white"
            >
              <span className="relative z-10">Start free – Join the beta</span>
              <span className="pointer-events-none absolute inset-0 bg-gradient-to-r from-cyan-500/30 to-violet-500/30 opacity-0 transition group-hover:opacity-100" />
            </motion.button>

            <motion.a
              whileTap={{ scale: 0.96 }}
              whileHover={{ scale: 1.02 }}
              href="#features"
              className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-6 py-3 font-semibold text-white/90 backdrop-blur hover:text-white"
            >
              Explore features
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
