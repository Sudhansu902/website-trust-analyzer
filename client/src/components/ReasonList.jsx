import { motion } from "framer-motion";

const ReasonList = ({ reasons }) => {
  return (
    <ul className="space-y-3">
      {reasons.map((reason, index) => (
        <motion.li
          key={reason}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.08 }}
          className="flex gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-300"
        >
          <span className="mt-1 h-2 w-2 rounded-full bg-cyan-300" />
          <span>{reason}</span>
        </motion.li>
      ))}
    </ul>
  );
};

export default ReasonList;

