import "./Challenges.css";

const Challenges = () => {
  return (
    <section className="challenges">
      <h2>Challenges in Modern Farming</h2>

      <p className="intro">
        Farming today is no longer simple. Rising costs, chemical dependency,
        and lack of proper guidance have made agriculture risky and stressful,
        especially for small and young farmers.
      </p>

      <div className="challenge-cards">
        <div className="challenge-card">
          <div className="card-icon">
    {/* SVG or image goes here later */}
  </div>
          <h3>Chemical Dependency</h3>
          <p>
            Heavy dependence on chemical fertilizers and pesticides increases
            costs and harms soil life.
          </p>
        </div>

        <div className="challenge-card">
          <div className="card-icon">
    {/* SVG or image goes here later */}
  </div>
          <h3>Soil Health Decline</h3>
          <p>
            Continuous chemical use degrades soil quality and reduces long-term
            productivity.
          </p>
        </div>

        <div className="challenge-card">
          <div className="card-icon">
    {/* SVG or image goes here later */}
  </div>
          <h3>Climate Uncertainty</h3>
          <p>
            Unpredictable climate and weather conditions cause crop failures
            and income loss.
          </p>
        </div>

        <div className="challenge-card">
          <div className="card-icon">
    {/* SVG or image goes here later */}
  </div>
          <h3>Knowledge Gap</h3>
          <p>
            Farmers lack clear guidance on sustainable and organic farming
            practices.
          </p>
        </div>

        <div className="challenge-card">
          <div className="card-icon">
    {/* SVG or image goes here later */}
  </div>
          <h3>Market Access Issues</h3>
          <p>
            Limited access to trusted markets makes fair pricing difficult
            for farmers.
          </p>
        </div>
      </div>

      <p className="highlight">
        <div className="card-icon">
    {/* SVG or image goes here later */}
  </div>
        These challenges are pushing many away from farming — but with the right
        knowledge and a shift towards organic and sustainable methods, farming
        can regain stability and purpose.
      </p>
    </section>
  );
};

export default Challenges;
