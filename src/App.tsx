import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WhyFarming from "./components/WhyFarming";
import Vision from "./components/Vision";
import HowWeHelp from "./components/HowWeHelp";
import Challenges from "./components/Challenges";
import TopPanel from "./components/TopPanel";
import GuidedLearning from "./components/GuidedLearning";
import FarmingMethods from "./components/FarmingMethods";
import LearningOverview from "./components/LearningOverview";



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
      <Navbar onSelect={handleNavSelect} />

      {/* PAGE ROUTES */}
      <Routes>
        {/* HOME PAGE */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <WhyFarming />
              <Vision />
              <HowWeHelp />
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

      {/* OVERLAY PANEL (NOT A PAGE) */}
      <TopPanel
        isOpen={isPanelOpen}
        onClose={() => setIsPanelOpen(false)}
        title={activeSection.toUpperCase()}
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
