import { motion } from "framer-motion";

const kpis = [
  { label: "Dashboards Built", value: "5+" },
  { label: "Automation Scripts", value: "5+" },
  { label: "Design Assets", value: "500+" },
  { label: "TOEFL Score", value: "587" },
];

export default function KPI() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
      {kpis.map((kpi, i) => (
        <motion.div
          key={i}
          whileHover={{ scale: 1.05 }}
          className="bg-card p-4 rounded-xl border border-white/10"
        >
          <p className="text-muted text-sm">{kpi.label}</p>
          <h2 className="text-2xl font-bold text-accent">{kpi.value}</h2>
        </motion.div>
      ))}
    </div>
  );
}