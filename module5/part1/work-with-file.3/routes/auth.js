const express = require("express");
const { register, login, getCurrent, logout } = require("../controllers/user");
const { authentication, upload } = require("../middlewares");
const updateAvatar = require("../controllers/avatar");

const router = express.Router();
const jsonParser = express.json();

router.post("/register", jsonParser, register);
router.post("/login", jsonParser, login);
router.get("/current", authentication, getCurrent);
router.post("/logout", authentication, logout);
router.patch("/avatars", authentication, upload.single("avatar"), updateAvatar);

module.exports = router;
