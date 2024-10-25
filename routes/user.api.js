const express = require("express")
const router = express.Router();
const userAPi = require("./user.api");
const userController = require("../controllers/user.controller");

// 회원가입
router.post("/",userController.createUser)

module.exports = router;