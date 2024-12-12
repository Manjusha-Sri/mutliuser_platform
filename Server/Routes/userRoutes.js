const express = require("express")
const { Signups } = require("../controllers/signupController")
const { Login } = require("../controllers/signupController")

const router = express.Router()

router.post("/signup",Signups);
router.post("/login", Login)
module.exports = router;