import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function Summary() {
  return (
    <div className="mb-10" id="summary">

      {/* Heading with icon */}
      <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
        <Sparkles size={18} />
        Summary
      </h2>

      <motion.div
        whileHover={{ scale: 1.01 }}
        className="bg-card p-4 rounded-xl border border-white/10"
      >
        <p className="text-sm text-muted">
          Data Analyst with experience in FMCG commercial operations, specializing in sales analytics, dashboard development, and reporting automation using Power BI, Excel, and Python. Proven track record in collecting, cleaning, and analyzing large-scale operational data to generate actionable insights and support business decision-making. Proficient in SQL and advanced Excel for data processing, with strong expertise in building interactive dashboards and improving reporting efficiency. Experienced in analyzing sales performance, customer behavior, and distribution data, with a detail-oriented approach to data validation and visualization. Combines analytical expertise with graphic design skills to create clear, impactful, and visually compelling data presentations.
        </p>
      </motion.div>
    </div>
  );
}