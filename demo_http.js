
// If the RESPONSE from the HTTP SERVER should be displayed as HTML, 
// include an HTTP Header with the correct content type:
var http = require('http');
http.createServer(function (req, res) {
	// The first arg of the res.writeHead() method is the status code, 
	// 200 means everything is OK. The second arg is an OBJECT containing the RESPONSE HEADERS.
	res.writeHead(200, {'Content-Type': 'text/html'});
	res.write("Hello Worlddd");
	res.end();
}).listen(8080);