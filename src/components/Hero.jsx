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
      className="mb-10 scroll-mt-24"
    >
      <h1 className="text-4xl font-bold">
        Tengku Muaz Abdussalam
      </h1>

      <p className="text-muted mt-2">
        Data Analyst • FMCG Commercial Analytics • Power BI, Python & Excel VBA Automation • Graphic Design Enthusiast
      </p>

      {/* Location */}
      <div className="mt-4">
        <div className="px-3 py-1 bg-card rounded-full text-sm text-accent flex items-center gap-2 w-fit">
          <MapPin size={18} />
          Sleman, Yogyakarta, Indonesia
        </div>

        {/* Buttons */}
        <div className="mt-3 flex flex-wrap items-center gap-2">

          <a
            href="mailto:tengkumuaz.abs@gmail.com"
            className="px-3 py-1 rounded-full text-sm flex items-center gap-2 bg-accent text-bg font-normal hover:bg-accent/80 transition-colors cursor-pointer shadow-sm"
          >
            <Mail size={18} />
            Email Me
          </a>

          <a
            href="https://linkedin.com/in/tengku-muaz-abdussalam"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1 rounded-full text-sm flex items-center gap-2 bg-accent text-bg font-normal hover:bg-accent/80 transition-colors cursor-pointer shadow-sm"
          >
            <UserRoundSearch size={18} />
            LinkedIn
          </a>

          <a
            href="https://drive.google.com/file/d/1tyar09aAalvsmWSlkuKXKo1aVTkVdAkB/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1 rounded-full text-sm flex items-center gap-2 bg-accent text-bg font-normal hover:bg-accent/80 transition-colors cursor-pointer shadow-sm"
          >
            <Eye size={18} />
            View My CV
          </a>

        </div>
      </div>

      {/* CV Download Link */}
      {/* <div className="mt-6">
        <a
          href="https://drive.google.com/file/d/1tyar09aAalvsmWSlkuKXKo1aVTkVdAkB/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 hover:bg-accent/20 text-accent rounded-lg border border-accent/30 hover:border-accent/50 transition-colors"
        >
          <Eye size={16} />
          View my CV
        </a>
      </div> */}
    </motion.div>
  );
}