//代码 require('./hello') 引入了当前目录下的 hello.js 文件（./ 为当前目录，node.js 默认后缀为 js）。
//创建一个模块
var hello = require('../Module-System/hello');
var Object = require('../Module-System/object');
hello.world();
object = new Object();
object.setName('Yves');
object.sayHello();