//extname devuelve la extesion 
//path.extname('index.coffee.md');
// Returns: '.md'

let fs = require('fs')  
let path=require('path')
let second_path='.'+process.argv[3] // ya que el tercer argumento no trae . toca agregarlo

fs.readdir(process.argv[2],function callback(error,data){
    if(error){
        return console.log(error)
    }
    data.forEach(function(data2){
        if(path.extname(data2)===second_path){ 
            console.log(data2)
        }
    })

    

}) 