const express = require("express");
const router = express.Router();
const db = require("../db"); // adjust path if needed

/* =========================
   STORE FEEDBACK
========================= */
router.post("/", (req, res) => {
  const { name, message, rating } = req.body;

  if (!name || !message || !rating) {
    return res.status(400).json({
      success: false,
      message: "All fields are required",
    });
  }

  const sql =
    "INSERT INTO feedback (name, message, rating) VALUES (?, ?, ?)";

  db.query(sql, [name, message, rating], (err, result) => {
    if (err) {
      console.error("❌ Feedback insert error:", err);
      return res.status(500).json({
        success: false,
        message: "Database error",
      });
    }

    res.status(201).json({
      success: true,
      message: "Feedback stored successfully",
      feedbackId: result.insertId,
    });
  });
});

module.exports = router;
