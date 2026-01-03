const express = require("express");
const router = express.Router();
const { chatWithBot } = require("../controllers/chat.controller");

router.post("/", chatWithBot);

module.exports = router;