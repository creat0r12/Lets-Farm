import "./Vision.css";
import whyfarmImg from "../assets/why-farm.png";
import learnstartfarming from "../assets/learnstartpoint.png"
import builtontrust from "../assets/builtontrust.png"
import fairmarketplace from "../assets/fairmarketplace.png"
import techhelpfarmer from "../assets/techhelpfamer.png"
function Vision() {
  return (
    <main className="vision-page">

      {/* =================================================
          HERO — WHAT WE ARE BUILDING
      ================================================= */}
      <section className="vision-hero reveal">
        <h1>Building the Future of Farming</h1>
        <p>
          Let’s Farm is a farmer-first ecosystem.
          A place where farmers learn, grow, connect,
          trade, and build a sustainable future together.
        </p>
      </section>

      {/* =================================================
          WHY FARMERS NEED THIS PLATFORM
      ================================================= */}
      <section className="vision-section reveal">
        <div className="vision-text">
          <h2>Why Let’s Farm Exists</h2>
          <p>
            Farmers face real challenges every day —
            lack of guidance, limited budget, manpower issues,
            expensive machines, and unfair market systems.
          </p>
          <p>
            Most farmers are not failing because of hard work.
            They fail because they are forced to make decisions
            without trusted support or correct information.
          </p>
        </div>

        <div className="vision-svg">
          {/* SVG: Farmer Struggles */}
          <img
            src={whyfarmImg}
            alt="Why Let's Farm Exists"
            className="vision-image"
          />
        </div>
      </section>

      {/* =================================================
          LEARNING — ENTRY POINT
      ================================================= */}
      <section className="vision-section reverse reveal">
        <div className="vision-svg">
          {/* SVG: Learning / Growth */}
          <img src={learnstartfarming} 
          alt="learning is the starting point"
          className="vision-image"
           />
        </div>

        <div className="vision-text">
          <h2>Learning Is the Starting Point</h2>
          <p>
            Let’s Farm begins with learning because
            knowledge builds confidence.
          </p>
          <p>
            From basic farming concepts to crop selection,
            soil understanding, and sustainable methods —
            farmers learn step by step, without confusion.
          </p>
        </div>
      </section>

      {/* =================================================
          PROBLEMS WE FOCUS ON
      ================================================= */}
      <section className="vision-focus reveal">
        <h2>Problems We Focus On Solving</h2>

        <div className="focus-grid">
          <div className="focus-box">Manpower Shortage</div>
          <div className="focus-box">Machine Accessibility</div>
          <div className="focus-box">Low Budget Farming</div>
          <div className="focus-box">Fake Knowledge</div>
          <div className="focus-box">Market Exploitation</div>
          <div className="focus-box">Soil Health Decline</div>
        </div>
      </section>

      {/* =================================================
          TRUST & REAL FARMERS
      ================================================= */}
      <section className="vision-section reveal">
        <div className="vision-text">
          <h2>Built on Trust, Not Assumptions</h2>
          <p>
            Farming today suffers from fake advice
            and unverified information.
          </p>
          <p>
            Let’s Farm focuses on real farmers,
            real field knowledge, and verified identity —
            so trust becomes the foundation of decisions.
          </p>
        </div>

        <div className="vision-svg">
          {/* SVG: Trust / Verification */}
          <img
            src={builtontrust}
            alt="built on trust not asumption"
            className="vision-image"
          />
        </div>
      </section>

      {/* =================================================
          MARKETPLACE — ECONOMIC EMPOWERMENT
      ================================================= */}
      <section className="vision-section reverse reveal">
        <div className="vision-svg">
          {/* SVG: Marketplace */}
           <img
            src={fairmarketplace}
            alt="fair market place"
            className="vision-image"
          />
        </div>

        <div className="vision-text">
          <h2>A Fair Farmer Marketplace</h2>
          <p>
            Let’s Farm will enable farmers to sell,
            buy, and trade directly — reducing dependency
            on middlemen.
          </p>
          <p>
            Farmers can open their own shops,
            access better deals, and participate
            in a circular farming economy.
          </p>
        </div>
      </section>

      {/* =================================================
          ORGANIC — FUTURE DIRECTION
      ================================================= */}
      <section className="vision-highlight reveal">
        <h2>Organic Farming Is the Future Direction</h2>
        <p>
          Organic and sustainable farming protect soil,
          environment, and long-term food security.
        </p>
        <p>
          While organic farming is our core focus,
          Let’s Farm also supports home gardening,
          fruit farming, and other practical methods —
          respecting every farmer’s journey.
        </p>
      </section>

      {/* =================================================
          TECHNOLOGY — SUPPORT SYSTEM
      ================================================= */}
      <section className="vision-section reveal">
        <div className="vision-text">
          <h2>Technology That Helps Farmers</h2>
          <p>
            Technology should support farmers,
            not replace their experience.
          </p>
          <p>
            Future plans include mobile apps,
            soil health testing, report submission,
            environment alerts, and real-time guidance —
            all in one place.
          </p>
        </div>

        <div className="vision-svg">
          {/* SVG: Smart Farming */}
          <img src={techhelpfarmer}
            alt="Technology thats help farmer"
            className="vision-image"
          />
        </div>
      </section>

      {/* =================================================
          ONLINE → OFFLINE FUTURE
      ================================================= */}
      <section className="vision-highlight reveal">
        <h2>Online to Offline Farming Ecosystem</h2>
        <p>
          Let’s Farm begins online, but our vision
          extends to offline organic stores and
          physical farmer support centers.
        </p>
        <p>
          This creates a complete circular system —
          from soil to market, and back to soil.
        </p>
      </section>

      {/* =================================================
          HONEST ENDING
      ================================================= */}
      <section className="vision-closing reveal">
        <h2>Our Commitment</h2>
        <p>
          This vision requires time, investment,
          real farmer contribution, and trust.
        </p>
        <p>
          Let’s Farm is committed to building
          this future step by step — honestly,
          responsibly, and together.
        </p>

        <p className="vision-quote">
          “When farmers grow together, the future grows stronger.”
        </p>
      </section>

    </main>
  );
}

export default Vision;
