//METODO 1
let fs = require('fs')  
let file = process.argv[2]  
  
  fs.readFile(file, function (err, contents) {   
   let str = contents.toString();
  let result = (str.match(/\n/g)).length;
  console.log(result)  
 })


////METODO 2
// const fs = require('fs')
//     const file = process.argv[2]

//     fs.readFile(file, function (err, contents) {
//       if (err) {
//         return console.log(err)
//       }
//       // fs.readFile(file, 'utf8', callback) también se puede utilizar
//       const lines = contents.toString().split('\n').length - 1
//       console.log(lines)
//     })