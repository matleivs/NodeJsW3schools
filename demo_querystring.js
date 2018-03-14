// There are built-in modules for easily splitting the QUERY string into readable parts. such as the URL module:

var http = require('http');
var url = require('url');

http.createServer(function(req, res) {
	res.writeHead(200, {'Content-Type': 'text/html'});
	var q = url.parse(req.url, true).query;
	var txt = q.year + " " + q.month;
	res.end(txt);
}).listen(8080);

/*
The address:

http://localhost:8080/?year=2017&month=July

Will produce this result:

2017 July
*/