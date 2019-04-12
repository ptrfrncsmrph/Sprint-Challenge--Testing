const express = require("express")
const server = express()

server.use(express.json())

let games = []

server.get("/", (_req, res) => {
  res.json({ message: "It's alive!" })
})
server.post("/games", (req, res) => {
  const { title, genre, releaseYear } = req.body
  if (!title || !genre) {
    res.send(422).json({ message: "Please include title and genre" })
  } else {
    games.push({ title, genre, releaseYear })
    res.send(200).json({ title, genre, releaseYear })
  }
})
server.get("/games", (_req, res) => {
  res.json(games)
})

module.exports = server
