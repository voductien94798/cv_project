const mongoose = require("mongoose");

async function connect() {
  try {
    await mongoose.connect("mongodb://localhost:27017/cv_project");
  } catch (error) {}
  y;
}
