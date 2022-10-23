//El servidor debe escuchar conexiones TCP en el puerto indicado por el  
//primer argumento del programa. Para cada conexión debes escribir la fecha  
//actual y la hora en formato 24hs del siguiente modo:  
 
   "AAAA-MM-DD hh:mm" 

let net = require('net')

function times(i) {
  return (i < 10 ? '0' : '') + i //operador ternario
}

function dates () {
  let writeDate = new Date()
  return writeDate.getFullYear() + '-'
    + times(writeDate.getMonth() + 1) + '-'
    + times(writeDate.getDate()) + ' '
    + times(writeDate.getHours()) + ':'
    + times(writeDate.getMinutes())
}

let server = net.createServer(function (socket) {
  socket.end(dates() + '\n')
})

server.listen(Number(process.argv[2]))