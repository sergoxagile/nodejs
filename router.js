function route(handle, pathname, response, postData) {
	if(typeof handle[pathname] !== 'function') {
		pathname = '404';
	}
	return handle[pathname](response, postData);
}

exports.route = route;