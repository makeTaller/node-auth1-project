// const express = require("express")
const  server = require("./server")

const port = process.env.PORT  || 5000;

// We dont need this code here
// server.use(express.json())

server.listen(port, () => {
    console.log(`Listening on port ${port}...`)
})