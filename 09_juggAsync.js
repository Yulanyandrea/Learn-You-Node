// //tu programa recibirá tres URLs como argumentos.  
// Tu programa deberá imprimir el contenido de cada una de las URLs en  
// consola en el mismo orden que fueron recibidos los argumentos. No deberás  
// imprimir el largo, solo el contenido como String, pero debes respetar el  
// orden de llegada de los argumentos.  

 let resultado=[]
 const bl = require('bl') //acepta un callback como argumento
 let response_http=require('http')
 let sum=0;

 function result () {
     for (let i = 0; i < 3; i++)
       console.log(resultado[i])
   }

   function httpObtain(url){
    response_http.get(process.argv[2 + url], function (response) {
           response.pipe(bl(function (err, data) {
               if (err)
                return console.error(err)
        
                resultado[url] = data.toString()
               sum++
        
              if (sum == 3)
              result()
             }))
          })
         
 }
for(let i=0;i<3;i++){
    httpObtain(i)
  }

