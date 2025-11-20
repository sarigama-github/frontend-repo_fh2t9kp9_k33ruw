import { motion } from 'framer-motion'

const coaches = [
  {
    name: 'Ava Kim, DPT',
    title: 'Movement Scientist',
    blurb: 'Breath-first mechanics and injury prevention.',
  },
  {
    name: 'Rafi Ortega, CSCS',
    title: 'Performance Coach',
    blurb: 'Strength cycles optimized for sustainable gains.',
  },
  {
    name: 'Mina Patel, RYT',
    title: 'Mobility Specialist',
    blurb: 'Active range and mindful flow for daily longevity.',
  },
]

export default function Coaches() {
  return (
    <section id="coaches" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-3xl sm:text-4xl font-bold text-white text-center"
        >
          Coaches who blend science and art
        </motion.h2>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {coaches.map((c, i) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-6"
            >
              <div className="relative h-44 w-full overflow-hidden rounded-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-violet-500/20" />
                <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_30%_30%,rgba(255,255,255,0.08),transparent)]" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 bg-black/20" />
              </div>
              <div className="mt-5">
                <h3 className="text-white font-semibold">{c.name}</h3>
                <p className="text-sm text-slate-300/80">{c.title}</p>
                <p className="mt-2 text-sm text-slate-300/80">{c.blurb}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
