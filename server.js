var http = require('http');

function start() {
	onRequest = function(request, response){
		console.log('request recived');
		response.writeHead(200, {'Content-Type': 'text/plain'});
		response.write('Hello world');
		response.end();
	};

	http.createServer(onRequest).listen(8888);
	console.log('server has started');
}

exports.start = start;