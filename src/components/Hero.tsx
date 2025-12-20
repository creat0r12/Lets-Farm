import "./Hero.css";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate(); // ✅ hook inside component

  return (
    <section className="hero">
      <h1>Reignite the Future of Farming</h1>
      <p>
        Inspiring the next generation to reconnect with agriculture through
        knowledge, purpose, and modern guidance.
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
    </section>
  );
};

export default Hero;
