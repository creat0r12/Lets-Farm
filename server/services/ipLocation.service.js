const axios = require("axios");

exports.getLocationFromIP = async (ip) => {
  try {
    const { data } = await axios.get(
      `https://ipapi.co/${ip}/json/`
    );

    return {
      country: data.country_name,
      state: data.region,
      district: data.city,
      latitude: data.latitude,
      longitude: data.longitude
    };
  } catch (error) {
    console.error("IP Location error:", error.message);
    return null;
  }
};
