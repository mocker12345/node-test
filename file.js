var fs = require('fs');
var data=fs.readFile('sb.txt',function(err,data){
	if(err) return console.log(err);
	console.log(data.toString());
});
