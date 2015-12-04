var event = require('events');
var eventEmitter = new event.EventEmitter();
var connectHander = function (){
  console.log('连接成功');
  eventEmitter.emit('data_');
}

eventEmitter.on('connect',connectHander);
var data = function (){
  console.log('读取成功');
}
eventEmitter.on('data_',data);

eventEmitter.emit('connect');

