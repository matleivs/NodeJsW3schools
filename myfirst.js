var http = require('http'); // include the http module

// create a SERVER object
http.createServer(
// The function passed into the http.createServer() method will be executed when sb tries to access the computer (server) on port 8080.
function (req, res) { 
res.writeHead(200, {'Content-Type': 'text/html'}); // write a RESPONSE to the CLIENT
res.end('Hello Wordl!'); // end the RESPONSE
					}
).listen(8080); // the SERVER object LISTENS on PORT 8080