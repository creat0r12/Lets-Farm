import "./LearningOverview.css";

function LearningOverview() {
  return (
    <section className="learning-overview" id="learning-overview">
      <h2>Learn Farming – Your Way</h2>

      <p className="learning-intro">
        🌍 This platform is built for learners and farmers from <b>all regions</b>.
        You don’t need to read everything. Choose what you want to learn and
        directly jump to it.
      </p>

      <div className="learning-jump">
        <a href="#need">Need of Farming</a>
        <a href="#basics">Farming Basics</a>
        <a href="#soil">Soil Understanding</a>
        <a href="#crop">Crop Selection</a>
        <a href="#method">Farming Methods</a>
        <a href="#region">For Your Region (Coming Soon)</a>
      </div>

      <p className="learning-note">
        👉 If you want step-by-step guidance, continue below for the interactive
        learning experience.
      </p>
    </section>
  );
}

export default LearningOverview;
