var server = require('./server');
var router = require('./router');
var requestHandler = require('./requestHandler');

var handle = {
	'/': requestHandler.start,
	'/start': requestHandler.start,
	'/upload': requestHandler.upload,
	'404': requestHandler.error
}

server.start(router.route, handle);