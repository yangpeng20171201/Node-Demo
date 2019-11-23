var buffer1 = new Buffer('Buffer多个成员合并');
var buffer2 = new Buffer('www.w3chool.cn');
var buffer3 = Buffer.concat([buffer1,buffer2]);
console.log("buffer3的内容为" + buffer3.toString());