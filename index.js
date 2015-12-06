
function VMUtils() {
	'use strict';

	var vmutils = this;

	vmutils.makeProcess = require('./make-process.js');
	vmutils.makeGlobal = require('./make-global.js');
	vmutils.VMContext = require('./vm-context.js');

}

module.exports = new VMUtils();
