import { useState } from "react";
import { Routes, Route } from "react-router-dom";

/* =======================
   COMPONENT IMPORTS
======================= */
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Challenges from "./components/Challenges";
import FarmingMethods from "./components/FarmingMethods";
import HomeSlider from "./components/HomeSlider";
import Footer from "./components/Footer";

import Chatbot from "./components/Chatbot/Chatbot";
import AccountManager from "./components/AccountManager";
import LocationServices from "./components/LocationServices";
import SmartCropAdvisor from "./components/SmartCropAdvisor";
import HowWeWork from "./components/HowWeWork";
import KnowFarming from "./components/KnowFarming";
import Vision from "./components/Vision";
import Products from "./components/Products";

/* =======================
   NEW PAGE IMPORT
======================= */
import Contact from "./components/Contact";

function App() {
  const [chatOpen, setChatOpen] = useState(false);
  const [accountOpen, setAccountOpen] = useState(false);

  return (
    <>
      {/* NAVBAR */}
      <Navbar
        onAccountClick={() => setAccountOpen(true)}
        onChatClick={() => setChatOpen(true)}
      />

      {/* ROUTES */}
      <Routes>
        {/* HOME */}
        <Route
          path="/"
          element={
            <>
              <div className="fixed-wallpaper" />
              <Hero />
              <HomeSlider />
              <Challenges />
              <FarmingMethods />
            </>
          }
        />

        {/* OTHER PAGES */}
        <Route path="/HowWeWork" element={<HowWeWork />} />
        <Route path="/location" element={<LocationServices />} />
        <Route path="/smart-advisor" element={<SmartCropAdvisor />} />
        <Route path="/know-farming" element={<KnowFarming />} />
        <Route path="/vision" element={<Vision />} />
        <Route path="/products" element={<Products />} />

        {/* ✅ CONTACT US PAGE */}
        <Route path="/contact" element={<Contact />} />
      </Routes>

      {/* CHATBOT */}
      <Chatbot open={chatOpen} onClose={() => setChatOpen(false)} />

      {/* FOOTER (GLOBAL) */}
      <Footer />

      {/* ACCOUNT PANEL */}
      <AccountManager
        open={accountOpen}
        onClose={() => setAccountOpen(false)}
      />
    </>
  );
}

export default App;
