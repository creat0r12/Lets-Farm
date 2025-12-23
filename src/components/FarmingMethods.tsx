import "./FarmingMethods.css";
import traditionalImg from "../assets/traditional.jpg";
import organicImg from "../assets/organic.jpg";
import smartImg from "../assets/smartfarm.jpg";


const FarmingMethods = () => {
  return (
    <section className="farming-methods" id="methods">
      <h2 className="section-title">Farming Methods</h2>
      <p className="section-subtitle">
        Understanding different farming approaches helps us choose a better future for agriculture.
      </p>

      <div className="methods-container">
        <div className="method-card">

          <div className="method-image">
            <img src={traditionalImg} alt="Traditional Farming" />
          </div>

          <h3>🌾 Traditional Farming</h3>
          <p>
            Traditional farming is based on local knowledge passed through generations.
            It depends on seasons, natural rainfall, and local seeds.
          </p>
        </div>

        <div className="method-card highlight">

          <div className="method-image">
            <img src={organicImg} alt="Organic Farming" />
          </div>


          <h3>🌿 Organic Farming</h3>
          <p>
            Organic farming focuses on healthy soil, safe food, and sustainability.
            It avoids chemical fertilizers and promotes natural farming practices.
          </p>
        </div>

        <div className="method-card">

          <div className="method-image">
            <img src={smartImg} alt="Smart Farming" />
          </div>


          <h3>🚜 Smart Farming</h3>
          <p>
            Smart farming uses technology like weather data and soil insights
            to help farmers make better decisions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FarmingMethods;
