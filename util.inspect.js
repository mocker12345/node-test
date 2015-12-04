var uitl = require('util');

function h () {
  this.name = 'rancongjie';
  this.sayName = function () {
    console.log(this.name);
  }
}
h.prototype.age = 19;
var s = new h();
console.log(uitl.inspect(s,true));