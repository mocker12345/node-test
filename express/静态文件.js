/**
 * Created by rancongjie on 15/12/5.
 */
var express = require('express');
var app = express();
app.use(express.static('./public'));
app.get('/', function (req,res) {
  res.send('hello')
});
app.listen(3000);
