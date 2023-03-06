const socket = require('socket.io')
 
module.exports = (http) => { 

  const io = socket(http, {
    cors: {
      origin: 'http://localhost:3000'
    }
  });
   
  // данная функция выполняется при подключении каждого сокета (обычно, один клиент = один сокет)
  const onConnection = (socket) => {
    // Ключи soket _events, _eventsCount, _maxListeners, nsp, client, data, connected, acks, fns, flags, server, adapter, id, handshake
    // выводим сообщение о подключении пользователя  

    console.log(`CONNECTED, Users id ${socket.id} on server`)  
    console.log(`Client id: ${socket.client.id}`);
 
    socket.on('DIALOGS:JOIN', (dialogId) => {
      socket.dialogId = dialogId;
      socket.join(dialogId);
    });
    socket.on('DIALOGS:TYPING', (obj) => {
      socket.broadcast.emit('DIALOGS:TYPING', obj);
    });

    socket.emit("test","!@#") 
    // получаем название комнаты из строки запроса "рукопожатия"
    // const { t } = socket.handshake.query 
    // сохраняем название комнаты в соответствующем свойстве сокета
    // socket.roomId = t 
    // console.log(socket.handshake)
    // присоединяемся к комнате (входим в нее)
    // socket.join(t)

    // регистрируем обработчики
    // обратите внимание на передаваемые аргументы
    // registerMessageHandlers(io, socket)
    // registerUserHandlers(io, socket)

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

 