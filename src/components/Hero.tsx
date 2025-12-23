import "./Hero.css";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="hero">
      {/* Main content */}
      <div className="hero-main">
        <h1>Reignite the Future of Farming</h1>
      </div>

      {/* Divider line */}
      <div className="hero-divider"></div>

      {/* Small / supporting content */}
      <div className="hero-sub">
        <p>
          Inspiring the next generation to reconnect with agriculture through
          knowledge, purpose, and modern guidance.
        </p>

        <p className="hero-subtext">
          Learn farming the right way — from soil to crops, guided by nature and technology.
        </p>


        <button
          className="hero-btn"
          onClick={() => {
            console.log("BUTTON CLICKED");
            navigate("/learning");
          }}
        >
          Start Learning
        </button>
      </div>
    </section>
  );
};

export default Hero;
