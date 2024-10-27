const express = require("express")
const router = express.Router();
const userAPi = require("./user.api")
const authApi = require("./auth.api")
const productApi = require("./product.api")

router.use("/user",userAPi)
router.use("/auth",authApi)
router.use("/product",productApi)

module.exports = router;