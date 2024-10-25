const express = require("express")
const router = express.Router();
const userAPi = require("./user.api")

router.use("/user",userAPi)

module.exports = router;