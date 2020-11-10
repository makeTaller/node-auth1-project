const express = require("express");
const login = require("./login-model.js");

const router = express.Router();

router.get("/hash", (req, res) => {
    const password =  req.headers.authorization;
    const secret = req.headers.secret;

    const hash = req.headers.secret;

    if( password === "mellon") {
        res.json({ welcome: "friend", secret, hash })
    }
})

module.exports = router;
