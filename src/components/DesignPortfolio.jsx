import { motion } from "framer-motion";
import { SplinePointer } from "lucide-react";

const designs = [
  {
    name: "Social Media Campaign Designs",
    // desc: "Instagram, Facebook, and X content for university events and campaigns.",
    link: "https://drive.google.com/drive/folders/19zYozPyFNLGnufL42xMAN9ttFV85cMwh?usp=sharing",
  },
  {
    name: "Event Posters & Banners",
    // desc: "Visual assets for university events and student organizations.",
    link: "https://drive.google.com/drive/folders/1K8uVXsIhFC1eXuXyN_YrGLFIBBWVRBer?usp=drive_link",
  },
  {
    name: "Brand Identity Design",
    // desc: "Logos, visual guidelines, and branding materials.",
    link: "https://drive.google.com/drive/folders/1ExnZxLAZbSq3i-3s4UdsdW4XkfVLwKHx?usp=drive_link",
  },
];

export default function GraphicDesign() {
  return (
    <div id="graphic-design" className="mt-12">
      <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
        <SplinePointer size={18} />
        Graphic Design Portfolio
      </h2>

      <div className="grid md:grid-cols-3 gap-4">
        {designs.map((d, i) => (
          <motion.a
            key={i}
            href={d.link}
            target="_blank"
            rel="noreferrer"
            whileHover={{ y: -5 }}
            className="bg-card p-4 rounded-xl border border-white/10"
          >
            <h3 className="font-semibold">{d.name}</h3>
            <p className="text-muted text-sm mt-2">{d.desc}</p>
            <p className="text-muted text-sm mt-3">View designs →</p>
          </motion.a>
        ))}
      </div>
    </div>
  );
}