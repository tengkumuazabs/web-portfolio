import {
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  Radar,
} from "recharts";

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

function RadarBlock({ title, data }) {
  return (
    <div className="bg-card p-5 rounded-xl border border-white/10" id="skills">
      <h3 className="text-sm text-muted mb-3">{title}</h3>

      <ResponsiveContainer width="100%" height={220}>
        <RadarChart data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" />
          <Radar
            dataKey="A"
            stroke="#4f46e5"
            fill="#4f46e5"
            fillOpacity={0.4}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default function SkillsChart() {
  return (
    <div className="mb-10">
      <h2 className="text-xl font-semibold mb-4">Skills Overview</h2>

      <div className="grid md:grid-cols-2 gap-4">
        <RadarBlock
          title="Data Analysis Skills"
          data={dataAnalysis}
        />

        <RadarBlock
          title="Graphic Design Skills"
          data={graphicDesign}
        />
      </div>
    </div>
  );
}