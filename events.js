var event = require('events').EventEmitter;
var eventEmitter = new event();

var listen1 = function (){console.log('监听器1执行');}
var listen2 = function () {console.log('监听器2执行')}
eventEmitter.addListener('connect',listen1);
eventEmitter.on('connect',listen2);
var lisenners = event.listenerCount(eventEmitter,'connect');
console.log(lisenners +'个监听器');
eventEmitter.emit('connect');
eventEmitter.removeListener('connect',listen1);
lisenners = event.listenerCount(eventEmitter,'connect');
console.log(lisenners+'个监听器');
eventEmitter.emit('connect');
