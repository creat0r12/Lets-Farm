const express = require("express");
const router = express.Router();
const { signup, login, updateProfile } = require("../controllers/auth.controller");

router.post("/signup", signup);
router.post("/login", login);
router.post("/update-profile", updateProfile);
module.exports = router;