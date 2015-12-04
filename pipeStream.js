var fs = require('fs');
var readStream = fs.createReadStream('input.txt');
var writeStream = fs.createWriteStream('output.txt');
readStream.pipe(writeStream);
readStream.on('data',function(chunk){
 console.log(chunk.toString());
});
readStream.on('end',function(err){
  console.error(err);
});
