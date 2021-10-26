const Express = require('express');
const app = Express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

app.use(Express.static('public'));

server.listen(3000, () => {
    console.log('Conectado al server http://localhost:3000')
});

io.on('connection', (socket) => {
    console.log('Alguien se conectó con socket');
});