var fs = require('fs');

fs.readFile(process.argv[2], function doneReading(err, buf){
	var count = buf.toString().split('\n').length -1
	console.log(count);
});


