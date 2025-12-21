import { useState } from "react";
import "./GuidedLearning.css";
import LearningWhy from "./LearningWhy";
import LearningBasics from "./LearningBasics";
import LearningSoil from "./LearningSoil";
import LearningCrop from "./LearningCrop";
import LearningMethods from "./LearningMethods";
import LearningRegion from "./LearningRegion";




function Learning() {
  // STEP STATES
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [soil, setSoil] = useState("");
  const [method, setMethod] = useState("organic"); // default





  return (
    <div className="guided-learning">

      {/* SECTION 1: WHY LEARN FARMING */}
      <LearningWhy />
      <LearningBasics />
      <LearningSoil />
      <LearningCrop />
      <LearningMethods />
      <LearningRegion />

      {/* INTRO */}
      <h1>Learning Farming</h1>
      <p>
        Farming depends on where you are, what soil you have, and which season it is.
        Let’s learn this step by step — no prior knowledge needed.
      </p>

      <hr style={{ margin: "2rem 0" }} />

      {/* STEP 1: LOCATION */}
      <h2>Step 1: Location</h2>

      <label>
        Select State:
        <br />
        <select value={state} onChange={(e) => setState(e.target.value)}>
          <option value="">-- Select State --</option>
          <option value="Maharashtra">Maharashtra</option>
          <option value="Gujarat">Gujarat</option>
          <option value="Punjab">Punjab</option>
        </select>
      </label>

      <br /><br />

      <label>
        City / Village (optional):
        <br />
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city or village"
        />
      </label>

      {/* STEP 2: SEASON & CLIMATE */}
      {state && (
        <>
          <hr style={{ margin: "2rem 0" }} />
          <h2>Step 2: Season & Climate</h2>
          <p>
            Based on your region, the current farming season is <b>Kharif</b>.
          </p>
          <p>Rainfall: Medium to High</p>
          <p>Temperature: 25–35°C</p>
        </>
      )}

      {/* STEP 3: SOIL TYPE */}
      {state && (
        <>
          <hr style={{ margin: "2rem 0" }} />
          <h2>Step 3: Soil Type</h2>

          <select value={soil} onChange={(e) => setSoil(e.target.value)}>
            <option value="">-- Select Soil Type --</option>
            <option value="Black">Black Soil</option>
            <option value="Red">Red Soil</option>
            <option value="Alluvial">Alluvial Soil</option>
          </select>

          <br /><br />

          <button onClick={() => setSoil("Black")}>
            I don’t know (Use common soil)
          </button>
        </>
      )}

      {/* STEP 4: FARMING METHOD */}
      {soil && (
        <>
          <hr style={{ margin: "2rem 0" }} />
          <h2>Step 4: Farming Method</h2>

          <label>
            <input
              type="radio"
              value="organic"
              checked={method === "organic"}
              onChange={() => setMethod("organic")}
            />
            🌿 Organic Farming (Recommended)
          </label>

          <br />

          <label>
            <input
              type="radio"
              value="inorganic"
              checked={method === "inorganic"}
              onChange={() => setMethod("inorganic")}
            />
            🧪 Inorganic Farming
          </label>

          <p style={{ marginTop: "1rem" }}>
            <b>Selected method:</b>{" "}
            {method === "organic"
              ? "Organic farming is safer and better for beginners."
              : "Inorganic farming gives faster results but needs experience."}
          </p>
        </>
      )}
    </div>
  );
}

export default Learning;
