const express = require("express");
const autoRoutes = require("./auth");
const dogRoutes = require("./dog");
const { auth } = require("../middlewares");
const router = express.Router();

router.use("/auth", autoRoutes);
router.use("/dogs", auth, dogRoutes);

module.exports = router;
