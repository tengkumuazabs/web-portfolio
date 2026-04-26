import { motion } from "framer-motion";

export default function Hero() {
  return (
    <motion.div
      id="hero"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="mb-10"
    >
      <h1 className="text-4xl font-bold">
        Tengku Muaz Abdussalam
      </h1>

      <p className="text-muted mt-2">
        Data Analyst | FMCG Commercial Analytics | Power BI, Python & Excel VBA Automation
      </p>

      {/* Location + Contacts (inline) */}
      <div className="mt-4 flex flex-wrap items-center gap-2">

        <div className="px-3 py-1 bg-card rounded-full text-sm text-accent">
          <b>Yogyakarta, Indonesia</b>
        </div>

        <div className="px-3 py-1 bg-card rounded-full text-sm text-accent">
          tengkumuaz.abs@gmail.com
        </div>

        <div className="px-3 py-1 bg-card rounded-full text-sm text-accent">
          linkedin.com/in/tengku-muaz-abdussalam
        </div>

      </div>
    </motion.div>
  );
}