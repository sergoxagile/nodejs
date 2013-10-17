var exec = require('child_process').exec;

function start(response) {
	exec('ls -lah', function(error, stdout, stderr) {
		response.writeHead(200, {'Content-Type': 'text/plain'});
		response.write(stdout);
		response.end();
	});
}

function upload(response) {
	response.writeHead(200, {'Content-Type': 'text/plain'});
	response.write('upload');
	response.end();
}

function error(response) {
	response.writeHead(404, {'Content-Type': 'text/plain'});
	response.write('page not found');
	response.end();
}

exports.start = start;
exports.upload = upload;
exports.error = error;