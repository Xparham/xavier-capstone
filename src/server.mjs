import express from 'express'

const app = express()
const PORT = process.env.PORT || 8080
const HOST = process.env.HOST || '0.0.0.0'

app.get("/", (req, res) => res.send({response : "OK"}))

app.get("/search", (req, res) => res.send({search:"Food Banks Available"}))

app.listen(PORT,() => console.log(`Server run on http://${HOST}:${PORT}`))