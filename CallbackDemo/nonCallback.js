var fs = require('fs')

var num = undefined

function addOne(){
	fs.readFile('num.txt', function doneReading(err, data){
		num = parseInt(data);
		num ++
	})
}

addOne()

console.log(num);