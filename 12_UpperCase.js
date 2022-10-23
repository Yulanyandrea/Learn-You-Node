//  Escribe un servidor HTTP que reciba sólo peticiones POST y convierta los  
// caracteres del cuerpo de la petición a mayúsculas y lo devuelva al  
// cliente.  
 
// El servidor deberá escuchar en un puerto cuyo número será el primer  
// argumento del programa.  ---npm install through2-map
 
let response_http = require('http')
const map = require('through2-map')
let server = response_http.createServer(function crud (req, res) {
 if (req.method != 'POST')
   return res.end(' POST\n')

 req.pipe(map(function (letter) {
   return letter.toString().toUpperCase()
 })).pipe(res)
})

server.listen(Number(process.argv[2]))