const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Education = new Schema({
  start: { type: Number },
  end: { type: Number },
  school: { type: String },
  des: { type: String },
});

module.exports = mongoose.model("Education", Education);
