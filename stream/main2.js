//写入流
var fs = require('fs');
var data = '这里是Stream中的写入流';

//创建一个可以写入的流，写入到文件output.txt 中
var writerStream = fs.createWriteStream('../stream/output.txt');

// 使用 utf8 编码写入数据
writerStream.write(data,'UTF8');

//标记文件末尾
writerStream.end();

//处理流事件 -->data,end,and error

writerStream.on('finish',function(){
console.log('文件写入完成');
});

writerStream.on('error',function(){
         console.log(err.stack);
});

console.log("程序执行完毕");
