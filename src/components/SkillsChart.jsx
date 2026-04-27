import {
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  Radar,
} from "recharts";

import { Settings } from "lucide-react";
import { useEffect, useState } from "react";

/* ---------- data ---------- */
const dataAnalysis = [
  { subject: "Python", A: 90 },
  { subject: "SQL", A: 75 },
  { subject: "Power BI", A: 80 },
  { subject: "Excel", A: 90 },
  { subject: "Data Viz", A: 85 },
];

const graphicDesign = [
  { subject: "Adobe Illustrator", A: 90 },
  { subject: "Photoshop", A: 75 },
  { subject: "CorelDRAW", A: 75 },
  { subject: "Branding", A: 80 },
  { subject: "UI Design", A: 70 },
];

/* ---------- mobile hook ---------- */
function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return isMobile;
}

/* ---------- list fallback (mobile UI) ---------- */
function SkillList({ title, data }) {
  return (
    <div className="bg-card p-5 rounded-xl border border-white/10">
      <h3 className="text-sm text-muted mb-4">{title}</h3>

      <div className="space-y-3">
        {data.map((item) => (
          <div key={item.subject}>
            {/* label + % */}
            <div className="flex justify-between text-sm mb-1">
              <span className="text-muted">{item.subject}</span>
              <span className="text-accent font-medium">
                {item.A}%
              </span>
            </div>

            {/* bar */}
            <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-accent to-emerald-400 rounded-full transition-all duration-500"
                style={{ width: `${item.A}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---------- radar chart (desktop UI) ---------- */
function RadarBlock({ title, data }) {
  return (
    <div className="bg-card p-5 rounded-xl border border-white/10">
      <h3 className="text-sm text-muted mb-3">{title}</h3>

      <ResponsiveContainer width="100%" height={220}>
        <RadarChart data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" />
          <Radar
            dataKey="A"
            fill="#80bda8"
            fillOpacity={0.4}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}

/* ---------- main component ---------- */
export default function SkillsChart() {
  const isMobile = useIsMobile();

  return (
    <div className="mb-10 scroll-mt-24" id="skills">
      {/* Heading */}
      <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
        <Settings size={18} />
        Skills Overview
      </h2>

      <div className="grid md:grid-cols-2 gap-4">
        {/* Data Analysis */}
        {isMobile ? (
          <SkillList
            title="Data Analysis Skills"
            data={dataAnalysis}
          />
        ) : (
          <RadarBlock
            title="Data Analysis Skills"
            data={dataAnalysis}
          />
        )}

        {/* Graphic Design */}
        {isMobile ? (
          <SkillList
            title="Graphic Design Skills"
            data={graphicDesign}
          />
        ) : (
          <RadarBlock
            title="Graphic Design Skills"
            data={graphicDesign}
          />
        )}
      </div>
    </div>
  );
}