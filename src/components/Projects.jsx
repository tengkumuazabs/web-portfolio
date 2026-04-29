import { motion } from "framer-motion";
import { Terminal } from "lucide-react";

const projects = [
  {
    name: "COVID-19 Spatial Analysis",
    link: "https://covid-19-data-visualizer.streamlit.app",
  },
  {
    name: "Sentiment Analysis of Temple Reviews",
    link: "https://github.com/tengkumuazabs/temple-review-sentiment",
  },
  {
    name: "Currency Classifier",
    link: "https://idr-currency-classification.streamlit.app",
  },
];

export default function Projects() {
  return (
    <div id="projects" className="mb-10 scroll-mt-24">
      <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
        <Terminal size={18} />
        Projects
      </h2>

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