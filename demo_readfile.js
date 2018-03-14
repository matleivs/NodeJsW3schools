// Use the Node.js File System Module to work with files on your computer
var http = require('http');
var fs = require('fs');

http.createServer(function (req,res) {
	fs.readFile('demofile1.html', function(err, dta) {
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.write(dta);
		res.end();
	});
}).listen(8080);