function start() {
	console.log('Request handler start was called');
}

function upload() {
	console.log('Request handler upload was called');
}

function error() {
	console.log('No page was found');
}

exports.start = start;
exports.upload = upload;
exports.error = error;