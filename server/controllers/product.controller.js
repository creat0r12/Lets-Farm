const db = require("../db");

exports.getProducts = (req, res) => {
  db.query("SELECT * FROM products", (err, rows) => {
    if (err) return res.status(500).json(err);
    res.json(rows);
  });
};

exports.addProduct = (req, res) => {
  const product = req.body;

  db.query(
    "INSERT INTO products SET ?",
    product,
    (err) => {
      if (err) return res.status(500).json(err);
      res.json({ message: "Product added successfully" });
    }
  );
};

exports.updateProduct = (req, res) => {
  const { id } = req.params;

  db.query(
    "UPDATE products SET ? WHERE id = ?",
    [req.body, id],
    (err) => {
      if (err) return res.status(500).json(err);
      res.json({ message: "Product updated" });
    }
  );
};
