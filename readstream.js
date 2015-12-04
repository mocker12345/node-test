var a = require('fs');
var events = require('events');
var data = '';
var readStream = a.createReadStream('sb.txt');
readStream.setEncoding('UTF-8');
readStream.on('data',function(haha){
  data+=haha;
});
readStream.on('err',function(err){
 console.log(err.stack);
});
readStream.on('end',function(){
 console.log(data);
});
console.log('程序执行完毕');
