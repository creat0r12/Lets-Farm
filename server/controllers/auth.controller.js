const db = require("../db");
const bcrypt = require("bcryptjs");

exports.signup = async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ message: "All fields required" });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const sql =
    "INSERT INTO users (name, email, password) VALUES (?, ?, ?)";

  db.query(sql, [name, email, hashedPassword], (err, result) => {
    if (err) {
      return res.status(400).json({ message: "User already exists" });
    }

    // ✅ RETURN USER (THIS FIXES UI)
    res.json({
      user: {
        id: result.insertId,
        name,
        email
      }
    });
  });
};


exports.login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "All fields required" });
  }

  const sql = "SELECT * FROM users WHERE email = ?";
  db.query(sql, [email], async (err, results) => {
    if (err) {
      return res.status(500).json({ message: "DB error" });
    }

    if (results.length === 0) {
      return res.status(401).json({ message: "User not found" });
    }

    const user = results[0];

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid password" });
    }

    // ✅ THIS PART WAS MISSING OR WRONG
    res.json({
      user: {
        id: user.id,
        email: user.email,
        name: user.name
      }
    });
  });
};


exports.updateProfile = (req, res) => {
  const { id, name } = req.body;

  if (!id || !name) {
    return res.status(400).json({ message: "Missing data" });
  }

  const sql = "UPDATE users SET name = ? WHERE id = ?";

  db.query(sql, [name, id], (err) => {
    if (err) {
      return res.status(500).json({ message: "Update failed" });
    }

    res.json({
      user: { id, name }
    });
  });
};

