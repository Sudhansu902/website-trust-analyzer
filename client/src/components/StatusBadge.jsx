const statusClassMap = {
  Safe: "status-safe",
  Suspicious: "status-suspicious",
  Dangerous: "status-dangerous",
};

const StatusBadge = ({ status }) => {
  return (
    <span
      className={`inline-flex rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] ${
        statusClassMap[status] || "status-suspicious"
      }`}
    >
      {status}
    </span>
  );
};

export default StatusBadge;

