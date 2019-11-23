//非阻塞代码实例  不需要等待文件读取完才能执行接下来的代码，可以同时执行
var fs = require("fs");
//和阻塞代码示例不同的是执行的是fs.readFile方法
fs.readFile('../input.txt',function(err,data){
    if (err) return console.error(err);
    console.log(data.toString());

});
console.log("程序执行结束");