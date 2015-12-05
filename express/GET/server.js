/**
 * Created by rancongjie on 15/12/5.
 */
var express = require('express');
var app = express();
app.get('/index.html', function (req,res) {
  res.sendFile(__dirname+'/index.html');
});
//app.use(express.static('./index.html'));
app.get('/process_get', function (req,res) {
  var response ={firstName: req.query.first_name,lastName:req.query.last_name};
  res.send(response);
});
app.listen(3000);