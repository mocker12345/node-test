var util = require('util');
function parent (){
  this.name = 'rancongjie';
  this.base = 1993;
  this.sayHello = function () {
    console.log('hello'+this.name);
  }
}
parent.prototype.sayName = function () {
  console.log(this.name);
};

function child () {
  this.name = 'chaonima';

}
util.inherits(child,parent);
var h = new child();
//h.sayHello();  //只继承原型中的内容
h.sayName();
