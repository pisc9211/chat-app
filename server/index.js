const app = require('express')()
const server = require('http').Server(app)
const io = require('socket.io')(server)
const cors = require('cors')

const { addUser, removeUser, getUser, getUsersInRoom } = require('./users')

const PORT = process.env.PORT || 5000

app.use(cors)

app.get('/', (req,res) => res.send('Server is up and running!!!'))

io.on('connection', (socket) => {
  socket.on('join', ({ name, room }, callback) => {
    const { error, user } = addUser({ id: socket.id, name, room})

    if (error) callback(error)

    socket.join(user.room)
    socket.emit('message', { user: 'admin', message: 'WELCOME TO ROOM ' + user.room })
    socket.broadcast.to(user.room).emit('message', {  message: `${user.name} has joined!` })

    io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room) })

    callback()
  })

  socket.on('sendMessage', (message, callback) => {
    const user = getUser(socket.id)

    io.to(user.room).emit('message', { user: user.name, message })

    callback()
  })

  socket.on('disconnect', () => {
    const user = removeUser(socket.id)

    if (user) {
      io.to(user.room).emit('message', { message: `${user.name} has disconnected!`})
      io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room) })
    }
  })
})

server.listen(PORT, () => console.log(`Server listening on port ${PORT}`))