const User = require("../models/User");

async function index(req, res, next) {
  const users = await User.find({});
  res.render("index", { user: users });
}
module.exports = { index };
