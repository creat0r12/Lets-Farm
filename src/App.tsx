import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Challenges from "./components/Challenges";
import TopPanel from "./components/TopPanel";
import GuidedLearning from "./components/GuidedLearning";
import FarmingMethods from "./components/FarmingMethods";
import LearningOverview from "./components/LearningOverview";
import HomeSlider from "./components/HomeSlider";
import Footer from "./components/Footer";


function App() {
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const handleNavSelect = (section: string) => {
    if (section === "home") {
      setIsPanelOpen(false);
      setActiveSection("");
    } else {
      setActiveSection(section);
      setIsPanelOpen(true);
    }
  };

  return (
  <>
    {/* FIXED WALLPAPER */}
    <div className="fixed-wallpaper" />

    {/* NAVBAR */}
    <Navbar
      onSelect={handleNavSelect}
      isTopPanelOpen={isPanelOpen}
    />

    {/* PAGE ROUTES */}
    <Routes>
      {/* HOME PAGE */}
      <Route
        path="/"
        element={
          <>
            <Hero />
            <HomeSlider />
            <Challenges />
            <FarmingMethods />
          </>
        }
      />

      {/* LEARNING PAGE */}
      <Route
        path="/learning"
        element={
          <>
            <LearningOverview />
            <GuidedLearning />
          </>
        }
      />
    </Routes>

    {/* ✅ GLOBAL FOOTER (NOW ON ALL PAGES) */}
    <Footer />

    {/* TOP PANEL */}
    <TopPanel
      isOpen={isPanelOpen}
      onClose={() => setIsPanelOpen(false)}
      title={activeSection ? activeSection.toUpperCase() : ""}
    >
      {activeSection === "why" && (
        <p>
          Agriculture is the backbone of our society, yet it is becoming
          complicated and less attractive for the next generation.
        </p>
      )}

      {activeSection === "vision" && (
        <p>
          Our vision is to combine traditional farming wisdom, organic
          practices, and modern technology for a sustainable future.
        </p>
      )}

      {activeSection === "challenges" && (
        <p>
          Farmers face soil degradation, climate uncertainty, rising costs,
          and lack of proper guidance.
        </p>
      )}
    </TopPanel>
  </>
);
}
export default App;
