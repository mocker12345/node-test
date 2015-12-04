var http = require('http');
http.createServer(function(request,respones){
	respones.writeHead(200,{'Content-Type':'text/plain'});
	respones.end('hello world');

}).listen(8888);

console.log('11');
