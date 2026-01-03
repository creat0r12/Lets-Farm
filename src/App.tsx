import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Challenges from "./components/Challenges";
import FarmingMethods from "./components/FarmingMethods";
import HomeSlider from "./components/HomeSlider";
import Footer from "./components/Footer";

import { useState } from "react";
import AccountPanel from "./components/AccountPanel";
import LocationServices from "./components/LocationServices";


import SmartCropAdvisor from "./components/SmartCropAdvisor";



import HowWeWork from "./components/HowWeWork";



import KnowFarming from "./components/KnowFarming";

import Vision from "./components/Vision";

import Products from "./components/Products";


function App() {

  const [accountOpen, setAccountOpen] = useState(false);

  return (
    <>
      {/* FIXED WALLPAPER */}
      {/* <div className="fixed-wallpaper" /> */}

      {/* NAVBAR */}
      <Navbar onAccountClick={() => setAccountOpen(true)} />






      {/* PAGE ROUTES */}
      <Routes>



        {/* HOME PAGE */}
        <Route
          path="/"
          element={
            <>
              {/* HOME WALLPAPER ONLY */}
              <div className="fixed-wallpaper" />
              <Hero />
              <HomeSlider />
              <Challenges />
              <FarmingMethods />
            </>
          }
        />

        <Route path="/HowWeWork" element={<HowWeWork />} />

        <Route path="/location" element={<LocationServices />} />

        {/* SMART CROP ADVISOR */}
        <Route path="/smart-advisor" element={<SmartCropAdvisor />} />

        <Route path="/know-farming" element={<KnowFarming />} />
        {/* for vision */}
        <Route path="/vision" element={<Vision />} />

        <Route path="/products" element={<Products />} />


      </Routes>




      {/* ✅ GLOBAL FOOTER (NOW ON ALL PAGES) */}
      <Footer />
      {/* account pannel */}
      <AccountPanel
        open={accountOpen}
        onClose={() => setAccountOpen(false)}
      />

    </>
  );
}
export default App;
