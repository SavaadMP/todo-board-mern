const express = require("express");
const router = express.Router();

const { getHome } = require("../controllers/userController");

router.get("/", getHome);

module.exports = router;
