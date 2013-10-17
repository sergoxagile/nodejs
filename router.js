function route(handle, pathname, response) {
	if(typeof handle[pathname] !== 'function') {
		pathname = '404';
	}
	return handle[pathname](response);
}

exports.route = route;