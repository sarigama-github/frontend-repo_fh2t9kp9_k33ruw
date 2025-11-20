import { motion } from 'framer-motion'
import { Brain, LineChart, Sparkles, Activity } from 'lucide-react'

const items = [
  {
    icon: Brain,
    title: 'Neural adaption',
    desc: 'Programs adjust automatically to your recovery, mood, and progress.'
  },
  {
    icon: LineChart,
    title: 'Precision metrics',
    desc: 'Track tempo, volume, and intensity with clean, readable visuals.'
  },
  {
    icon: Activity,
    title: 'Mindful movement',
    desc: 'Breath-led cues and mobility flows keep you centered and safe.'
  },
  {
    icon: Sparkles,
    title: 'Minimal UI',
    desc: 'A calm, futuristic interface designed to stay out of your way.'
  }
]

export default function Features() {
  return (
    <section id="features" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-3xl sm:text-4xl font-bold text-white text-center"
        >
          Built for flow, powered by science
        </motion.h2>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ delay: i * 0.05 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur hover:bg-white/10 transition"
            >
              <div className="mb-4 inline-flex items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500/20 to-violet-500/20 p-3">
                <it.icon className="size-6 text-white" />
              </div>
              <h3 className="text-white font-semibold mb-2">{it.title}</h3>
              <p className="text-slate-300/80 text-sm leading-relaxed">{it.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
