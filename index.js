const http = require('http');
const express = require('express');

var app = express();

app.get('/', (request, response) => {
	console.log(request.headers);
	header_1 = request.header('header_1');
	if (header_1 === undefined) {
		response.send('Bad Request. Header "header_1" must be defined.');
		return;
	}
	console.log(header_1);
	response.send('Hello World');
});

app.listen(3000);

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((request, response) => {
// //   response.statusCode = 200;
// //   response.setHeader('Content-Type', 'text/plain');

// 	// Response Head
// 	response.writeHead(200, {'Content-Type': 'text/plain'});

// 	// Response Body
// 	response.write('Hello World\n');

// 	// Send Response
// 	response.end();
// // });
// }).listen(3000);

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });