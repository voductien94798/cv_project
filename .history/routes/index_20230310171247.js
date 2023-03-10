var express = require("express");
var router = express.Router();
const profileController = require("../controllers/profileController");
const educationController = require("../controllers/educationController");
/* GET home page. */
router.get("/", profileController.index);

module.exports = router;
