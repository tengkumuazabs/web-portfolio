import { motion } from "framer-motion";

export default function Hero() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="mb-10"
    >
      <h1 className="text-4xl font-bold">
        Tengku Muaz Abdussalam
      </h1>

      <p className="text-muted mt-2">
        Data Analyst | FMCG Commercial Analytics | Power BI & Python Automation
      </p>

      <div className="mt-4 inline-block px-3 py-1 bg-card rounded-full text-sm text-accent">
        Yogyakarta, Indonesia
      </div>
    </motion.div>
  );
}