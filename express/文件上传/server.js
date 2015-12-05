var express = require('express');
var bodyparser = require('body-parser');
var multer = require('multer');
var fs = require('fs');
var app = express();
app.use(bodyparser.urlencoded({extended: false}));
app.use(multer({dest: '/tmp'}).array('image'));
app.get('/index.html', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});
app.post('/upload', function (req, res) {
  console.log(req.files[0]);
  var des_name = __dirname + '/tmp/' + req.files[0].originalname;
  fs.readFile(req.files[0].path, function (err, file) {
    if (err) {
      return console.log('错误');
    } else {
      fs.writeFile(des_name, file, function (err) {
        if (err) {
          return console.log('写入失败');
        } else {
          var response = {
            message: 'success',
            filename: req.files[0].originalname
          };
          res.end(JSON.stringify(response));

        }
      })
    }
  })
});
app.listen(3000);