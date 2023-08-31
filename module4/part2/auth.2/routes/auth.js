const express = require("express");
const {
	register,
	login,
	getCurrent,
	logout,
} = require("../controllers/controllerOfUser");
const authentication = require("../middlewares/authentication");

const router = express.Router();
const jsonParser = express.json();

router.post("/register", jsonParser, register);
router.post("/login", jsonParser, login);
router.get("/current", authentication, getCurrent);
router.post("/logout", authentication, logout);

module.exports = router;
