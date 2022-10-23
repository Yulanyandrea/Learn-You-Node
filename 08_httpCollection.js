// // Escribe un programa que realice una petición HTTP GET a una URL provista  
// como primer argumento del programa. Almacena todos los datos recibidos del  
// servidor, es decir no sólo el primer evento "data", y luego escribe a  
// consola dos líneas:  
 
//  » En la primera escribe la cantidad de caracteres recibidos.
//  » En la segunda escribe la totalidad de caracteres recibidos
const bl = require('bl')
let response_http=require('http')
let path=process.argv[2]


response_http.get(path,function callback(response){
    response.pipe(bl(function error(err,data){
        if(err){
            return console.error(err)
        }
        str=data.toString()
        console.log(str.length)
        console.log(str)
    }))
})