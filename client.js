const http = require('http');

const options = {
	// port: '3000',
	headers: {
		header_1: 'content of header 1',
		header_2: 'content of header 2'
	}
};

const url = "http://127.0.0.1:3000/"

request = http.request(url, options, (response) => {
	// console.log("Got a response");
	response.on('data', (body) => {
		console.log(String(body));
});
	// console.log(response);
});

request.end();

// console.log("here");

// const request = require('request');
// function upload(request, response) {
//   var options = {
//     url: 'http://127.0.0.1:3000/',
//     headers: {
//       'customheader1': 'val1',
//       'customheader2': 'val2'
//       }
//     };
//   var target = req.post( options, function(err,data){
// 	console.log('uploaded with headers')
//   })
//   request.pipe(target);
// }

// var http = require('http');

// // Options to be used by request 
// var options = {
//    host: 'localhost',
//    port: '3000',
// };

// // Callback function is used to deal with response
// var callback = function(response) {
//    // Continuously update stream with data
//    var body = '';
//    response.on('data', function(data) {
//       body += data;
//    });
   
//    response.on('end', function() {
//       // Data received completely.
//       console.log(body);
//    });
// }
// // Make a request to the server
// var req = http.request(options, callback);
// req.end();

