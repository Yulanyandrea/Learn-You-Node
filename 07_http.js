let response_http=require('http');
let path=process.argv[2];
response_http.get(path,function callback(response){
    response.setEncoding('utf8')
    response.on('data', console.log)
    response.on('error',console.error)
})
