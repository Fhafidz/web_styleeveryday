const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { validationResult } = require("express-validator");
const database = require("../model/database");
const { SECRET } = require("../config/appConfig");
require('dotenv').config(); // Make sure to require dotenv at the top of your file

async function register(req, res) {
  const { username, email, password } = req.body;

  const errors = validationResult(req);
  if (!errors.isEmpty())
    return res.status(400).json({
      message: "Bad request",
      errors: errors.array(),
    });

  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // CHECK APAKAH USER UDAH DI DATABASE
    const [user] = await database.query(
      `SELECT  email FROM useraccount WHERE email = ?`,
      [email]
    );

    if (user.length > 0)
      return res.json({
        error: "Use another email!",
      });

    // SAVE NEW USER
    const [newUser] = await database.query(
      `INSERT INTO users (username, email, password) VALUES (?, ?, ?)`,
      [username, email, hashedPassword]
    );

    if (newUser.affectedRows > 0) return res.json({ message: "User created!" });
  } catch (error) {
    console.error(error);
    return res.status(400).json({
      error: "Failed to register!",
    });
  }
}

async function login(req, res) {
  const { email, password } = req.body;
  const errors = validationResult(req);
  if (!errors.isEmpty())
    return res.status(400).json({
      message: "Bad request",
      errors: errors.array(),
    });

  try {
    const [users] = await database.query(
      `SELECT useraccount_id, password FROM useraccount WHERE email = ?`,
      [email]
    );
    if (users.length === 0)
      return res.status(400).json({ error: "Invalid email or password" });

    const user = users[0];

    // VERIFIKASI PASSWORD
    const isValidPassword = await bcrypt.compare(password, user.password);

    if (!isValidPassword) {
      return res.status(400).json({ error: "Invalid email or password" });
    }

    // BUAT JWT TOKEN
    const jwtSecret = process.env.JWT_SECRET;
    const token = jwt.sign({ useraccount_id: user.useraccount_id }, jwtSecret, {
      expiresIn: "60m",
      algorithm: "HS256",
    });

    res.json({
      token,
      user: {
        useraccount_id: user.useraccount_id
      }
    });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}

async function logout(req, res) {
    const { useraccount_id } = req.body; // Assuming you send useraccount_id when calling logout

    try {
        // Clear the refresh_token in the database
        const [result] = await database.query(
            `UPDATE useraccount SET refresh_token = NULL WHERE useraccount_id = ?`,
            [useraccount_id]
        );

        if (result.affectedRows > 0) {
            res.json({ message: "Logged out successfully!" });
        } else {
            res.status(400).json({ error: "Failed to log out" });
        }
    } catch (error) {
        console.error("Logout error:", error);
        res.status(500).json({ error: "Internal server error" });
    }
}

module.exports = {
  register,
  login,
  logout, // Add the logout function to the exports
};
