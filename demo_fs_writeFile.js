// The fs.writeFile() method writes to the file if it exists, replaceing its content. 
// If it not exists, a new file, containing the specified content, is created:

var fs = require('fs');
fs.writeFile("mynewfile3.js", "Hello Content of ile 3!",
	function (err){
		if (err) throw err;
		console.log("Did it!");
	});