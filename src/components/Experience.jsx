import { motion } from "framer-motion";
import { UserStar  } from "lucide-react";


export default function Experience() {
  return (
    <div className="mb-10" id="experience" id="experience">
      {/* Heading with icon */}
      <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
        <UserStar  size={18} />
        Experience
      </h2>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-4 top-0 bottom-0 w-[2px] bg-white/10"></div>

        <div className="space-y-6">

          {/* Commercial Process Officer */}
          <div className="relative pl-12">
            {/* Dot */}
            <div className="absolute left-[10px] top-6 w-3 h-3 bg-accent rounded-full"></div>

            <motion.div
              whileHover={{ scale: 1.01 }}
              className="bg-card p-4 rounded-xl border border-white/10"
            >
              <div className="flex items-start gap-4">
                {/* Logo */}
                <img
                  src="/logos/sampoerna.png"
                  alt="Sampoerna"
                  className="w-10 h-10 object-contain rounded-md bg-white p-1"
                />

                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2">
                      <h3 className="font-semibold">Commercial Process Officer</h3>

                      <span className="px-2 py-0.5 bg-accent/20 text-accent text-xs font-medium rounded-full mt-1 sm:mt-0 w-fit">
                        Latest
                      </span>
                    </div>
                    <span className="text-xs text-muted">Aug 2025 – Jan 2026</span>
                  </div>

                  <p className="text-sm text-accent mt-1">
                    PT HM Sampoerna Tbk • Madiun, Indonesia
                  </p>

                  <ul className="list-disc ml-5 mt-3 text-sm text-muted space-y-1">
                    <li>Automated daily commercial reporting workflows to improve speed and accuracy</li>
                    <li>Developed interactive Power BI dashboards for wholesale sales monitoring</li>
                    <li>Analyzed sales performance by region and brand using historical data</li>
                    <li>Coordinated with sales and warehouse teams to ensure stock availability</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Data Analyst */}
          <div className="relative pl-12">
            <div className="absolute left-[10px] top-6 w-3 h-3 bg-accent rounded-full"></div>

            <motion.div
              whileHover={{ scale: 1.01 }}
              className="bg-card p-4 rounded-xl border border-white/10"
            >
              <div className="flex items-start gap-4">
                <img
                  src="/logos/uii.png"
                  alt="UII"
                  className="w-10 h-10 object-contain rounded-md bg-white p-1"
                />

                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <h3 className="font-semibold">Data Analyst (Project Based)</h3>
                    <span className="text-xs text-muted">2024</span>
                  </div>

                  <p className="text-sm text-accent mt-1">
                    Universitas Islam Indonesia • Sleman, Indonesia
                  </p>

                  <ul className="list-disc ml-5 mt-3 text-sm text-muted space-y-1">
                    <li>Built marketing dashboards using Power BI and Excel</li>
                    <li>Tracked campaign performance and translated data into insights</li>
                    <li>Delivered reports to support internal decision-making</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Graphic Designer */}
          <div className="relative pl-12">
            <div className="absolute left-[10px] top-6 w-3 h-3 bg-accent rounded-full"></div>

            <motion.div
              whileHover={{ scale: 1.01 }}
              className="bg-card p-4 rounded-xl border border-white/10"
            >
              <div className="flex items-start gap-4">
                <img
                  src="/logos/uii.png"
                  alt="UII"
                  className="w-10 h-10 object-contain rounded-md bg-white p-1"
                />

                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <h3 className="font-semibold">Graphic Designer</h3>
                    <span className="text-xs text-muted">May 2020 – Aug 2025</span>
                  </div>

                  <p className="text-sm text-accent mt-1">
                    Universitas Islam Indonesia • Sleman, Indonesia
                  </p>

                  <ul className="list-disc ml-5 mt-3 text-sm text-muted space-y-1">
                    <li>Designed 500+ social media assets for campaigns and events</li>
                    <li>Created posters, banners, and branding materials</li>
                    <li>Maintained visual consistency across platforms</li>
                    <li>Optimized designs for both digital and print output</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </div>
  );
}