const express = require('express');
const app = express();
const path = require('path');
const socketIO = require('socket.io');
const http = require('http');

let server = http.createServer(app);

app.use(express.static(path.resolve(__dirname, '../public')));
let port = process.env.PORT || 3000;

//IO esta es la comunicación del backend
module.exports.io = socketIO(server);
require('./sockets/socket');

server.listen(port , (err)=>{
    
    if(err) throw new Error(err);

    console.log(`Ejecutando node en puerto ${port}`);
});