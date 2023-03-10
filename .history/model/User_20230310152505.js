const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const User = new Schema({
  name: { type: String },
  phone: { type: Number },
  email: { type: String },
});

module.exports = mongoose.model("User", User);
