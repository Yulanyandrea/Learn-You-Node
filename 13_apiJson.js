// Escribe un servidor de HTTP que sirva datos en formato JSON cuando reciba  
// una petición GET con la ruta (endpoint) '/api/parsetime'. Asume que la  
// petición tiene un parámetro 'iso' cuyo valor es un fecha hora en formato  
// ISO.  
 
// Por ejemplo:  
// /api/parsetime?iso=2013-08-10T12:10:15.474Z  
// Puedes probarlo en la línea de comandos escribiendo: node -pe "new URL('/test?q=1', 'http://example.com')"

let response_http = require('http');
let response_url = require('url');

function parsetime(time) {
    return {
        hour: time.getHours(),
        minute: time.getMinutes(),
        second: time.getSeconds()
    }
}

function unixtime(time) {
    return {unixtime: time.getTime()}
}

let server = response_http.createServer(function (req, res) {
    let Url = response_url.parse(req.url, true);
    let time = new Date(Url.query.iso);
    let result;

    if (/^\/api\/parsetime/.test(req.url))
        result = parsetime(time);
    else if (/^\/api\/unixtime/.test(req.url))
        result = unixtime(time);

    if (result) {
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify(result))
    } else {
        res.writeHead(404);
        res.end();
    }
});
server.listen(Number(process.argv[2]));