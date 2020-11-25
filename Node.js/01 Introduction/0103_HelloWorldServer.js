var http = require("http");

http.createServer(function (request, response) {
	// send HTTP header
	// Content Type: text/plain
	response.writeHead(200, {'Content-Type': 'text/plain'});
	
	// send response as "Hello World"
	response.end('Hello World Server\n');
}).listen(8081);

//console will print the message
console.log('Server running at http://localhost:8081/');