const express = require("express");
const router = express.Router();

const {
  detectLocation,
  manualLocation
} = require("../controllers/location.controller");

router.get("/detect", detectLocation);
router.post("/manual", manualLocation);

module.exports = router;
