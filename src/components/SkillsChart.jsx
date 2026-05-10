import {
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  Radar,
} from "recharts";

import {
  Settings,
  Code,
  LayoutGrid,
  BarChart3,
  Cpu,
  Sparkles,
  PenTool,
  Layers,
} from "lucide-react";
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

      <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        <div className="bg-card p-6 rounded-3xl border border-white/10 shadow-lg shadow-black/10">
          <div className="flex items-center gap-3 mb-4 text-accent">
            <Code size={22} />
            <div>
              <h3 className="text-base font-semibold">Languages & Frameworks</h3>
              <p className="text-xs uppercase tracking-[0.2em] text-muted">Core development stack</p>
            </div>
          </div>
          <p className="text-sm leading-7 text-slate-200">
            Python (Pandas, NumPy, Matplotlib, Seaborn, Plotly, scikit-learn, Streamlit), SQL, React, FastAPI
          </p>
        </div>

        <div className="bg-card p-6 rounded-3xl border border-white/10 shadow-lg shadow-black/10">
          <div className="flex items-center gap-3 mb-4 text-accent">
            <LayoutGrid size={22} />
            <div>
              <h3 className="text-base font-semibold">Frontend & Styling</h3>
              <p className="text-xs uppercase tracking-[0.2em] text-muted">Visual UI tools</p>
            </div>
          </div>
          <p className="text-sm leading-7 text-slate-200">Tailwind CSS</p>
        </div>

        <div className="bg-card p-6 rounded-3xl border border-white/10 shadow-lg shadow-black/10">
          <div className="flex items-center gap-3 mb-4 text-accent">
            <BarChart3 size={22} />
            <div>
              <h3 className="text-base font-semibold">Data Analysis & BI</h3>
              <p className="text-xs uppercase tracking-[0.2em] text-muted">Reporting platforms</p>
            </div>
          </div>
          <p className="text-sm leading-7 text-slate-200">Microsoft Power BI, Microsoft Excel</p>
        </div>

        <div className="bg-card p-6 rounded-3xl border border-white/10 shadow-lg shadow-black/10">
          <div className="flex items-center gap-3 mb-4 text-accent">
            <Cpu size={22} />
            <div>
              <h3 className="text-base font-semibold">Automation & Deployment</h3>
              <p className="text-xs uppercase tracking-[0.2em] text-muted">Process efficiency</p>
            </div>
          </div>
          <p className="text-sm leading-7 text-slate-200">VBA Excel, Docker</p>
        </div>

        <div className="bg-card p-6 rounded-3xl border border-white/10 shadow-lg shadow-black/10">
          <div className="flex items-center gap-3 mb-4 text-accent">
            <Sparkles size={22} />
            <div>
              <h3 className="text-base font-semibold">Data Analysis</h3>
              <p className="text-xs uppercase tracking-[0.2em] text-muted">Insight-driven skills</p>
            </div>
          </div>
          <p className="text-sm leading-7 text-slate-200">
            Data Cleaning, Data Visualization, Dashboard Development, Sales Analytics, Reporting Automation
          </p>
        </div>

        <div className="bg-card p-6 rounded-3xl border border-white/10 shadow-lg shadow-black/10">
          <div className="flex items-center gap-3 mb-4 text-accent">
            <PenTool size={22} />
            <div>
              <h3 className="text-base font-semibold">Design Tools</h3>
              <p className="text-xs uppercase tracking-[0.2em] text-muted">Creative software</p>
            </div>
          </div>
          <p className="text-sm leading-7 text-slate-200">Adobe Illustrator, CorelDRAW, Adobe Photoshop</p>
        </div>

        <div className="bg-card p-6 rounded-3xl border border-white/10 shadow-lg shadow-black/10">
          <div className="flex items-center gap-3 mb-4 text-accent">
            <Layers size={22} />
            <div>
              <h3 className="text-base font-semibold">Other Tools</h3>
              <p className="text-xs uppercase tracking-[0.2em] text-muted">Supporting apps</p>
            </div>
          </div>
          <p className="text-sm leading-7 text-slate-200">Microsoft PowerPoint, Canva (basic), Figma (basic)</p>
        </div>
      </div>
    </div>
  );
}
