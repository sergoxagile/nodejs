var http = require('http');
var url = require('url');

function start(route, handle) {
	onRequest = function(request, response){
		var postData = "";
		var pathname = url.parse(request.url).pathname;
		console.log('request '+ pathname +' recived');
		request.setEncoding('utf8');

		request.addListener('data', function(postDataChunk){
			postData += postDataChunk;
			console.log('Resive chunk --- ' + postDataChunk);
		});
		request.addListener('end', function(){
			route(handle, pathname, response, postData);
		});
	};

	http.createServer(onRequest).listen(8888);
	console.log('server has started');
}

exports.start = start;