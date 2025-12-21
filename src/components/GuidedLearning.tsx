import { useState } from "react";
import "./GuidedLearning.css";

import LearningWhy from "./LearningWhy";
import LearningBasics from "./LearningBasics";
import LearningSoil from "./LearningSoil";
import LearningCrop from "./LearningCrop";
import LearningMethods from "./LearningMethods";
import LearningRegion from "./LearningRegion";
import GuidedCTA from "./GuidedCTA";
// import LearningBox from "./LearningBox";


function GuidedLearning() {

  // GUIDE CONTROL
  const [startGuide, setStartGuide] = useState(false);

  // STEP STATES
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [soil, setSoil] = useState("");
  const [method, setMethod] = useState("organic");

  // STEP PROGRESS LOGIC
  const getCurrentStep = () => {
    if (!state) return 1;
    if (state && !soil) return 2;
    if (soil && !method) return 3;
    return 4;
  };


  return (
    <div id="guided-learning" className="guided-learning">

      {/* ========================= */}
      {/* PART 1: LEARNING CONTENT */}
      {/* ========================= */}

      <LearningWhy />
      <LearningBasics />
      <LearningSoil />
      <LearningCrop />
      <LearningMethods />
      <LearningRegion />
      {/* <LearningBox /> */}

      <GuidedCTA
  onStart={() => {
    setStartGuide(true);

    setTimeout(() => {
      document
        .getElementById("learning-path")
        ?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }}
/>


      {/* ========================= */}
      {/* PART 2: GUIDED JOURNEY */}
      {/* ========================= */}

      {startGuide && (
  <div   id="learning-path">

    <h1>Guided Farming Journey</h1>
    <p>
      Answer a few questions and we’ll guide you step by step.
      No prior farming knowledge required.
    </p>

    {/* 🔽 ADD THIS BLOCK HERE */}
    <p style={{ marginBottom: "1rem", fontWeight: "bold" }}>
      Step {getCurrentStep()} of 4
    </p>

    <div className="progress-bar">
      <div
        className="progress-fill"
        style={{ width: `${(getCurrentStep() / 4) * 100}%` }}
      />
    </div>
    {/* 🔼 END HERE */}

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

{/* SMART FEEDBACK */}
{state && (
  <p style={{ marginTop: "0.5rem", color: "#2e7d32", fontWeight: 500 }}>
    ✅ Farming guidance will be personalized for <b>{state}</b>
  </p>
)}

<br />

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

{city && (
  <p style={{ marginTop: "0.5rem", color: "#1565c0" }}>
    📍 Local insights will be adjusted for <b>{city}</b>
  </p>
)}


          {/* STEP 2: SEASON */}
          {state && (
            <>
              <hr style={{ margin: "2rem 0" }} />
              <h2>Step 2: Season & Climate</h2>
              <p>
                Based on <b>{state}</b>, current farming season is <b>Kharif</b>.
              </p>
              <p>Rainfall: Medium to High</p>
              <p>Temperature: 25–35°C</p>
            </>
          )}

          {/* STEP 3: SOIL */}
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
                  checked={method === "organic"}
                  onChange={() => setMethod("organic")}
                />
                🌿 Organic Farming (Recommended)
              </label>

              <br />

              <label>
                <input
                  type="radio"
                  checked={method === "inorganic"}
                  onChange={() => setMethod("inorganic")}
                />
                🧪 Inorganic Farming
              </label>

              <p style={{ marginTop: "1rem" }}>
                <b>Selected method:</b>{" "}
                {method === "organic"
                  ? "Organic farming is safer, sustainable, and ideal for beginners."
                  : "Inorganic farming gives faster results but needs experience."}
              </p>
            </>
          )}

          {/* STEP 5: SUMMARY */}
{method && (
  <>
    <hr style={{ margin: "2rem 0" }} />
    <h2>Summary</h2>

    <p><b>State:</b> {state}</p>
    {city && <p><b>City:</b> {city}</p>}
    <p><b>Soil Type:</b> {soil}</p>
    <p><b>Farming Method:</b> {method}</p>

    <p style={{ marginTop: "1rem", color: "#2e7d32", fontWeight: 500 }}>
      ✅ Based on your inputs, we’ll guide you step by step.
    </p>
    <p style={{ marginTop: "1rem", fontSize: "14px", color: "#777" }}>
  🔒 You can restart the guide anytime to change selections.
</p>

  </>
)}


        </div>
      )}
    </div>
  );
  
}


export default GuidedLearning;

