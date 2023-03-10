const User = require("../models/User");
const Edu = require("../models/Education");
const Exp = require("../models/Experiences");
async function index(req, res, next) {
  const Experience = await Exp.find({});
  const Education = await Edu.find({});
  const Info = await User.find({});

  res.render("index", { user: Info[0], edu: Education, exp: Experience });
}
module.exports = { index };
