import { motion } from "framer-motion";
import { TrendingUp } from "lucide-react";

const kpis = [
  { label: "Years of Experience", value: "5+" },
  { label: "Dashboards Built", value: "5+" },
  { label: "Automation Scripts", value: "5+" },
  { label: "Design Assets", value: "1000+" },
  { label: "TOEFL Score", value: "587" },
];

export default function KPI() {
  return (
    <div className="mb-10 scroll-mt-24" id="summary">
      {/* Heading with icon */}
      <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
        <TrendingUp size={18} />
        Key Highlights
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {kpis.map((kpi, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="bg-card p-4 rounded-xl border border-white/10"
          >
            <p className="text-muted text-sm">{kpi.label}</p>
            <h2 className="text-2xl font-bold bg-gradient-to-r from-accent to-emerald-400 bg-clip-text text-transparent">
              {kpi.value}
            </h2>
          </motion.div>
        ))}
      </div>
    </div>
  );
}