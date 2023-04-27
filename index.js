require('dotenv').config()
const express = require('express')
const cors = require('cors')
const passport = require('passport')
const cookieSession = require('cookie-session')
const passportSetup = require('./passport')
const authRoute = require('./routes/authRoute')
const port = process.env.PORT || 5000


const app = express()

app.use(cookieSession({
    name: "session",
    keys: ["freelance-market"],
    maxAge: 24 * 60 * 60 * 100,
}))


app.use(passport.initialize());
app.use(passport.session());


app.use(cors({
    origin: "http://localhost:3000",
    methods: "GET,POST,PUT,DELETE",
    credentials: true
}))

app.use('/auth', authRoute)


app.listen(port, () => {
    console.log(`Server is listening on port ${port}`)
})



