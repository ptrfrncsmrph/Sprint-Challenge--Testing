const request = require("supertest")
const server = require("../server.js")

const pacman = {
  title: "Pacman",
  genre: "Arcade",
  releaseYear: 1980
}

const badGame = {
  title: "Pacman"
}

describe("GET /", () => {
  it("responds with JSON", done => {
    request(server)
      .get("/")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200, done)
  })
})

describe("POST /games", () => {
  it("responds with 200 for valid post", () => {
    return request(server)
      .post("/games")
      .send(pacman)
      .then(({ status }) => {
        expect(status).toBe(200)
      })
  })
  it("responds with the game for valid post", () => {
    return request(server)
      .post("/games")
      .send(pacman)
      .then(({ data: { title, genre, releaseYear } }) => {
        expect({ title, genre, releaseYear }).toBe(pacman)
      })
  })
  it("responds with 422 for invalid post", () => {
    return request(server)
      .post("/games")
      .send(pacman)
      .then(({ body: { title, genre, releaseYear } }) => {
        expect({ title, genre, releaseYear }).toBe(pacman)
      })
  })
})

describe("GET /games", () => {
  it("responds with 200 OK", () => {
    return request(server)
      .get("/games")
      .then(({ status }) => {
        expect(status).toBe(200)
      })
  })
  it("responds with JSON", () => {
    return request(server)
      .get("/games")
      .then(({ type }) => {
        expect(type).toBe("application/json")
      })
  })
  it("responds with an array", () => {
    return request(server)
      .get("/games")
      .then(({ body }) => {
        expect(body).toBeInstanceOf(Array)
      })
  })
})
