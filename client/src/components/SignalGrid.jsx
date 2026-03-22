import { motion } from "framer-motion";

const items = [
  {
    title: "HTTPS Transport",
    description: "Detects whether the submitted domain uses encrypted transport.",
  },
  {
    title: "Pattern Heuristics",
    description: "Flags risky keywords, unusual characters, and suspicious domain depth.",
  },
  {
    title: "Optional Reputation",
    description: "Supports Google Safe Browsing with environment-based API key setup.",
  },
];

const SignalGrid = () => {
  return (
    <section id="signals" className="px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8">
          <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Signals</p>
          <h2 className="mt-3 text-3xl font-semibold text-white">Analysis layers built for clarity.</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {items.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="glass-panel rounded-3xl p-6 transition hover:-translate-y-1 hover:border-cyan-300/20"
            >
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-300/10 text-cyan-200">
                0{index + 1}
              </div>
              <h3 className="text-lg font-semibold text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">{item.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SignalGrid;

