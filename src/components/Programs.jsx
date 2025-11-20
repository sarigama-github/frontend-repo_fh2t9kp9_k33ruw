import { motion } from 'framer-motion'

const programs = [
  {
    name: 'Neuro Strength',
    desc: 'Adaptive resistance cycles for clean progressive overload.',
    chips: ['4 days', 'Gym', 'Power + Hypertrophy']
  },
  {
    name: 'Mobility Lab',
    desc: 'Daily flows to restore range and reduce stiffness.',
    chips: ['10–20 min', 'Home', 'Low impact']
  },
  {
    name: 'Zen Cardio',
    desc: 'Zone 2 and intervals with breath pacing and posture cues.',
    chips: ['3 days', 'Anywhere', 'Endurance']
  }
]

export default function Programs() {
  return (
    <section id="programs" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-3xl sm:text-4xl font-bold text-white text-center"
        >
          Programs that evolve with you
        </motion.h2>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {programs.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.03] p-6"
            >
              <div className="absolute -right-10 -top-10 size-40 rounded-full bg-gradient-to-br from-cyan-500/20 to-violet-500/20 blur-2xl group-hover:blur-3xl transition" />
              <h3 className="text-white font-semibold mb-2">{p.name}</h3>
              <p className="text-slate-300/80 text-sm mb-4">{p.desc}</p>
              <div className="flex flex-wrap gap-2">
                {p.chips.map((c) => (
                  <span key={c} className="text-xs rounded-full border border-white/10 bg-white/5 px-2 py-1 text-slate-300/90">
                    {c}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
