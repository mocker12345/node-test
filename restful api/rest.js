/**
 * Created by rancongjie on 15/12/5.
 */
var express = require('express');
var fs = require('fs');
var api = express();
api.get('/listuser', function (req,res) {
  fs.readFile(__dirname+'/user.json','utf-8',function(err,data){
    if (err){
      return console.log(err);
    }else {
      res.end(data);
    }
  });
});


api.listen(3000);