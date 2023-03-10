const User = require("../models/User");
const Edu = require("../models/Education");
const Exp = require("../models/Experiences");
const Ski = require("../models/Skill");
async function index(req, res, next) {
  const Skill = await Ski.find({});
  const Experience = await Exp.find({});
  const Education = await Edu.find({});
  const Info = await User.find({});

  res.render("index", {
    user: Info[0],
    edu: Education,
    exps: Experience,
    skis: Skill,
  });
}
module.exports = { index };
