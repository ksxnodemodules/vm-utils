
(function (module) {
	'use strict';

	var vm = require('vm');
	var makeProcess = require('./make-process.js');
	var makeGlobal = require('./make-global.js');

	class VMContext {

		constructor(context, options) {
			makeProcess(this, options);
			makeGlobal(this, options);
			Object.assign(this, context);
		}

		createContext() {
			return vm.createContext(this);
		}

		isContext() {
			return vm.isContext(this);
		}

		call(code, reset, options) {
			return vm[reset ? 'runInNewContext' : 'runInContext'](this, code, options);
		}

		getCall(code, reset) {
			var script = new vm.Script(code);
			if (reset) {
				return (options) =>
					script.runInNewContext(this, options);
			} else {
				this.createContext();
				return (options) =>
					script.runInContext(this, options);
			}
		}

		run(reset, options) {
			return this.call(this.__source, reset, options);
		}

		getRun(reset, mutable) {
			return mutable ?
				this.run.bind(this, reset) :
				this.getCall(this.__source, reset)
			;
		}

		get __source(options) {
			return require('fs')
				.readFileSync(this.__filename, options || 'utf8');
		}

		set __source(code, options) {
			require('fs')
				.writeFileSync(this.__filename, code, options);
		}

	}

	module.exports = VMContext;

})(module);
