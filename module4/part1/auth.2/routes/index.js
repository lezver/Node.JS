const express = require("express");
const autoRoutes = require("./auth");
const dogRoutes = require("./dog");

const router = express.Router();

router.use("/auth", autoRoutes);
router.use("/dogs", dogRoutes);

module.exports = router;
