const router = require("express").Router();
const User = require("../models/usersModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const authMiddleware = require("../middleware/authMiddleware.js");
const axios = require("axios")
const { google } = require("googleapis")
const request = require("request")
//register a new user
router.get("/getURL", async (req, res) => {
  const oauth2Client = new google.auth.OAuth2(
    // "677615575616-ijnj972rqnbmnlhsmsjonunn64pjtgiu.apps.googleusercontent.com",
    process.env.GOOGLE_CLIENT_ID,
    // "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",
    process.env.GOOGLE_CLIENT_SECRET,
    "https://frontend-datahack.vercel.app//auth/getToken"
  )
  const scopes = ["https://www.googleapis.com/auth/fitness.activity.read"
  /*, "https://www.googleapis.com/auth/fitness.blood_glucose.read", "https://www.googleapis.com/auth/fitness.blood_pressure.read", "https://www.googleapis.com/auth/fitness.heart_rate.read", "https://www.googleapis.com/auth/fitness.body_temperature.read", "https://www.googleapis.com/auth/fitness.location.read", "https://www.googleapis.com/auth/fitness.nutrition.read", "https://www.googleapis.com/auth/fitness.oxygen_saturation.read"*/]
  const url = oauth2Client.generateAuthUrl({
    access_type: "offline",
    scope: scopes,
    prompt: 'consent',
    state: JSON.stringify({
      callbackUrl: req.body.callbackUrl,
      userID: req.body.userid
    })
  })
  request(url, (err, response, body) => {
    console.log(err)
    res.send({ url })
  })
});
router.post("/setToken", async (req, res) => {
  const token = req.body.authToken;
  const oauth2Client = new google.auth.OAuth2(
    // "677615575616-ijnj972rqnbmnlhsmsjonunn64pjtgiu.apps.googleusercontent.com",
    process.env.GOOGLE_CLIENT_ID,
    // "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",
    process.env.GOOGLE_CLIENT_SECRET,
    // "https://powerup.sidd065.repl.co/auth/getToken"
    "https://frontend-datahack.vercel.app//auth/getToken"
  )
  const refresh = await oauth2Client.getToken(token);
  try {
    User.updateOne({ email: req.body.email }, { $set: { refreshToken: refresh.tokens.refresh_token } }, function (err, res) {
      console.log(err);
    });
  } catch (error) {
    console.log(err)
  }
});

/*router.get("/getCode", async (req, res) => {
  const oauth2Client = new google.auth.OAuth2(
    // "677615575616-ijnj972rqnbmnlhsmsjonunn64pjtgiu.apps.googleusercontent.com",
    process.env.GOOGLE_CLIENT_ID,
    // "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",
    process.env.GOOGLE_CLIENT_SECRET,
    "https://bodywise.sidd065.repl.co/auth/getToken")
  const tokens = await oauth2Client.getToken(req.body.authToken);
  res.send(tokens)
});*/
module.exports = router;
