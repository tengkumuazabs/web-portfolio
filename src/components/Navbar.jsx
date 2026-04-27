import { useState } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      className="sticky top-0 z-50 backdrop-blur bg-background/70 py-4 mb-8"
    >
      <div className="flex justify-between items-center">

        {/* Logo */}
        <h1 className="font-semibold">Web Portfolio</h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-3">

          {/* Normal links */}
          <a href="#hero" className="text-sm text-muted hover:text-white">
            Home
          </a>

          <a href="#summary" className="text-sm text-muted hover:text-white">
            Summary
          </a>

          <a href="#experience" className="text-sm text-muted hover:text-white">
            Experience
          </a>

          <a href="#skills" className="text-sm text-muted hover:text-white">
            Skills
          </a>

          <a href="#projects" className="text-sm text-muted hover:text-white">
            Projects
          </a>

          <a href="#graphic-design" className="text-sm text-muted hover:text-white">
            Design Portfolio
          </a>

          {/* Highlighted pills
          <a
            href="#projects"
            className="px-3 py-1 rounded-full text-sm flex items-center gap-2 bg-accent text-bg font-normal hover:bg-accent/80 transition-colors cursor-pointer shadow-sm"
          >
            Projects
          </a>

          <a
            href="#graphic-design"
            className="px-3 py-1 rounded-full text-sm flex items-center gap-2 bg-accent text-bg font-normal hover:bg-accent/80 transition-colors cursor-pointer shadow-sm"
          >
            Design Portfolio
          </a> */}

        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden text-sm text-muted"
          onClick={() => setOpen(!open)}
        >
          {open ? "Close" : "Menu"}
        </button>

      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden mt-4 flex flex-col gap-3 text-sm text-muted">
          <a href="#hero" onClick={() => setOpen(false)}>Home</a>
          <a href="#summary" onClick={() => setOpen(false)}>Summary</a>
          <a href="#experience" onClick={() => setOpen(false)}>Experience</a>
          <a href="#skills" onClick={() => setOpen(false)}>Skills</a>
          <a href="#projects" onClick={() => setOpen(false)}>Projects</a>
          <a href="#graphic-design" onClick={() => setOpen(false)}>Design Portfolio</a>
        </div>
      )}
    </motion.nav>
  );
}