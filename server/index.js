const app = require('express')()
const server = require('http').Server(app)
const io = require('socket.io')(server)

const PORT = process.env.PORT || 5000

app.get('/', (req,res) => res.send('Server is up and running!!!'))

io.on('connection', (socket) => {

})

server.listen(PORT, () => console.log(`Server listening on port ${PORT}`))