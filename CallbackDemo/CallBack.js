var fs = require('fs')

var num = undefined

function addOne(callback){
	fs.readFile('num.txt', function onReadingComplete(err, data){

		num = parseInt(data)
		num++

		callback()
	})
}

function logMyNumber(){
	console.log(num);

}

addOne(logMyNumber);