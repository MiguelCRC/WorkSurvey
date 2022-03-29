var express = require("express");
var router = express.Router();
const path = require("path");
const multer = require("multer");
const Survey = require("../models").Survey;

const Sequelize = require("sequelize");
const Op = Sequelize.Op;

var storage = null;
var upload = null;

storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    //call the callback, passing it the original file name
    cb(null, file.originalname);
  },
});

upload = multer({ storage });

/* GET home page. */
router.get("/", function (req, res, next) {
  res.sendFile(
    path.join("/Users/miguelardon/Desktop/Projects/WorkSurvey/" + "index.html")
  );
});

router.post("/upload", upload.single("file"), async function (request, response) {
    try {
      let newSurvey = await Survey.create({
        completeName: request.body.completeName,
        email: request.body.email,
        phone: request.body.phone,
        position: request.body.position,
        location: request.body.location,
        resumeName: request.body.resumeName
      });
      return response.status(200).json({
        id: newSurvey.id,
      });
    } catch (error) {
      console.log(error);
      return response.status(500).json({
        error: error.message,
      });
    }
  }
);

module.exports = router;
