const express = require("express");
const router = express.Router();

const { addDetails } = require("../controllers/doctor");

router.route("/addDetails").post(addDetails);

module.exports = router;
