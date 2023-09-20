const express = require("express");
const { register, login, logout, verify } = require("../controllers/user");
const { auth } = require("../middlewares");

const router = express.Router();
const jsonParser = express.json();

router.post("/register", jsonParser, register);
router.post("/login", jsonParser, login);
router.post("/logout", auth, logout);
router.get("/verify/:token", verify);

module.exports = router;
