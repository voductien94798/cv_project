var express = require("express");
var router = express.Router();
const User = require("../model/User");
/* GET home page. */
router.get("/", async function (req, res, next) {
  const user = await User.find();
  res.render("index", { user: user });
});

module.exports = router;
