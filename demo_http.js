var http = require('http');

http.createServer(function(req, res) {
    res.writeHead(200, {'Content-type' : 'text/html'})
    res.write('Hello World!, my name is Luis!!');
    res.end();
}).listen(8080);