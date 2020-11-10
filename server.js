const express = require("express")
const helmet = require("helmet") 
const cors = require("cors")
const login = require("./api/login-router")

const server = express();


server.use(helmet());
server.use(express.json());
server.use(cors());

// This is my code for the app
server.use("/api/login", login);


module.exports = server