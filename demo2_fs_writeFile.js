// The fs.writeFile() method replaces he specified file and content:

var fs = require('fs');

fs.writeFile("mynewfile3.txt", "This is my text to append!",
	function(err) {
		if(err) throw err;
		console.log("Replaced!");
	});
