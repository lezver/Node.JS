const express = require("express");
const { upload } = require("../middlewares");
const { uploadAvatar } = require("../controllers/avatar");

const router = express.Router();

router.patch("/avatar", upload.single("avatar"), uploadAvatar);

module.exports = router;
