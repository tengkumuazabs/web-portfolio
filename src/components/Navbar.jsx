import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      className="sticky top-0 z-50 backdrop-blur bg-background/70 py-4 mb-8"
    >
      <div className="flex justify-between items-center">

        <h1 className="font-semibold">Web Portfolio</h1>

        <div className="flex gap-6 text-sm text-muted">
          <a href="#hero" className="hover:text-white">Home</a>
          <a href="#summary" className="hover:text-white">Summary</a>
          <a href="#experience" className="hover:text-white">Experience</a>
          <a href="#skills" className="hover:text-white">Skills</a>
          <a href="#projects" className="hover:text-white">Projects</a>
        </div>

      </div>
    </motion.nav>
  );
}