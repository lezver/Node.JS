const express = require("express");
const autoRoutes = require("./auth");
const dogRoutes = require("./dog");
const avatar = require("./avatar");
const { auth } = require("../middlewares");

const router = express.Router();

router.use("/auth", autoRoutes);
router.use("/dogs", auth, dogRoutes);
router.use("/users", auth, avatar);

module.exports = router;
