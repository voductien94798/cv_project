const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Skill = new Schema({
  skill: { type: String },
  per: { type: String },
});
module.exports = mongoose.model("Skill", Skill);
