var http = require('http');
var url = require('url');

http.createServer(function(req, res) {
    res.writeHead(200, {'Content-type' : 'text/html'});
    const baseURL = 'http://' + req.headers.host + '/';
    const q = new URL(req.url, baseURL);
    var text = q.searchParams.get('year') + ' ' + q.searchParams.get('month');
    res.end(text);
}).listen(8080);