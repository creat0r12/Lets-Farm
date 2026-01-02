import "./Hero.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Lottie from "lottie-react";
import heroAnimation from "../assets/Animation-hero.json";

const messages = [
  "Inspiring the next generation to reconnect with agriculture.",
  "Helping beginners understand farming from the ground up.",
  "Guiding farmers toward sustainable and smart practices.",
  "Blending traditional farming wisdom with modern guidance.",
];

const Hero = () => {
  const navigate = useNavigate();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % messages.length);
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero">
      <div className="hero-container">

        {/* LEFT SIDE — CONTENT */}
        <div className="hero-left">
          <div className="hero-main">
            <h1>Reignite the Future of Farming</h1>
          </div>

          <div className="hero-divider"></div>

          <div className="hero-rotator">
            <p key={index} className="hero-rotate-text">
              {messages[index]}
            </p>
          </div>

          <div className="hero-sub">
            <p className="hero-subtext">
              Learn farming the right way — from soil to crops, guided by nature
              and technology.
            </p>

            <button
              className="hero-btn"
              onClick={() => navigate("/smart-advisor")}
            >
              🌱 Smart Crop Advisor
            </button>
          </div>
        </div>

        {/* RIGHT SIDE — ANIMATION */}
        <div className="hero-right">
          <Lottie
            animationData={heroAnimation}
            loop
            autoplay
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;
