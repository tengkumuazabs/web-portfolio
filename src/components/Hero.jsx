import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { Mail } from "lucide-react";
import { UserRoundSearch } from "lucide-react";
import { Eye } from "lucide-react";


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
        Data Analyst • FMCG Commercial Analytics • Power BI, Python & Excel VBA Automation • Graphic Design Enthusiast
      </p>

      {/* Location + Contacts (inline) */}
      <div className="mt-4 flex flex-wrap items-center gap-2">

        <div className="px-3 py-1 bg-card rounded-full text-sm text-accent flex items-center gap-2">
          <MapPin size={18} />
          Sleman, Yogyakarta, Indonesia
        </div>

        <a
          href="mailto:tengkumuaz.abs@gmail.com"
          className="px-3 py-1 bg-card rounded-full text-sm text-accent flex items-center gap-2 hover:bg-white/5 transition-colors cursor-pointer"
        >
          <Mail size={18} />
          tengkumuaz.abs@gmail.com
        </a>

        <a
          href="https://linkedin.com/in/tengku-muaz-abdussalam"
          target="_blank"
          rel="noopener noreferrer"
          className="px-3 py-1 bg-card rounded-full text-sm text-accent flex items-center gap-2 hover:bg-white/5 transition-colors cursor-pointer"
        >
          <UserRoundSearch size={18} />
          linkedin.com/in/tengku-muaz-abdussalam
        </a>

      </div>

      {/* CV Download Link */}
      <div className="mt-6">
        <a
          href="https://drive.google.com/file/d/1tyar09aAalvsmWSlkuKXKo1aVTkVdAkB/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 hover:bg-accent/20 text-accent rounded-lg border border-accent/30 hover:border-accent/50 transition-colors"
        >
          <Eye size={16} />
          View my CV
        </a>
      </div>
    </motion.div>
  );
}