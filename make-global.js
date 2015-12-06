
(function (module) {
	'use strict';

	module.exports = function (context, options) {
		context.global = context;
		context.__filename = options.filename;
		context.__dirname = require('path').dirname(context.__filename);
	}

})(module);
