const express = require("express")
const router = express.Router();
const userAPi = require("./user.api")
const authApi = require("./auth.api")

router.use("/user",userAPi)
router.use("/auth",authApi)

module.exports = router;