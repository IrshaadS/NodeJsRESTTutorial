var fs = require('fs');
var path = require('path');

fs.readdir(process.argv[2], function onreadComplete(err, list){

	var ext = '.' + process.argv[3];
	
	for (var i = 0; i < list.length; i++) {
		if(ext == path.extname(list[i])){
			console.log(list[i]);
		}
	}
});