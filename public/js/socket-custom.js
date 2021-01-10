var socket = io();//Este es el que definimos en el servidor
socket.on('connect', function(){
    console.log('Conectado al servidor');
});
//escuchar
socket.on('disconnect', function(){
    console.log('Perdimos conexion con el servidor');
});

//Enviar mensaje al servidor en tipo objeto
socket.emit('enviarMensaje', {
    usuario: 'Engel',
    mensaje: 'Hola mundo'
}, function(resp){ //definiendo callback para reutilizar en el servidor
    console.log('Respuesta del servidor: ', resp);
});

//Recibir información del servidor
socket.on('enviarMensaje', function(mensaje){
    console.log(mensaje);
})