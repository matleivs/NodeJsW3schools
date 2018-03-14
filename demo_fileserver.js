// with Node.js File Server and Node.js built-in URL Module together,
// now open the requested file, return content to the client,
// and throw a 404 error if something goes wrong:

var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer(function (req, res) {
	var q = url.parse(req.url, true);
	var filename = "." + q.pathname;
	fs.readFile(filename, function(err, data) {
		if(err) {
			res.writeHead(404, {'Content-Type': 'text/html'});
			return res.end("404 Not Found Nothin here");
		}
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.write(data);
		return res.end();
	});
}).listen(8080);

// run node demo_fileserver.js
// in browser, see http://localhost:8080/summer.html resp http://localhost:8080/winter.html
