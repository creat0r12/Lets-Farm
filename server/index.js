const express = require("express");
const cors = require("cors");
require("dotenv").config();


/* =========================
   DATABASE CONNECTION
========================= */
require("./db");

/* =========================
   ROUTES IMPORT
========================= */
const authRoutes = require("./routes/auth.routes");
const chatRoutes = require("./routes/chat.routes");

const app = express();

/* =========================
   MIDDLEWARES
========================= */
app.use(
  cors({
    origin: "http://localhost:5173", // Vite frontend
    credentials: true
  })
);
app.use(express.json());

/* =========================
   HEALTH / TEST ROUTE
========================= */
app.get("/test", (req, res) => {
  res.json({
    status: "Server is working properly",
    time: new Date().toISOString()
  });
});

/* =========================
   AUTH ROUTES
========================= */
app.use("/api/auth", authRoutes);

/* =========================
   CHATBOT ROUTE
========================= */
app.use("/api/chat", chatRoutes);

/* =========================
   SMART CROP ADVISOR (ENHANCED)
========================= */
app.post("/api/ai", (req, res) => {
  const {
    location = "",
    soil = "",
    farmingType = "Organic",
    selectedCrop
  } = req.body || {};

  const crop = selectedCrop ?? "";

  /* =========================
     STEP 1: CROP OPTIONS
  ========================= */
  if (!crop) {
    let cropOptions = [];

    if (soil === "Black Soil") {
      cropOptions = ["Cotton", "Soybean", "Jowar"];
    } else if (soil === "Red Soil") {
      cropOptions = ["Groundnut", "Millets", "Pulses"];
    } else {
      cropOptions = ["Millets", "Pulses"];
    }

    return res.json({
      cropOptions,
      note:
        "These crops are selected based on your soil type and are beginner-friendly."
    });
  }

  /* =========================
     STEP 2: BASE RESPONSE
  ========================= */
  const result = {
    summary: {
      title: `Crop guidance for ${crop}`,
      suitability: "Beginner Friendly",
      riskLevel: location === "Coastal" ? "Medium" : "Low"
    },

    whyThisCrop: "",
    bestSeason: "",
    cropDuration: "",
    waterRequirement: "",
    expectedYield: "",
    firstActions: [],
    organicTips: [],
    precautions: []
  };

  /* =========================
     CROP: COTTON
  ========================= */
  if (crop === "Cotton") {
    result.whyThisCrop =
      "Cotton grows very well in black soil because it retains moisture and nutrients. This makes cotton suitable for long-duration crops.";

    result.bestSeason = "June to July (Kharif season)";
    result.cropDuration = "160–180 days";
    result.waterRequirement =
      "Moderate but regular irrigation. Avoid waterlogging.";
    result.expectedYield =
      "8–12 quintals per acre (depends on seed variety and care).";

    result.firstActions = [
      "Deep ploughing before monsoon",
      "Mix compost or FYM into soil",
      "Use certified seeds",
      "Maintain proper row spacing"
    ];

    result.precautions = [
      "Avoid excess irrigation",
      "Pest monitoring is important",
      "Late sowing reduces yield"
    ];
  }

  /* =========================
     CROP: SOYBEAN
  ========================= */
  if (crop === "Soybean") {
    result.whyThisCrop =
      "Soybean is a short-duration crop and improves soil fertility by fixing nitrogen. It is ideal for beginners.";

    result.bestSeason = "June to early July";
    result.cropDuration = "90–110 days";
    result.waterRequirement =
      "Low to moderate. Excess water can damage roots.";
    result.expectedYield =
      "10–14 quintals per acre under good practices.";

    result.firstActions = [
      "Light ploughing and leveling",
      "Seed treatment with bio-fertilizer",
      "Sow at correct depth",
      "Ensure proper drainage"
    ];

    result.precautions = [
      "Avoid water stagnation",
      "Use disease-resistant varieties",
      "Timely weeding is important"
    ];
  }

  /* =========================
     CROP: JOWAR
  ========================= */
  if (crop === "Jowar") {
    result.whyThisCrop =
      "Jowar is drought-resistant and suitable for semi-arid regions. It requires less water and input cost.";

    result.bestSeason = "June to July";
    result.cropDuration = "100–120 days";
    result.waterRequirement =
      "Low. Can grow with rainfall.";
    result.expectedYield =
      "8–10 quintals per acre.";

    result.firstActions = [
      "Prepare soil with minimal tillage",
      "Use organic manure",
      "Sow seeds evenly",
      "Thin plants after germination"
    ];

    result.precautions = [
      "Avoid overcrowding plants",
      "Protect from birds in early stage"
    ];
  }

  /* =========================
     ORGANIC GUIDANCE
  ========================= */
  if (farmingType === "Organic") {
    result.organicTips.push(
      "Use vermicompost or farmyard manure",
      "Apply neem cake for pest prevention",
      "Avoid chemical fertilizers",
      "Use cow-based bio inputs if available"
    );
  }

  /* =========================
     FINAL RESPONSE
  ========================= */
  res.json(result);
});

/* =========================
   GLOBAL ERROR HANDLER
========================= */
app.use((err, req, res, next) => {
  console.error("❌ Server Error:", err);
  res.status(500).json({
    message: "Internal server error"
  });
});

/* =========================
   START SERVER
========================= */
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
