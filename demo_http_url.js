var http = require('http');
// the function passed into http.createServer() has a req argument, that represents the REQUEST from the CLIENT, as an (http.IncomingMessage) object.
http.createServer(function (req, res) {
	res.writeHead(200, {'Content-Type': 'text/html'});
	// The object in the req argument has a property called "url" which holds the part of the URL that comes after the domain name:
	res.write(req.url);
	res.end();
}).listen(8080);
/*
you should see two different results when opening these two addresses:

http://localhost:8080/summer

Will produce this result:

/summer

http://localhost:8080/winter

Will produce this result:

/winter*/