var exec = require('child_process').exec;
var querystring = require('querystring');

function start(response) {
	response.writeHead(200, {'Content-Type': 'text/html'});

	var body = '<html>'+
	'<head>'+
	'<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">'+
	'</head>'+
	'<body>'+
	'<form action="/upload" method="post">'+
	'<textarea name="texte" rows="20" cols="60"></textarea>'+
	'<input type="submit" value="go" />'
	'</form>'+
	'</body>'+
	'</html>';
	response.write(body);
	response.end();
}

function upload(response, postData) {
	response.writeHead(200, {'Content-Type': 'text/plain'});
	response.write('upload ' + querystring.parse(postData).texte);
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