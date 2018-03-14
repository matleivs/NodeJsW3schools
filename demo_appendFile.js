// The File System Module contains methods for creating new files:
var fs = require('fs');

fs.appendFile('mynewfile1.txt', "hello content for file 1!",
	function(err) {
		if(err) throw err;
		console.log('Saved!');
	});