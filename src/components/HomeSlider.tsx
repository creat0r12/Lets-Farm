import { useState, useRef, useEffect } from "react";
import "./HomeSlider.css";

import WhyFarming from "./WhyFarming";
import Vision from "./Vision";
import HowWeHelp from "./HowWeHelp";

function HomeSlider() {
  const [index, setIndex] = useState(0);
  const windowRef = useRef<HTMLDivElement>(null);

  const slides = [
    <WhyFarming key="why" />,
    <Vision key="vision" />,
    <HowWeHelp key="help" />
  ];

  /* =========================
     NAVIGATION (LINEAR)
  ========================= */
  const next = () => {
    setIndex((prev) => Math.min(prev + 1, slides.length - 1));
  };

  const prev = () => {
    setIndex((prev) => Math.max(prev - 1, 0));
  };

  /* =========================
     TRACKPAD / GESTURE (UNCHANGED)
  ========================= */
  useEffect(() => {
    const el = windowRef.current;
    if (!el) return;

    let lastTriggerTime = 0;
    let accumulatedX = 0;

    const COOLDOWN = 550;
    const SWIPE_THRESHOLD = 60;

    const onWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaX) <= Math.abs(e.deltaY)) return;

      e.preventDefault();

      accumulatedX += e.deltaX;
      const now = Date.now();

      if (now - lastTriggerTime < COOLDOWN) return;
      if (Math.abs(accumulatedX) < SWIPE_THRESHOLD) return;

      lastTriggerTime = now;

      if (accumulatedX > 0) {
        next();
      } else {
        prev();
      }

      accumulatedX = 0;
    };

    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, []);

  return (
    <section className="home-slider">
      <button className="nav-btn left" onClick={prev}>‹</button>

      <div className="slider-window" ref={windowRef}>
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

      <button className="nav-btn right" onClick={next}>›</button>

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
