import { useState } from "react";
import "./SmartCropAdvisor.css";

function SmartCropAdvisor() {
  // user inputs
  const [location, setLocation] = useState("");
  const [soil, setSoil] = useState("");
  const [farmingType, setFarmingType] = useState("Organic");

  // crop flow
  const [cropOptions, setCropOptions] = useState<string[]>([]);
  const [selectedCrop, setSelectedCrop] = useState("");

  // result
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  /* =========================
     BACKEND FETCH (UNCHANGED)
  ========================= */
  const fetchFromBackend = async () => {
    setLoading(true);

    try {
      const res = await fetch("http://localhost:5000/api/ai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          location,
          soil,
          farmingType,
          selectedCrop: selectedCrop || null,
        }),
      });

      const data = await res.json();

      // CASE 1: Crop not selected → show crop options
      if (!selectedCrop && Array.isArray(data.cropOptions)) {
        setCropOptions(data.cropOptions);
        setResult(null);
        setLoading(false);
        return;
      }

      // CASE 2: Crop selected → show full result
      setResult(data);

    } catch (err) {
      alert("Server error. Please check backend.");
    } finally {
      setLoading(false);
    }
  };

  /* =========================
     EDIT / RESET HANDLERS
  ========================= */
  const resetFromCrop = () => {
    setSelectedCrop("");
    setResult(null);
  };

  const resetAll = () => {
    setLocation("");
    setSoil("");
    setFarmingType("Organic");
    setCropOptions([]);
    setSelectedCrop("");
    setResult(null);
  };

  return (
    <div className="smart-crop-advisor">
      <div className="box">

        <h1 className="title">🌱 Smart Crop Advisor</h1>
        <p className="subtitle">
          Simple guidance based on your land and farming preference
        </p>

        {/* =========================
           LOCATION
        ========================= */}
        <div className="form-section">
          <label>📍 Location</label>
          <select
            value={location}
            onChange={(e) => {
              setLocation(e.target.value);
              setSoil("");
              setCropOptions([]);
              setSelectedCrop("");
              setResult(null);
            }}
          >
            <option value="">Select location</option>
            <option value="Maharashtra">Maharashtra</option>
            <option value="Coastal">Coastal</option>
          </select>
        </div>

        {/* =========================
           SOIL
        ========================= */}
        <div className={`form-section ${!location ? "disabled" : ""}`}>
          <label>🌾 Soil Type</label>
          <select
            value={soil}
            disabled={!location}
            onChange={(e) => {
              setSoil(e.target.value);
              setCropOptions([]);
              setSelectedCrop("");
              setResult(null);
            }}
          >
            <option value="">Select soil type</option>
            <option value="Black Soil">Black Soil</option>
            <option value="Red Soil">Red Soil</option>
          </select>
        </div>

        {/* =========================
           FARMING TYPE
        ========================= */}
        <div className={`form-section ${!soil ? "disabled" : ""}`}>
          <label>🌱 Farming Style</label>
          <select
            value={farmingType}
            disabled={!soil}
            onChange={(e) => {
              setFarmingType(e.target.value);
              setCropOptions([]);
              setSelectedCrop("");
              setResult(null);
            }}
          >
            <option value="Organic">Organic (Recommended)</option>
            <option value="Inorganic">Inorganic</option>
          </select>
        </div>

        {/* =========================
           GET CROP OPTIONS
        ========================= */}
        {location && soil && cropOptions.length === 0 && !result && (
          <button
            className="generate-btn"
            onClick={fetchFromBackend}
          >
            Show Suitable Crops
          </button>
        )}

        {/* =========================
           CROP SELECTION
        ========================= */}
        {cropOptions.length > 0 && !result && (
          <>
            <h3 className="section-title">🌿 Select Crop</h3>

            <div className="crop-grid">
              {cropOptions.map((crop) => (
                <button
                  key={crop}
                  className={`crop-card ${selectedCrop === crop ? "active" : ""}`}
                  onClick={() => setSelectedCrop(crop)}
                >
                  {crop}
                </button>
              ))}
            </div>

            <button
              className="generate-btn"
              disabled={!selectedCrop}
              onClick={fetchFromBackend}
            >
              Get Detailed Guidance
            </button>
          </>
        )}

        {/* =========================
           RESULT (ONLY AFTER CROP)
        ========================= */}
        {result && selectedCrop && (
          <div className="result-box">
            <h2>🌾 {selectedCrop} Guidance</h2>

            {/* SUMMARY */}
            {result.summary && (
              <>
                <p><strong>Suitability:</strong> {result.summary.suitability}</p>
                <p><strong>Risk Level:</strong> {result.summary.riskLevel}</p>
              </>
            )}

            {/* WHY */}
            {result.whyThisCrop && (
              <p><strong>Why this crop:</strong> {result.whyThisCrop}</p>
            )}

            {/* SEASON */}
            {result.bestSeason && (
              <p><strong>Best Season:</strong> {result.bestSeason}</p>
            )}

            {/* FIRST ACTIONS */}
            {Array.isArray(result.firstActions) && result.firstActions.length > 0 && (
              <>
                <h4>First Actions</h4>
                <ul>
                  {result.firstActions.map((a: string, i: number) => (
                    <li key={i}>{a}</li>
                  ))}
                </ul>
              </>
            )}

            {/* ORGANIC TIPS */}
            {Array.isArray(result.organicTips) && result.organicTips.length > 0 && (
              <>
                <h4>Organic Tips</h4>
                <ul>
                  {result.organicTips.map((t: string, i: number) => (
                    <li key={i}>{t}</li>
                  ))}
                </ul>
              </>
            )}

            {/* PRECAUTIONS */}
            {Array.isArray(result.precautions) && result.precautions.length > 0 && (
              <>
                <h4>Precautions</h4>
                <ul>
                  {result.precautions.map((p: string, i: number) => (
                    <li key={i}>{p}</li>
                  ))}
                </ul>
              </>
            )}

            {/* EDIT BUTTONS */}
            <div style={{ marginTop: "1.5rem" }}>
              <button className="edit-btn" onClick={resetFromCrop}>
                ✏️ Change Crop
              </button>{" "}
              <button className="edit-btn" onClick={resetAll}>
                🔄 Start Over
              </button>
            </div>
          </div>
        )}

        {loading && <p className="loading">Analyzing your inputs…</p>}
      </div>
    </div>
  );
}

export default SmartCropAdvisor;
