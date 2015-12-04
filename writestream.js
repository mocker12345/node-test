var fs = require('fs');
var data = 'rancongjie';
var writeStream = fs.createWriteStream('sb.txt');
writeStream.write(data,'utf-8');
writeStream.end();
writeStream.on('finish',function(){
  console.log('写入完成');
});
writeStream.on('err',function(err){
  console.log(err);
});
var readStream = fs.createReadStream('sb.txt');
readStream.setEncoding="UTF-8";
var chunk='';
readStream.on('data',function(hahah){
  chunk = hahah;
});

readStream.on('end',function(){
  console.log(chunk.toString());
});
