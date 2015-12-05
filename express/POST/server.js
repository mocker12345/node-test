/**
 * Created by rancongjie on 15/12/5.
 */
var express = require('express');
var bodyparser = require('body-parser');
var app = express();
var urlen = bodyparser.urlencoded({extended: false});


app.get('/index.html', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});
app.post('/process_post', urlen, function (req,res) {
  var response = {
    firstName:req.body.first_name,
    lastName:req.body.last_name
  };
  console.log(response);
  res.end(JSON.stringify(response));
});
app.listen(3000);