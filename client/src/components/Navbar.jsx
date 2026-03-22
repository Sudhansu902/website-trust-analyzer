import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="sticky top-0 z-20 border-b border-white/10 bg-slate-950/60 backdrop-blur-xl"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="text-sm font-semibold tracking-[0.24em] text-white">
          TRUST<span className="text-cyan-300">.SCAN</span>
        </a>
        <nav className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
          <a className="transition hover:text-white" href="#analyzer">
            Analyzer
          </a>
          <a className="transition hover:text-white" href="#signals">
            Signals
          </a>
          <a className="transition hover:text-white" href="#footer">
            Deploy
          </a>
        </nav>
      </div>
    </motion.header>
  );
};

export default Navbar;

