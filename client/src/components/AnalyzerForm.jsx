import { motion } from "framer-motion";
import LoadingSpinner from "./LoadingSpinner";

const AnalyzerForm = ({ url, setUrl, onSubmit, loading, error }) => {
  return (
    <motion.section
      id="analyzer"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      className="glass-panel rounded-[2rem] p-6 md:p-8"
    >
      <div className="mb-6 space-y-3">
        <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Analyzer</p>
        <h2 className="text-2xl font-semibold text-white md:text-3xl">
          Scan a URL and inspect trust signals instantly.
        </h2>
        <p className="max-w-2xl text-sm leading-7 text-slate-300">
          Enter a website URL to measure transport security, suspicious patterns, and risk
          indicators through the backend analysis engine.
        </p>
      </div>

      <form className="space-y-4" onSubmit={onSubmit}>
        <div className="flex flex-col gap-3 md:flex-row">
          <input
            type="text"
            value={url}
            onChange={(event) => setUrl(event.target.value)}
            placeholder="Enter a website URL, e.g. https://example.com"
            className="min-h-14 flex-1 rounded-2xl border border-white/10 bg-slate-950/70 px-5 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300/50 focus:ring-2 focus:ring-cyan-300/20"
          />
          <button
            type="submit"
            disabled={loading}
            className="min-h-14 rounded-2xl bg-gradient-to-r from-violet-500 to-sky-500 px-6 text-sm font-semibold text-white transition hover:scale-[1.01] hover:shadow-glow disabled:cursor-not-allowed disabled:opacity-70"
          >
            {loading ? "Analyzing..." : "Analyze Website"}
          </button>
        </div>

        {loading && <LoadingSpinner />}
        {error ? <p className="text-sm text-rose-300">{error}</p> : null}
      </form>
    </motion.section>
  );
};

export default AnalyzerForm;

