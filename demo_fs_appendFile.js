// The fs.appendFile() method appends the specified content at the end of the specified file:

var fs = require('fs');

fs.appendFile('mynewfile1.txt', "this is my text.",
	function(err) {
		if (err) throw err;
		console.log("Updatedit!")
	});
