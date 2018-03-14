// the built-in URL module Splits up a web address into readable parts.

var url = require('url');

// parse an address with the url.parse() method -> returns a URL object,
// with each part of the address as properties:

var address = 'http://localhost:8080/default.htm?year=2018&month=march';
var q = url.parse(address, true);

console.log(q.host); 		// returns 'localhost:8080'
console.log(q.pathname);  	// returns 'default.htm'
console.log(q.search); 		// returns '?year=2018&month=march'

var qdata = q.query;		// returns an object {year: 2018, month: 'march'}
console.log(qdata.month);	// returns 'march'
