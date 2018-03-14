var http = require('http');
var fs = require('fs');

http.createServer(function( req, res) {
	fs.readFile('mynewfile1.html'), 
	function(err, content) {
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.writeSync(content);
		res.end();
	};
}).listen(8080);
// this is not working :B 