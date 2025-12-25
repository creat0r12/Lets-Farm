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




import HowWeWork from "./components/HowWeWork";





function App() {

  const [accountOpen, setAccountOpen] = useState(false);

  return (
    <>
      {/* FIXED WALLPAPER */}
      <div className="fixed-wallpaper" />

      {/* NAVBAR */}
      <Navbar onAccountClick={() => setAccountOpen(true)} />






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

        <Route path="/HowWeWork" element={<HowWeWork />} />
        <Route path="/location" element={<LocationServices />} />

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
