/**
 * Created by rancongjie on 15/12/5.
 */
var express = require('express');
var cookie = require('cookie-parser');

var app = express();
app.use(cookie());
app.get('/', function (req,res) {
  console.log(req.cookies);
});
app.listen(3000);