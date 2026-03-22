import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative overflow-hidden px-6 pb-10 pt-14 md:pb-16 md:pt-24">
      <div className="glow-orb absolute left-10 top-8 h-40 w-40 rounded-full bg-violet-500/25" />
      <div className="glow-orb absolute right-8 top-0 h-56 w-56 rounded-full bg-sky-400/20" />
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <div className="inline-flex rounded-full border border-violet-400/20 bg-violet-400/10 px-4 py-2 text-xs uppercase tracking-[0.24em] text-violet-200">
            Threat-aware URL screening
          </div>
          <h1 className="max-w-3xl text-4xl font-semibold leading-tight text-white md:text-6xl">
            Evaluate website credibility with a portfolio-grade trust dashboard.
          </h1>
          <p className="max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
            Drop in any website URL and get a fast trust score, risk status, and detailed signals
            through a refined dark interface designed for modern software products.
          </p>
          <div className="flex flex-wrap gap-3 text-sm text-slate-300">
            <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">
              HTTPS checks
            </span>
            <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">
              Suspicious keyword detection
            </span>
            <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">
              Safe Browsing ready
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="glass-panel rounded-[2rem] p-6"
        >
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Live Signals</p>
            <div className="rounded-3xl border border-emerald-400/20 bg-emerald-400/10 p-4">
              <p className="text-xs uppercase tracking-[0.22em] text-emerald-200">Safe signal</p>
              <p className="mt-2 text-sm text-slate-100">HTTPS and a clean domain pattern boost trust.</p>
            </div>
            <div className="rounded-3xl border border-amber-400/20 bg-amber-400/10 p-4">
              <p className="text-xs uppercase tracking-[0.22em] text-amber-200">Watch signal</p>
              <p className="mt-2 text-sm text-slate-100">
                Long URLs and banking keywords often deserve manual review.
              </p>
            </div>
            <div className="rounded-3xl border border-rose-400/20 bg-rose-400/10 p-4">
              <p className="text-xs uppercase tracking-[0.22em] text-rose-200">Risk signal</p>
              <p className="mt-2 text-sm text-slate-100">
                IP-based hosts and flagged destinations sharply reduce trust.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

