import { motion } from "framer-motion";

const projects = [
  {
    name: "COVID-19 Spatial Analysis",
    link: "https://covid-19-data-visualizer.streamlit.app",
  },
  {
    name: "NIK OCR Extractor",
    link: "https://doc-ocr.streamlit.app",
  },
  {
    name: "Currency Classifier",
    link: "https://idr-currency-classification.streamlit.app",
  },
];

export default function Projects() {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Projects</h2>

      <div className="grid md:grid-cols-3 gap-4">
        {projects.map((p, i) => (
          <motion.a
            key={i}
            href={p.link}
            whileHover={{ y: -5 }}
            className="bg-card p-4 rounded-xl border border-white/10"
          >
            <h3 className="font-semibold">{p.name}</h3>
            <p className="text-muted text-sm mt-2">View project →</p>
          </motion.a>
        ))}
      </div>
    </div>
  );
}