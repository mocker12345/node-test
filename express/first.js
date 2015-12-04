/**
 * Created by rancongjie on 15/12/4.
 */
var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('hello express');
});

var server = app.listen('8888', function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('访问地址:' + host + ':' + port);

});