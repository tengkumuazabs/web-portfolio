import Hero from "./components/Hero";
import KPI from "./components/KPI";
import Summary from "./components/Summary";
import Experience from "./components/Experience";
import SkillsChart from "./components/SkillsChart";
import Projects from "./components/Projects";
import GraphicDesign from "./components/DesignPortfolio";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col py-10 bg-bg text-white">
      
      <div className="w-full max-w-5xl mx-auto px-6 md:px-10">
        
        <Navbar />

        <main className="flex-1">
          <Hero />
          <KPI />
          <Summary />
          <Experience />
          <SkillsChart />
          <Projects />
          <GraphicDesign />
        </main>

        <Footer />

      </div>
    </div>
  );
}