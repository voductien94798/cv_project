const User = require("../models/User");

async function index(req, res, next) {
  const Info = await User.find({});
  res.render("index", { user: Info[0] });
}
module.exports = { index };
