/**
 * Created by rancongjie on 15/12/7.
 */
var express = require('express');
var mongoose = require('mongoose');
var app = express();

mongoose.connect('mongodb://127.0.0.1:10001/angular-todo');

app.configure(function () {
  app.use(express.static(__dirname + '/public'));
  app.use(express.bodyParser());
  app.use(express.logger('dev'));
  app.use(express.methodOverride());
});

var Todo = mongoose.modle('All', {text: String});
app.get('/api/todos', function (req, res) {
  Todo.find(function (err, todos) {
    if (err) {
      res.send(err);
    } else {
      res.json(todos);
    }
  })
});
app.post('/api/create', function (req, res) {
  Todo.create({
    text: req.body.text,
    done: false
  }, function (err, todo) {
    if (err) {
      res.send(err);
    }
    Todo.find(function (err, todos) {
      if (err) {
        res.send(err);
      } else {
        res.json(todos);
      }
    });
  });
});
app.delete('/api/todos/:todo', function (req, res) {
  Todo.remove({
    _id: req.params.id
  }, function (err) {
    if (err) {
      res.send(err);
    }
    Todo.find(function (err, todos) {
      if (err) {
        res.send(err);
      } else {
        res.json(todos);
      }
    });
  });
});
app.get('*', function (req,res) {
  res.sendFile('./public/index.html');
});

app.listen(3000);