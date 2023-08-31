const express = require("express");
const autoRoutes = require("./auth");
const dogRoutes = require("./dog");
const { authentication } = require("../middlewares");

const router = express.Router();

router.use("/auth", autoRoutes);
router.use("/dogs", authentication, dogRoutes);

module.exports = router;
