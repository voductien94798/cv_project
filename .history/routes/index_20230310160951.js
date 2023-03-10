var express = require("express");
var router = express.Router();
const User = require("../model/User");
/* GET home page. */
router.get("/", function (req, res, next) {
  const user = User.find();
  res.render("index", { user: user });
});

module.exports = router;
