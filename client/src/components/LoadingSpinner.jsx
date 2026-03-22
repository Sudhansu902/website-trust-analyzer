import { motion } from "framer-motion";

const LoadingSpinner = () => {
  return (
    <div className="flex items-center gap-3 text-sm text-slate-300">
      <motion.span
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
        className="block h-5 w-5 rounded-full border-2 border-cyan-300/30 border-t-cyan-300"
      />
      <span>Scanning trust signals...</span>
    </div>
  );
};

export default LoadingSpinner;

