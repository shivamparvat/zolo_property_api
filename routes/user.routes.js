const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const { middleware } = require("../helper/middleware/authentication");

router.post("/login", userController.login);
router.post("/signUp", userController.saveUser);

module.exports = router;