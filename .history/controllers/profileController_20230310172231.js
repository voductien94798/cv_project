const User = require("../models/User");
const Edu = require("../models/Education");
async function index(req, res, next) {
  const Education = await Edu.find({});
  const Info = await User.find({});

  res.render("index", { user: Info[0], edu: Education });
}
module.exports = { index };
