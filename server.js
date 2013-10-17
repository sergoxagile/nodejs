var http = require('http');
var url = require('url');

function start(route, handle) {
	onRequest = function(request, response){
		var pathname = url.parse(request.url).pathname;
		console.log('request '+ pathname +' recived');

		route(handle, pathname, response);
	};

	http.createServer(onRequest).listen(8888);
	console.log('server has started');
}

exports.start = start;