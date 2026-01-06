const express = require("express");
const router = express.Router();
const {
  addToCart,
  getCart
} = require("../controllers/cart.controller");

router.post("/", addToCart);
router.get("/:userId", getCart);

module.exports = router;


