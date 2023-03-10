const User = require("../models/User");
const Edu = require("../models/Education");
async function index(req, res, next) {
  const Info = await User.find({});
  const Education = await Edu.find({});
  res.render("index", { user: Info[0], edu: Education[0] });
}
module.exports = { index };
