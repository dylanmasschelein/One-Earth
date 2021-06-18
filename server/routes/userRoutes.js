// Admin
const express = require("express");
const router = express.Router();
const uri = process.env.NODE_MONGO_URI;
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const authorize = require("../middleware/authorize");
const User = require("../model/user");
const secret = process.env.JWT_SECRET;
// Mongo
const mongoose = require("mongoose");
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

function validateInput(input) {
  if (!input || typeof input !== "string") {
    return res.json({ status: "error", error: "Invalid entry" });
  }
}

router
  .get("/current", authorize, async (req, res) => {
    try {
      const user = await User.findOne({ id: req.decoded.id });
      delete user.password;
      res.json(user);
    } catch (err) {
      return res.status(400).json({ status: "error" });
    }
  })

  // create token on reguister? -- or login after register?

  // REGISTER ---------------------------------------------
  .post("/register", async (req, res) => {
    const {
      email,
      password: incomingPassword,
      confirmPassword,
      firstName,
      lastName,
      address,
      city,
      country,
      about,
      volunteer,
      followedAreas,
    } = req.body;

    validateInput(firstName);
    validateInput(lastName);
    validateInput(address);
    validateInput(city);
    validateInput(country);
    validateInput(about);

    if (!email || typeof email !== "string") {
      return res.json({ status: "error", error: "Invalid email" });
    }

    if (incomingPassword !== confirmPassword) {
      return res.json({ status: "error", error: "Passwords must match" });
    }

    // Check if password exists and is a string
    if (!incomingPassword || typeof incomingPassword !== "string") {
      return res.json({ status: "error", error: "Invalid password" });
    }

    // Check to ensure password is 8+ charachters
    if (incomingPassword.length < 8) {
      return res.json({
        status: "error",
        error: "Password too short. Should be at least 8 characters",
      });
    }

    // Hashing password
    const password = await bcrypt.hash(incomingPassword, 8);

    try {
      const result = await User.create({
        email,
        username: email,
        password,
        firstName,
        lastName,
        address,
        city,
        country,
        about,
        volunteer,
        followedAreas,
      });
      console.log("created user", result);
    } catch (err) {
      return res.json({ status: "error", error: "Issues creating new user" });
    }

    res.json({ status: "ok" });
  })

  // LOGIN --------------------------------------
  .post("/login", async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email }).lean();

    if (!user) {
      return res.json({ status: "error", error: "Invalid email/password" });
    }
    // Check that the hashed password matches
    if (await bcrypt.compare(password, user.password)) {
      const token = jwt.sign({ id: user.id, email: user.email }, secret);
      return res.json({ status: "ok", data: token });
    }

    res.json({ status: "error", error: "Invalid email/password" });
  })

  // Updating user profile ------------------------------------ Needs completion
  .put("/edit/:email", async (req, res) => {
    const { email } = req.params;
    const { value, key } = req.body;

    const user = await User.updateOne({ email }, { $set: { key: value } });

    res.json({ status: "ok" });
  })

  // Updating liked followed areas ------------------------------------
  .put("/:email/:area", async (req, res) => {
    const { area, email } = req.params;

    if (!area) {
      res.json({ status: "error", error: "No area followed" });
    }

    const user = await User.findOne({ email: email });
    // If area already followed.. send warning
    if (!user) {
      return res.json({
        status: "error",
        error: "Must be logged in to follow areas",
      });
    }

    const followed = user.followedAreas;
    const updatedFollowedAreas = [...followed, area];

    await User.updateOne(
      { email: email },
      { $set: { followedAreas: updatedFollowedAreas } }
    );

    res.json({ status: "ok" });
  })

  // CHANGE PASSWORD ------------------------------------ Add if time allows
  .post("/change-password", async (req, res) => {
    const { token, newpassword: incomingPassword } = req.body;
    //if i keep this - add double password check & match before proceeding
    //create a validation function
    if (!email || typeof email !== "string") {
      return res.json({ status: "error", error: "Invalid email" });
    }

    if (!incomingPassword || typeof incomingPassword !== "string") {
      return res.json({ status: "error", error: "Invalid password" });
    }

    if (incomingPassword.length < 8) {
      return res.json({
        status: "error",
        error: "Password too short. Should be at least 8 characters",
      });
    }

    try {
      const user = jwt.verify(token, secret);
      const id = user.id;

      const password = await bcrypt.hash(incomingPassword, 8);
      await User.updateOne({ id }, { $set: { password } });
    } catch (e) {
      res.json({ status: "error", error: "Invalid token" });
    }

    res.json({ status: "ok" });
  });

module.exports = router;
