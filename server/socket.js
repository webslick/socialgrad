const socket = require('socket.io');
const roomService = require('./services/room-service')

module.exports = (http) => { 

  const io = socket(http, {
    cors: {
      origin: 'http://localhost:3000'
    }
  });

 // данная функция выполняется при подключении каждого сокета (обычно, один клиент = один сокет)

  const onConnection = (socket) => { 

    // выводим сообщение о подключении пользователя  
 console.log(`CONNECTED, Users id ${socket.id} on server`);  
 
    socket.on("CLIENT:ROOMS_JOIN", async(roomId) => {  
      socket.join(roomId)  
      console.log(socket.rooms);  
    });
 
    // socket.on('DIALOGS:JOIN', (dialogId) => {
    //   // socket.dialogId = dialogId;
    //   // socket.join(dialogId);
    // });
  

    // socket.on('DIALOGS:TYPING', (obj) => {
    //   socket.broadcast.emit('DIALOGS:TYPING', obj);
    // });

    // socket.on('DIALOGS:CREATED', (obj) => {
    //  console.log(obj);
     
    // });
 
    // обрабатываем отключение сокета-пользователя
    socket.on('disconnect', (socket) => {
      console.log(socket)
      // выводим сообщение
      console.log(`Users disconnected ${socket}`)
      // покидаем комнату 
      // socket.leave()
    })
  }
 
  // обрабатываем подключение
  io.on('connection', onConnection)
 
  return io;
};

 