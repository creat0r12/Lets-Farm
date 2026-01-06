import { useState, useEffect } from "react";
import "./LocationServices.css";

import { locationDummyData } from "./data/locationDummyData";
import { soilDataByDistrict } from "./data/soilData";
import { weatherDummyData } from "./data/weatherDummyData";

/* =========================
   TYPES
========================= */
type City = keyof typeof locationDummyData;

function LocationServices() {
  /* =========================
     DEFAULT LOCATION
  ========================= */
  const defaultCity: City = "Pune";
  const defaultState =
    locationDummyData[defaultCity].location.state;

  /* =========================
     STATE
  ========================= */
  const [useManual, setUseManual] = useState(false);
  const [selectedState, setSelectedState] = useState<string>(defaultState);
  const [district, setDistrict] = useState<City>(defaultCity);

  /* =========================
     DERIVED DATA
  ========================= */
  const states = Array.from(
    new Set(
      Object.values(locationDummyData).map(
        (item) => item.location.state
      )
    )
  );

  const citiesByState = (
    Object.keys(locationDummyData) as City[]
  ).filter(
    (city) =>
      locationDummyData[city].location.state === selectedState
  );

  const selectedData = locationDummyData[district];

  const soilInfo =
    soilDataByDistrict[district] || {
      soil: "General soil",
      note: "General farming practices recommended",
    };

  const weatherInfo =
    weatherDummyData[district] || {
      temperature: 0,
      condition: "N/A",
      rainfall: "N/A",
      note: "Weather data unavailable",
    };

  /* =========================
     SYNC CITY WHEN STATE CHANGES
  ========================= */
  useEffect(() => {
    if (
      citiesByState.length > 0 &&
      !citiesByState.includes(district)
    ) {
      setDistrict(citiesByState[0]);
    }
  }, [selectedState]);

  /* =========================
     SAVE LOCATION
  ========================= */
  useEffect(() => {
    localStorage.setItem(
      "userLocation",
      JSON.stringify({
        state: selectedData.location.state,
        district: selectedData.location.district,
      })
    );
  }, [district]);

  /* =========================
     LIVE LOCATION (DEMO)
  ========================= */
  const handleLiveLocation = () => {
    setUseManual(false);
    setSelectedState("Maharashtra");
    setDistrict("Shirpur");
  };

  /* =========================
     UI
  ========================= */
  return (
    <div className="location-page">

      {/* HEADER */}
      <section className="location-header">
        <h1>Location-Based Farming Guidance</h1>
        <p>State and city based smart farming insights</p>
      </section>

      {/* ACTION BUTTONS */}
      <section className="location-actions">

        <button
          className="primary-btn"
          onClick={handleLiveLocation}
        >
          📍 Use Live Location
        </button>

        <button
          className="secondary-btn"
          onClick={() => setUseManual(!useManual)}
        >
          📍 Choose location manually
        </button>

        {/* MANUAL LOCATION */}
        {useManual && (
          <section className="location-box manual-select">
            <h2>📍 Select Your Location</h2>

            {/* STATE */}
            <label>
              <strong>State:</strong>
              <select
                value={selectedState}
                onChange={(e) => setSelectedState(e.target.value)}
                style={{ marginLeft: "10px" }}
              >
                {states.map((state) => (
                  <option key={state} value={state}>
                    {state}
                  </option>
                ))}
              </select>
            </label>

            <br /><br />

            {/* CITY */}
            <label>
              <strong>City / District:</strong>
              <select
                value={district}
                onChange={(e) =>
                  setDistrict(e.target.value as City)
                }
                style={{ marginLeft: "10px" }}
              >
                {citiesByState.map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
              </select>
            </label>
          </section>
        )}

        {/* LOCATION INFO */}
        <section className="location-box info-card">
          <h2>Your Location</h2>
          <p><strong>State:</strong> {selectedData.location.state}</p>
          <p><strong>District:</strong> {selectedData.location.district}</p>
          <p><strong>Climate:</strong> {selectedData.soil.climate}</p>
        </section>

        {/* WEATHER */}
        <section className="location-box info-card">
          <h2>🌦 Weather Overview</h2>
          <p><strong>Temperature:</strong> {weatherInfo.temperature}°C</p>
          <p><strong>Condition:</strong> {weatherInfo.condition}</p>
          <p><strong>Rainfall:</strong> {weatherInfo.rainfall}</p>
          <em>{weatherInfo.note}</em>
        </section>

        {/* ACTION CARDS */}
        <div className="action-cards-container">

          <div className="action-card">
            🌾 Crop Guidance
            <p>
              <strong>Recommended:</strong>{" "}
              {selectedData.farming_direction}
            </p>
          </div>

          <div className="action-card">
            🌱 Soil Information
            <p><strong>Soil Type:</strong> {soilInfo.soil}</p>
            <p><em>{soilInfo.note}</em></p>
          </div>

          <div className="action-card">
            ♻️ Organic Pesticides
            <ul>
              <li>Neem oil spray</li>
              <li>Chilli–garlic extract</li>
              <li>Buttermilk spray</li>
              <li>Trichoderma (bio-fungicide)</li>
            </ul>
          </div>

        </div>

      </section>
    </div>
  );
}

export default LocationServices;
