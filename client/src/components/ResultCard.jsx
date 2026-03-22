import { motion } from "framer-motion";
import ReasonList from "./ReasonList";
import StatusBadge from "./StatusBadge";

const scoreRingClass = (score) => {
  if (score >= 75) {
    return "from-emerald-300 to-cyan-300";
  }

  if (score >= 45) {
    return "from-amber-300 to-orange-400";
  }

  return "from-rose-400 to-pink-400";
};

const ResultCard = ({ result }) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 28, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="glass-panel rounded-3xl p-6 md:p-8"
    >
      <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex items-center gap-5">
          <div
            className={`flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br ${scoreRingClass(
              result.score
            )} p-[1px] shadow-glow`}
          >
            <div className="flex h-full w-full items-center justify-center rounded-full bg-slate-950 text-2xl font-bold text-white">
              {result.score}
            </div>
          </div>
          <div className="space-y-3">
            <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Trust Score</p>
            <StatusBadge status={result.status} />
          </div>
        </div>
        <div className="max-w-xl">
          <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Analysis Summary</p>
          <p className="mt-3 text-sm leading-7 text-slate-300">
            The engine inspected transport security, URL complexity, suspicious keywords,
            destination patterns, and optional Safe Browsing data to estimate the likelihood of
            deceptive behavior.
          </p>
        </div>
      </div>

      <div className="mt-8">
        <p className="mb-4 text-sm uppercase tracking-[0.24em] text-slate-400">Reasons</p>
        <ReasonList reasons={result.reasons} />
      </div>
    </motion.section>
  );
};

export default ResultCard;

