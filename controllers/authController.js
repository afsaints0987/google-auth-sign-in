const LoginFailed = (req, res) => {
    res.status(401).json({
        error: true,
        message: "Login failed"
    })
}

const LoginSuccess = (req, res) => {
    if(req.user) {
        res.status(200).json({
            error: false,
            message: "Login Successful!",
            user: req.user
        })
    } else {
        res.status(403).json({
            error: true,
            message: "Not Authorized"
        })
    }
}

const Logout = (req, res) => {
    req.logout();
    res.redirect(process.env.CLIENT_URL)
}

module.exports = {
    LoginFailed, LoginSuccess, Logout
}