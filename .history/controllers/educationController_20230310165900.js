const Education = require("../models/Education");

async function index(req, res, next) {
  const edu = await Education.find({});
  res.render("index", { user: edu });
}
module.exports = { index };
