
var fs = require('fs');
var zip = require('zlib');
//压缩
//fs.createReadStream('sb.txt').pipe(zip.createGzip()).pipe(fs.createWriteStream('sb.txt.gz'));
//解压
//fs.createReadStream('sb.txt.gz').pipe(zip.createGunzip()).pipe(fs.createWriteStream('sb.txt'));
console.log(__filename);
console.log(__dirname);