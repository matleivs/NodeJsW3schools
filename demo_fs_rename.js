// the File System Module rename() method renames the specified file: 

var fs = require('fs');

fs.rename('mynewfile1.txt', 'myrenamedfileformerlyknownasmyfile1.txt',
function(err) {
	if(err) throw err;
	console.log("File renamed!");
});