import { motion } from "framer-motion";

export default function Experience() {
  return (
    <div className="mb-10">
      <h2 className="text-xl font-semibold mb-4">Experience</h2>

      <div className="space-y-4">

        {/* Commercial Process Officer */}
        <motion.div
          whileHover={{ scale: 1.01 }}
          className="bg-card p-4 rounded-xl border border-white/10"
        >
          <div className="flex justify-between items-start">
            <h3 className="font-semibold">Commercial Process Officer</h3>
            <span className="text-xs text-muted">Aug 2025 – Jan 2026</span>
          </div>

          <p className="text-sm text-accent mt-1">
            PT HM Sampoerna Tbk • Surabaya, Indonesia
          </p>

          <p className="text-sm mt-3 text-muted">
            Automated reporting workflows, built Power BI dashboards,
            analyzed sales performance, and supported commercial operations.
          </p>
        </motion.div>

        {/* Data Analyst */}
        <motion.div
          whileHover={{ scale: 1.01 }}
          className="bg-card p-4 rounded-xl border border-white/10"
        >
          <div className="flex justify-between items-start">
            <h3 className="font-semibold">Data Analyst (Freelance)</h3>
            <span className="text-xs text-muted">2024</span>
          </div>

          <p className="text-sm text-accent mt-1">
            Universitas Islam Indonesia • Yogyakarta, Indonesia
          </p>

          <p className="text-sm mt-3 text-muted">
            Built marketing dashboards and performance tracking systems using Power BI and Excel.
          </p>
        </motion.div>

        {/* Graphic Designer */}
        <motion.div
          whileHover={{ scale: 1.01 }}
          className="bg-card p-4 rounded-xl border border-white/10"
        >
          <div className="flex justify-between items-start">
            <h3 className="font-semibold">Graphic Designer</h3>
            <span className="text-xs text-muted">May 2020 – Aug 2025</span>
          </div>

          <p className="text-sm text-accent mt-1">
            Universitas Islam Indonesia • Yogyakarta, Indonesia
          </p>

          <p className="text-sm mt-3 text-muted">
            Designed 500+ social media assets, posters, banners, and branding materials
            for university events and organizations, ensuring visual consistency and engagement growth.
          </p>
        </motion.div>

      </div>
    </div>
  );
}