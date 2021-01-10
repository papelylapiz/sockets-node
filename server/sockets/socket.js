const {io} = require('../server')

io.on('connection',(client)=>{

    console.log('Usuario conectado');

    client.emit('enviarMensaje', {
        usuario: 'Administrador',
        mensaje: 'Bienvenido a la aplicación'
    })

    client.on('disconnect', ()=>{
        console.log('Usuario desconectador');
    });

    //Escuchar el cliente
    client.on('enviarMensaje', (mensaje, callback)=>{
        console.log(mensaje);

        //Enviar mensaje a todos los clientes que esten conectados en el servidor broadcast
        client.broadcast.emit('enviarMensaje',mensaje);

        // if(mensaje.usuario){
        //     callback({
        //         resp:'Todo salio Bien'
        //     });
            
        // }else{
        //     callback({
        //         resp: 'SALIO MUY MAL !!!'
        //     })
        // }
    });

});