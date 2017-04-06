const http = require('http');
const fs = require('fs');
//event emitter, listening for requests and ready to stream
http.createServer(function(req, res) {
    res.writeHead(200, {"Content-Type": "text/html"});
    // read file and convert to String
    fs.createReadStream(__dirname + '/index.htm').pipe(res);
    //start listening on a port
}).listen(1337, '127.0.0.1');
