//阻塞代码案例
var fs = require("fs");
//读取的是上一级文件路径  ../
var data = fs.readFileSync('../input.txt');

console.log(data.toString());

console.log("程序执行结束");