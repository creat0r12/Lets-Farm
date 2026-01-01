import { useState } from "react";
import "./LocationServices.css";

import { locationDummyData } from "./data/locationDummyData";
import { soilDataByDistrict } from "./data/soilData";
import { weatherDummyData } from "./data/weatherDummyData";




function LocationServices() {

    const [useManual, setUseManual] = useState(false);
    const [manualDistrict, setManualDistrict] = useState("");


    const district = locationDummyData.location.district;

    const soilInfo =
        soilDataByDistrict[district] || {
            soil: "Soil data not available",
            note: "General farming practices recommended",
        };


    // 🔒 Save detected location for SmartCropAdvisor (MVP bridge)
    localStorage.setItem(
        "userLocation",
        JSON.stringify({
            state: locationDummyData.location.state,
            district: locationDummyData.location.district
        })
    );


    return (
        <div className="location-page">

            {/* HEADER */}
            <section className="location-header">
                <h1>Location-Based Farming Guidance</h1>
                <p>
                    Farming advice tailored to your region, climate, and conditions.
                </p>
            </section>


            {/* WHY LOCATION */}
            <section className="location-intro">
                <h2>Why We Ask for Your Location</h2>

                <p>
                    Farming is deeply connected to location. Soil type, climate,
                    rainfall, and crops vary from place to place.
                </p>

                <p>
                    By knowing your location, we can provide you with
                    <strong> accurate and useful farming guidance </strong>
                    that actually works for your area — not general advice.
                </p>

                <ul>
                    <li>✔ Region-specific crop recommendations</li>
                    <li>✔ Soil & climate based farming guidance</li>
                    <li>✔ Organic farming suitability for your area</li>
                    <li>✔ Seasonal and local insights</li>
                </ul>

                <p>
                    If you don’t want to use automatic detection, you can
                    manually select your location and continue.
                </p>

                <p className="privacy-note">
                    🔒 Your location data is safe with us. We use it only to provide
                    farming guidance and never misuse or share your information.
                </p>
            </section>



            {/* SERVICES */}
            <section className="location-box">
                <h2>What You Get Here</h2>
                <ul>
                    <li>✔ Region-based crop guidance</li>
                    <li>✔ Soil type and preparation basics</li>
                    <li>✔ Live climate and rainfall awareness</li>
                    <li>✔ Organic farming suitability insights</li>

                </ul>
            </section>

            {/* ACTIONS */}
            <section className="location-actions">

                {/* USE MY LOCATION BUTTON */}
                <button className="primary-btn">
                    📍 Location Detected (Demo)
                </button>


                <button
                    className="secondary-btn"
                    onClick={() => setUseManual(!useManual)}
                >
                    📍 Choose location manually (if GPS fails)

                </button>


                {useManual && (
                    <section className="location-box manual-select">

                        <h2>📍 Select Your Location</h2>

                        <p>
                            <strong>Country:</strong> India
                        </p>

                        <p>
                            <strong>State:</strong> Maharashtra
                        </p>

                        <label>
                            <strong>District:</strong>
                            <select
                                value={manualDistrict}
                                onChange={(e) => setManualDistrict(e.target.value)}
                                style={{ marginLeft: "10px" }}
                            >
                                <option value="">Select district</option>
                                <option value="Pune">Pune</option>
                                <option value="Nashik">Nashik</option>
                                <option value="Nagpur">Nagpur</option>
                                <option value="Kolhapur">Kolhapur</option>
                                <option value="Ratnagiri">Ratnagiri</option>
                            </select>
                        </label>
                    </section>
                )}





                {/* LOCATION INFO */}
                <section className="location-box">
                    <h2>Your Location</h2>
                    <p>
                        <strong>Region:</strong>{" "}
                        {locationDummyData.location.state},{" "}
                        {locationDummyData.location.district}
                    </p>

                    <p>
                        <strong>Climate:</strong>{" "}
                        {locationDummyData.soil.climate}
                    </p>

                    <p>
                        <strong>Season:</strong> Based on current weather
                    </p>

                </section>



                {/* 
  NOTE FOR TEAM:
  This is dummy weather data for MVP.
  Live API (OpenWeather / IMD) can be added later.
*/}

                {/* LIVE WEATHER (DUMMY DATA) */}
                <section className="location-box">
                    <h2>🌦 Weather Overview</h2>

                    <p>
                        <strong>Temperature:</strong> {weatherDummyData.temperature}°C
                    </p>

                    <p>
                        <strong>Condition:</strong> {weatherDummyData.condition}
                    </p>

                    <p>
                        <strong>Rainfall:</strong> {weatherDummyData.rainfall}
                    </p>

                    <p>
                        <em>{weatherDummyData.note}</em>
                    </p>
                </section>






                {/* ACTION CARDS */}
                <div className="action-card">
                    🌾 Crop Guidance
                    <p>Based on soil and climate</p>
                </div>

                <div className="action-card">
                    🌱 Soil Information
                    <p>
                        <strong>Soil Type:</strong> {soilInfo.soil}
                    </p>

                    <p>
                        <em>{soilInfo.note}</em>
                    </p>
                </div>

                <div className="action-card">
                    🌦 Climate Insights
                    <p>Live weather awareness</p>
                </div>

                <div className="action-card">
                    ♻️ Organic Practices
                    <p>Suitability for your region</p>
                </div>

            </section>


        </div>
    );
}

export default LocationServices;
