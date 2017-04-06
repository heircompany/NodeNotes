const http = require('http');
const fs = require('fs');
//event emitter, listening for requests and ready to stream
http.createServer(function(req, res) {
    // webpage
    if (req.url === '/') {
        fs.createReadStream(__dirname + '/index.htm').pipe(res);
    // data endpoint
} else if (req.url === '/json') {
    res.writeHead(200, {"Content-Type": "application/json"});
    const obj = {
        firstname: 'Joe',
        lastname: 'Grotto'
    };
    //serializing data
    res.end(JSON.stringify(obj));
    } else {
        res.writeHead(404);
        res.end();
    };
    //start listening on a port
}).listen(1337, '127.0.0.1', () => {
    console.log('Application Launched.');
});
