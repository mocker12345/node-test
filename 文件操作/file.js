/**
 * Created by rancongjie on 15/12/4.
 */
var fs = require('fs');
var util = require('util');

//open
//r+ 读写模式打开
//fs.open(path,flag,function(err,fd));
fs.open('../sb.txt', 'r+', function (err, fd) {
  if (err) {
    console.log(err);

  } else {
    console.log(fd.toString());
    console.log('开启成功')
  }
});

//stat
fs.stat('../sb.txt', function (err, stat) {
  if (err) {
    console.log(err);

  } else {
    console.log(stat);
    console.log(stat.isFile());
  }
});

//writeFile
var data = '擦屁屁屁屁';
fs.writeFile('../sb.txt', data, function (err) {
  if (err) {
    console.log(err)
  }else {
    fs.readFile('../sb.txt', function (err,data) {
      if (err){
        return console.log(err);
      }else {
        console.log(data.toString());
      }
    })
  }
});
//mkdir
//fs.mkdir('./tmp', function (err) {
//  if (err){
//    return console.log(err);
//  }else {
//    console.log('done')
//  }
//});
//readdir

fs.readdir('./', function (err,dir) {
  if (err){
    return console.log(err);
  }else {
    //console.log(util.inspect(dir));
    dir.forEach(function (data) {
      console.log(data);
    });
  }
});

//rmdir

fs.readdir('./tmp/', function (err) {
  if (err){
    return console.log(err);
  }else {

  }
});

