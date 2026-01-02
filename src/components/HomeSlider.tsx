import { useState, useRef, useEffect } from "react";
import "./HomeSlider.css";

function HomeSlider() {
  const [index, setIndex] = useState(0);
  const windowRef = useRef<HTMLDivElement>(null);

  /* =========================
     SLIDES (MVP FINAL CONTENT)
     — CONTENT ONLY CHANGED
  ========================= */
  const slides = [
    (
      <div className="home-slide">
        <h1>Farming Decisions Are Often Guesswork</h1>
        <p>
          Many farmers and beginners struggle to choose the right crop for their land.
        </p>
        <p>
          Wrong crop selection leads to low yield, financial loss, and soil damage.
        </p>
      </div>
    ),

    (
      <div className="home-slide">
        <h1>A Simple Crop Guidance Tool</h1>
        <p>
          Let’s Farm helps farmers make better crop decisions using basic information
          like location, soil type, and farming style.
        </p>
        <p>
          The goal is to reduce guesswork and support sustainable farming practices.
        </p>
      </div>
    ),

    (
      <div className="home-slide">
        <h1>Smart Crop Advisor</h1>
        <ul>
          <li>Select your location</li>
          <li>Select soil type and farming style</li>
          <li>Get suitable crop guidance with tips and precautions</li>
        </ul>
        <p style={{ marginTop: "1rem", fontWeight: 600 }}>
          Try the Smart Crop Advisor to get started.
        </p>
      </div>
    )
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
     TRACKPAD / GESTURE
     (UNCHANGED)
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
          {slides.map((content, i) => (
            <div className="slide" key={i}>
              {content}
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
