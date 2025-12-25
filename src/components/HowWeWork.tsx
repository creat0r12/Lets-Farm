import "./HowWeWork.css";
import problemImage from "../assets/problem-we-saw.png";
import visionSolutionImage from "../assets/vision-solution.png";
import whatyougethear from "../assets/What-you-get-hear.png"
import realguidence from "../assets/realguidence.png"
import markethelp from "../assets/markethelp.png"
import organicfarming from "../assets/organicfarming.png"

function HowWeWork() {
  return (
    <div className="how-page">

      {/* INTRO */}
      <section className="how-hero">
        <h1>How We Work</h1>
        <p>
          Reviving the spirit of farming by preserving knowledge,
          guiding the next generation, and building a sustainable future
          for agriculture.
        </p>
      </section>

      {/* PROBLEM */}
      <section className="how-section">
        <div className="how-visual">
          <img
            src={problemImage}
            alt="The problem we saw in modern farming"
            className="how-image"
          />
        </div>


        <div className="how-text">
          <h2>The Problem We Saw</h2>
          <p>
            As generations grow, the craze and connection with farming
            is slowly fading. Traditional knowledge, real field experience,
            and practical learning are getting lost with time.
          </p>
          <p>
            If this continues, future generations may not have access to
            the wisdom, skills, and understanding required to farm sustainably
            and confidently.
          </p>
        </div>
      </section>

      {/* SOLUTION */}
      <section className="how-section">
        <div className="how-text">
          <h2>Our Vision & Solution</h2>
          <p>
            We imagined a single platform that transforms this problem
            into a solution — a website that teaches farming from zero,
            completely free, and accessible to everyone.
          </p>
          <p>
            Let’s Farm is designed as a one-stop place where all farming
            knowledge lives together, preserved and passed forward.
          </p>
        </div>

        <div className="how-visual">
          <img
            src={visionSolutionImage}
            alt="Our vision and solution for the future of farming"
            className="how-image"
          />
        </div>

      </section>

      {/* WHAT YOU GET */}
      <section className="how-section">
        <div className="how-visual">
          <img
            src={whatyougethear}
            alt="Our vision and solution for the future of farming"
            className="how-image"
          />
        </div>

        <div className="how-text">
          <h2>What You Get Here</h2>
          <ul>
            <li>✔ Region-wise farming information</li>
            <li>✔ Best crop selection guidance</li>
            <li>✔ Soil, climate, and seasonal insights</li>
            <li>✔ Easy-to-understand videos & animations</li>
            <li>✔ Practical learning you can apply directly in fields</li>
          </ul>
        </div>
      </section>

      {/* GUIDANCE */}
      <section className="how-section">
        <div className="how-text">
          <h2>Real Guidance, Not Just Information</h2>
          <p>
            In the future, we will not only teach farming —
            we will guide you through real challenges faced in the field.
          </p>
          <p>
            Verified farmers, identified through our platform,
            will share their real experiences, mistakes, and solutions.
            Knowledge from multiple farmers will contribute to one trusted system.
          </p>
        </div>

        <div className="how-visual">
           <img
            src={realguidence}
            alt="Our vision and solution for the future of farming"
            className="how-image"
          />
        </div>
      </section>

      {/* MARKET */}
      <section className="how-section">
        <div className="how-visual">
          <img
            src={markethelp}
            alt="Our vision and solution for the future of farming"
            className="how-image"
          />
        </div>

        <div className="how-text">
          <h2>Beyond Farming: Market & Growth</h2>
          <p>
            Our future vision goes beyond farming education.
            We plan to introduce a portal where farmers can directly
            sell their produce to customers or wholesalers.
          </p>
          <p>
            This removes middlemen and helps farmers receive
            the right value for their hard work.
          </p>
        </div>
      </section>

      {/* ORGANIC */}
      <section className="how-section">
        <div className="how-text">
          <h2>Our Core Focus: Organic & Indian Farming</h2>
          <p>
            Organic farming is at the heart of Let’s Farm.
            We promote natural, sustainable practices while also
            educating users about other farming methods used across India.
          </p>
          <p>
            Our information pages will explain different types of farming
            in a clear, practical way — helping farmers choose what works
            best for their land.
          </p>
        </div>

        <div className="how-visual">
         <img
            src={organicfarming}
            alt="Our vision and solution for the future of farming"
            className="how-image"
          />
        </div>
      </section>

      {/* CTA */}
      <section className="how-cta">
        <h2>From Zero to 100% — We Walk With You</h2>
        <p>
          Our goal is not just to provide solutions,
          but to guide farmers through every stage —
          from starting with no knowledge to becoming confident,
          independent, and successful.
        </p>
        <button
          className="primary-btn"
          onClick={() => window.location.href = "/location"}
        >
          🌱 Start Your Farming Journey
        </button>
      </section>

    </div>
  );
}

export default HowWeWork;
