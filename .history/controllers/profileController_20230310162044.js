const Profile = require("../model/User");

async function index(req, res, next) {
  const profiles = await User.find({});
  res.render("index", {
    title: "My CV of group Starbuck",
    page: req.url,
    profile: profiles[0],
  });
}
module.exports = { index };
