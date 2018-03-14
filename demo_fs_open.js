// the fs.open() method takes a flag as second arg, if it's w = writing, the specified file is opened for writing. if the file doesnt exist, a new, Empty file is created:

var fs = require('fs');

fs.open('mynewfile2.txt', "w", 
	function(err, file) {
		if (err) throw err;
		console.log('Saved it!');
	});