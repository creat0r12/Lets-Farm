import "./GuidedLearning.css";

function GuidedCTA({ onStart }: { onStart: () => void }) {
  return (
    <section className="guided-cta">
      <h2>Ready for Personalized Farming Guidance?</h2>
      <p>
        Now that you understand the basics, let us guide you step by step
        based on your location, soil, and goals.
      </p>

      <button className="guided-btn" onClick={onStart}>
        Start Guided Learning
      </button>
    </section>
  );
}

export default GuidedCTA;
