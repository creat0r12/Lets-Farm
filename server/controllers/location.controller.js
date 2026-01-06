const { getLocationFromIP } = require("../services/ipLocation.service");

const soilDataByDistrict = {
  Pune: { soil: "Black Soil", climate: "Moderate rainfall" },
  Nashik: { soil: "Red Soil", climate: "Dry climate" },
  Nagpur: { soil: "Black Soil", climate: "Hot climate" },
  Kolhapur: { soil: "Laterite Soil", climate: "High rainfall" },
  Ratnagiri: { soil: "Laterite Soil", climate: "Coastal climate" }
};

/* =========================
   AUTO DETECT LOCATION
========================= */
exports.detectLocation = async (req, res) => {
  const ip =
    req.headers["x-forwarded-for"] ||
    req.socket.remoteAddress;

  const location = await getLocationFromIP(ip);

  if (!location) {
    return res.status(500).json({
      message: "Unable to detect location"
    });
  }

  const soilInfo =
    soilDataByDistrict[location.district] || {
      soil: "Soil data not available",
      climate: "General climate"
    };

  res.json({
    location,
    soilInfo
  });
};

/* =========================
   MANUAL LOCATION
========================= */
exports.manualLocation = (req, res) => {
  const { state, district } = req.body;

  if (!state || !district) {
    return res.status(400).json({
      message: "State and district required"
    });
  }

  const soilInfo =
    soilDataByDistrict[district] || {
      soil: "Soil data not available",
      climate: "General climate"
    };

  res.json({
    location: {
      country: "India",
      state,
      district
    },
    soilInfo
  });
};
