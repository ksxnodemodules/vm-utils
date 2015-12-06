
# vm-utils

A NodeJS VM utilities

## Features

 - Class `VMContext`
  - Method `call`: execute a JS code directly
  - Method `getCall`: create a JS function to execute a JS code
  - Method `run`: similar to `call`, but with code from `vmContext.__filename`
  - Method `getRun`: similar to `getCall`, but with code from `vmContext.__filename`
 - Other
  - Function `makeProcess`: help `VMContext` to build a fake process
  - Function `makeGlobal`: help `VMContext` to create some global variables

## Examples

```javascript
var VMContext = require('vm-utils/vm-context.js');
var vmContext = new VMContext({
	console: global.console,
	count: 0
});
var calc = vmContext.getCall('console.log(count++)');
for (let i = 10; i; --i) calc();
```
