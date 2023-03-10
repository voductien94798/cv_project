const Education = require("../models/Education");

async function index(req, res, next) {
  const edu = await Education.find({});
  res.render("index", { edu: edu[0] });
}
module.exports = { index };
