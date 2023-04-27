const express = require('express')
const passport = require('passport')
const {LoginFailed, LoginSuccess, Logout} = require('../controllers/authController')

const router = express.Router()

router.get(
    "/callback",
    passport.authenticate("google", {
        successRedirect: process.env.CLIENT_URL,
        failureRedirect: "login/failed"
    })    
)

router.get("/login/failed", LoginFailed)

router.get("/login/success", LoginSuccess)

router.get("/google", passport.authenticate("google", ["profile", "email"]))

router.get("/logout", Logout)

module.exports = router;