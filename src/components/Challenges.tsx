import "./Challenges.css";
import farmersMarket from "../assets/Farmers-market-rafiki.svg";


const Challenges = () => {
  return (
    <section className="challenges">

      {/* MAIN LARGE BOX */}
      <div className="main-box">

        {/* LEFT: INFO (SCROLLABLE) */}
        <div className="left-box">
          <h2>Who This Platform Is For</h2>

          <div className="info-box">
            <h3>New & Beginner Farmers</h3>
            <p>
              People starting farming who are unsure which crop suits their land
              and local conditions.
            </p>
          </div>

          <div className="info-box">
            <h3>Small Landholders</h3>
            <p>
              Farmers with limited land who need to avoid risky crop choices
              and reduce losses.
            </p>
          </div>

          <div className="info-box">
            <h3>Organic & Sustainable Farmers</h3>
            <p>
              Farmers who want to reduce chemical use and follow sustainable
              farming practices.
            </p>
          </div>

          <div className="info-box">
            <h3>Students & Learners</h3>
            <p>
              Agriculture students or learners who want practical,
              real-world farming guidance.
            </p>
          </div>

          <div className="info-box highlight">
            <p>
              This MVP helps users make better crop decisions using
              location, soil type, and farming preference.
            </p>
          </div>
        </div>

        {/* RIGHT: IMAGE */}
        <div className="right-box">
          <img
            src={farmersMarket}
            alt="Farmers market illustration"
            className="challenge-illustration"
          />
        </div>

      </div>
    </section>
  );
};

export default Challenges;
