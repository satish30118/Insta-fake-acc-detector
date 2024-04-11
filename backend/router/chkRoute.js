const express = require("express");
const { userVerification } = require("../middleware/authMiddleware");
const { InstaFakeAcc, tweetStatus } = require("../controllers/mlConnect");

//ROUTER OBJECT
const router = express.Router();

//ROUTING
router.post("/predict-insta-account", InstaFakeAcc);
router.post("/predict-tweet-status", tweetStatus);

module.exports = router;
