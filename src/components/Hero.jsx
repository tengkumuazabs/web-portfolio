import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { Mail } from "lucide-react";
import { UserRoundSearch } from "lucide-react";


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

        <div className="px-3 py-1 bg-card rounded-full text-sm text-accent flex items-center gap-2">
          <MapPin size={18} />
          Yogyakarta, Indonesia
        </div>

        <div className="px-3 py-1 bg-card rounded-full text-sm text-accent flex items-center gap-2">
          <Mail size={18} />
          tengkumuaz.abs@gmail.com
        </div>

        <div className="px-3 py-1 bg-card rounded-full text-sm text-accent flex items-center gap-2">
          <UserRoundSearch size={18} />
          linkedin.com/in/tengku-muaz-abdussalam
        </div>

      </div>
    </motion.div>
  );
}