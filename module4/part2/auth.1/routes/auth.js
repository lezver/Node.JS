const express = require("express");
const { register, login, logout } = require("../controllers/controllerOfUser");
const { auth } = require("../middlewares");

const router = express.Router();
const jsonParser = express.json();

router.post("/register", jsonParser, register);
router.post("/login", jsonParser, login);
router.post("/logout", auth, logout);

module.exports = router;
