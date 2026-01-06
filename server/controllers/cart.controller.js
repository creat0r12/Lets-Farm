const db = require("../db");

exports.addToCart = (req, res) => {
  const { user_id, product_id } = req.body;

  db.query(
    "INSERT INTO cart (user_id, product_id) VALUES (?, ?)",
    [user_id, product_id],
    (err) => {
      if (err) return res.status(500).json(err);
      res.json({ message: "Added to cart" });
    }
  );
};

exports.getCart = (req, res) => {
  const { userId } = req.params;

  db.query(
    `SELECT p.* FROM cart c
     JOIN products p ON c.product_id = p.id
     WHERE c.user_id = ?`,
    [userId],
    (err, rows) => {
      if (err) return res.status(500).json(err);
      res.json(rows);
    }
  );
};
