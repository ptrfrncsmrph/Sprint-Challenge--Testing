const express = require("express")
const server = express()

server.use(express.json())

server.get("/", (_req, res) => {
  res.json({ message: "It's alive!" })
})

module.exports = server
