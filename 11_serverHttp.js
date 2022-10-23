//Escribe un servidor HTTP que sirva un mismo archivo de texto para todas  
//las peticiones que reciba.  

const response_http = require('http')
let  fs = require('fs')

const server = response_http.createServer(function (req, res) {
  res.writeHead(200, { 'content-type': 'text/plain' })

  fs.createReadStream(process.argv[3]).pipe(res)
})

server.listen(Number(process.argv[2]))