let fs = require('fs');
let ruta = fs.readFileSync(process.argv[2]);
let lineas= ruta.toString().split('\n').length-1; //-1 debido a que a que la ultima linea no tiene salto de linea
console.log(lineas)