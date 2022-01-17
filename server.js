const express = require('express')
const app = express()
const http = require('http')
const server = http.createServer(app)
const PORT = 3000
const { Server } = require('socket.io')
const io = new Server(server)
const path = require('path')

app.use(express.static(path.join(__dirname, 'client/build')))


app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
  });


io.on('connection', (socket) => {
    console.log(`a user has conneceted. user id: ${socket.id}`)

    socket.on('chat message', (msg) => {
        io.emit('chat message', msg)
    })

    // socket.on('join room' , (room) => {
    //     socket.join(room)
    // })
    
    socket.on('disconnect', () => {
        console.log(`user ${socket.id} has disconnected`)
    })
})



server.listen(PORT, () => {
    console.log(`server is live on port ${PORT}`)
})
