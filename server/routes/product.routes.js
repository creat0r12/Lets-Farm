const express = require("express");
const router = express.Router();
const {
  getProducts,
  addProduct,
  updateProduct
} = require("../controllers/product.controller");

router.get("/", getProducts);
router.post("/", addProduct);       // farmer
router.put("/:id", updateProduct);  // farmer

module.exports = router;
