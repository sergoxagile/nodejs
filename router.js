function route(handle, pathname) {
	console.log('About to route a request for ' + pathname);
	if(typeof handle[pathname] === 'function') {
		handle[pathname]();
	} else {
		handle['404']();
	}
}

exports.route = route;