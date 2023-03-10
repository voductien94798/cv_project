const User = require("../models/User");
const Education = require("../models/Education");
async function index(req, res, next) {
  const Info = await User.find({});
  const Education = await Education.find({});
  res.render("index", { user: Info[0] });
}
module.exports = { index };
