const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

/* =========================
   TEST ROUTE
========================= */
app.get("/test", (req, res) => {
  res.json({ status: "Server is working properly" });
});

/* =========================
   MAIN AI ROUTE
   (SIMPLE, STABLE, FRONTEND-FRIENDLY)
========================= */
app.post("/api/ai", (req, res) => {
  const {
    location = "",
    soil = "",
    farmingType = "",
    selectedCrop
  } = req.body || {};

  // Normalize crop value (very important)
  const crop = selectedCrop ?? "";

  /* =========================
     CASE 1: CROP NOT SELECTED
     → RETURN CROP OPTIONS ONLY
  ========================= */
  if (!crop) {
    let cropOptions = [];

    if (soil === "Black Soil") {
      cropOptions = ["Cotton", "Soybean", "Jowar"];
    } else if (soil === "Red Soil") {
      cropOptions = ["Groundnut", "Millets", "Pulses"];
    } else {
      cropOptions = [];
    }

    return res.json({
      cropOptions
    });
  }

  /* =========================
     CASE 2: CROP SELECTED
     → RETURN FULL GUIDANCE
  ========================= */
  const result = {
    summary: {
      title: "Crop guidance for your land",
      suitability: "Good for beginners",
      riskLevel: location === "Coastal" ? "Medium" : "Low"
    },
    whyThisCrop: "",
    bestSeason: "",
    firstActions: [],
    organicTips: [],
    precautions: []
  };

  /* ---------- CROP RULES ---------- */
  if (crop === "Cotton") {
    result.whyThisCrop =
      "Cotton is suitable for black soil because it retains moisture and supports deep root growth.";
    result.bestSeason = "June to July";
    result.firstActions.push(
      "Prepare land with compost or farmyard manure",
      "Ensure proper drainage to avoid waterlogging"
    );
    result.precautions.push(
      "Avoid excess irrigation",
      "Late sowing can reduce yield"
    );
  }

  if (crop === "Groundnut") {
    result.whyThisCrop =
      "Groundnut grows well in red soil due to good drainage and loose soil structure.";
    result.bestSeason = "June to early July";
    result.firstActions.push(
      "Loosen soil thoroughly before sowing",
      "Add organic matter to improve fertility"
    );
    result.precautions.push(
      "Soil dries quickly, plan irrigation",
      "Low fertility soil needs compost"
    );
  }

  if (crop === "Soybean") {
    result.whyThisCrop =
      "Soybean is a safer option with moderate water needs and good market demand.";
    result.bestSeason = "June to July";
    result.firstActions.push(
      "Prepare fine seedbed",
      "Ensure timely sowing after first rains"
    );
    result.precautions.push(
      "Avoid water stagnation",
      "Monitor for early pest attack"
    );
  }

  /* ---------- FARMING TYPE ---------- */
  if (farmingType === "Organic") {
    result.organicTips.push(
      "Use compost or vermicompost before sowing",
      "Avoid chemical fertilizers",
      "Use neem-based solutions for pest control"
    );
  } else {
    result.organicTips.push(
      "Use fertilizers only as recommended",
      "Avoid excessive chemical usage"
    );
  }

  return res.json(result);
});

/* =========================
   START SERVER
========================= */
app.listen(5000, () => {
  console.log("✅ Server running on http://localhost:5000");
});
