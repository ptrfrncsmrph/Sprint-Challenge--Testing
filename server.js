const express = require("express")
const server = express()

server.use(express.json())

server.get("/", (_req, res) => {
  res.send("It's alive!")
})

module.exports = server
