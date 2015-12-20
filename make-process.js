
(function (module) {
	'use strict';

	module.exports = (context, options) =>
		context.process = options && options.process ? process : new FakeProcess(options);

	class FakeProcess {

		constructor(options) {
			var process = this;
			process.argv = [options.filename];
			process.argc = 1;
			process.env = Object(options.env);
			process._cwdir = options.cwd;
		}

		cwd() {
			return this._cwdir;
		}

		chdir(dir) {
			this._cwdir = dir;
		}

	}

})(module);
