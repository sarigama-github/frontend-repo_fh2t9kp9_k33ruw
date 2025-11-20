import { motion } from 'framer-motion'

const faqs = [
  {
    q: 'Is there a free plan?',
    a: 'Yes — the beta is free. We’ll share pricing once we graduate from beta.'
  },
  {
    q: 'Do I need special equipment?',
    a: 'No. Most sessions can be done at home with bodyweight or basic bands. Gym programs are optional.'
  },
  {
    q: 'How is Neurofit different?',
    a: 'We merge neuroscience-based cues with adaptive programming and a calm, minimal interface.'
  },
  {
    q: 'Can I cancel anytime?',
    a: 'Absolutely. You can switch plans or cancel with a click when subscriptions launch.'
  }
]

export default function FAQ() {
  return (
    <section id="faq" className="py-24">
      <div className="mx-auto max-w-3xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-3xl sm:text-4xl font-bold text-white text-center"
        >
          Answers, quick and clear
        </motion.h2>

        <div className="mt-10 divide-y divide-white/10 rounded-2xl border border-white/10 bg-white/5">
          {faqs.map((f, i) => (
            <details key={f.q} className="group px-6 py-4 open:bg-white/5">
              <summary className="cursor-pointer list-none select-none text-white/90 hover:text-white transition flex items-center justify-between">
                <span>{f.q}</span>
                <span className="ml-4 text-slate-400 text-xs">{i + 1}</span>
              </summary>
              <motion.p
                initial={{ opacity: 0, y: 6 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mt-2 text-slate-300/80"
              >
                {f.a}
              </motion.p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
