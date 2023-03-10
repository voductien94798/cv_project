const Profile = require("../model/User");

async function index(req, res, next) {
  const profiles = await User.find({});
  res.render("index", {
    profile: profiles[0],
  });
}
module.exports = { index };
