const Education = require("../models/Education");
const User = require("../models/User");

async function index(req, res, next) {
  const Info = await User.find({});
  const Education = await Education.find({});
  res.render("index", { user: Info[0], edu: Education[0] });
}
module.exports = { index };
