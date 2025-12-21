import { useState } from "react";
import "./HomeSlider.css";

import WhyFarming from "./WhyFarming";
import Vision from "./Vision";
import HowWeHelp from "./HowWeHelp";

function HomeSlider() {
  const [index, setIndex] = useState(0);

  const slides = [
    <WhyFarming key="why" />,
    <Vision key="vision" />,
    <HowWeHelp key="help" />
  ];

  const next = () => {
    setIndex((prev) => (prev + 1) % slides.length);
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="home-slider">
      <button className="nav-btn left" onClick={prev}>
        ‹
      </button>

      <div className="slider-window">
        <div
          className="slider-track"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {slides.map((Component, i) => (
            <div className="slide" key={i}>
              {Component}
            </div>
          ))}
        </div>
      </div>

      <button className="nav-btn right" onClick={next}>
        ›
      </button>

      {/* DOTS */}
      <div className="slider-dots">
        {slides.map((_, i) => (
          <span
            key={i}
            className={`dot ${index === i ? "active" : ""}`}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </section>
  );
}

export default HomeSlider;
