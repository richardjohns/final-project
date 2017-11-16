const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const Server = require("socket.io")

const videos = require('./routes/videos')
const winners = require('./routes/winners')

const server = express()

server.use(cors('*'))
server.use(bodyParser.json())
server.use(express.static(path.join(__dirname, './public')))
server.use('/api/v1', videos)
server.use('/api/v1/winners', winners)
server.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'))
})

// socket.io server
function startServer(store) {
  const io = new Server().attach(8090);

  store.subscribe(() => io.emit("state", store.getState().toJS()));

  io.on("connection", socket => {
    socket.emit("state", store.getState().toJS());
    socket.on("action", store.dispatch.bind(store));
  });
}

module.exports = {
    server,
    startServer
}