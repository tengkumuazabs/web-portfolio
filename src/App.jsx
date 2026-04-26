import Hero from "./components/Hero";
import KPI from "./components/KPI";
import Experience from "./components/Experience";
import SkillsChart from "./components/SkillsChart";
import Projects from "./components/Projects";

export default function App() {
  return (
    <div className="min-h-screen px-6 md:px-20 py-10">
      <Hero />
      <KPI />
      <Experience />
      <SkillsChart />
      <Projects />
    </div>
  );
}