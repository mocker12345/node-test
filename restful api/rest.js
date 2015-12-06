/**
 * Created by rancongjie on 15/12/5.
 */
var express = require('express');
var fs = require('fs');
var api = express();
var bodyParser = require('body-parser');
var urlen = bodyParser.urlencoded({extended: false});
api.get('/listuser', function (req, res) {
  fs.readFile(__dirname + '/user.json', 'utf-8', function (err, data) {
    if (err) {
      return console.log(err);
    } else {
      res.end(data);
    }
  });
});
api.post('/adduser', urlen, function (req, res) {
  //res.set({'Content-Type': 'text/json', 'Encodeing': 'utf-8'});
  fs.readFile(__dirname + '/user.json', 'utf-8', function (err, data) {
    if (err) {
      return console.log(err);
    } else {
      console.log(req.body.name);
      data["user3"] = req.body;
      res.send('添加成功');
    }
  })
});

api.get('/search/:id/', function (req,res) {
  fs.readFile(__dirname+'/user.json','utf-8', function (err,data) {
    if (err){
      return console.log(err);
    }else {
      console.log(data);
      var data=JSON.parse(data);
      var user = data['user'+req.params.id];
      res.send(user);
    }
  })
});


api.listen(3000);