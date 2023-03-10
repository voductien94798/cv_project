const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Experience = new Schema({
  name: { type: String },
  phone: { type: Number },
  job: { type: String },
  email: { type: String },
});

module.exports = mongoose.model("Experience", Experience);
