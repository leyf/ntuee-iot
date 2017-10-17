var http = require('http');

// var server = http.createServer(function (req, res) {
//     res.writeHead(200, { 'Content-Type': 'text/plan' });
//     res.end('Hello World');
// }).listen(8000);


var server = http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    switch(req.url) {
        case '/temperature':
            res.write();
            break;
        case '/light':
            res.write();
            break;
        default:
            res.write();
            break;
    }

    res.end();

}).listen(8000);