//1.打印日志
var count = 5;
console.log('count : %d',count);//%d - 数值（整数或浮点数）。
// 打印: count: 5 到 stdout
console.log('count:', count);
// 打印: count: 5 到 stdout
console.log('count:', count, '-222', '-999');
// 打印： count:5-222-999。  log方法可以把多个参数连接一块输出。
console.info("这等于console.log");
//打印错误信息
console.error("error");
//打印警告信息
console.warn("warn");
//打印对象结构
var a = { age : 134, t : { name : "yves" , familyName : "Yang"}};
//dir方法非常有用，在可以辅助我们调试时查看对象内的属性和继承关系，
console.dir(a);
console.dir(a,{
    color:true,
    showHidden:true
})
//时间计时
console.time('lb1');
for (let i = 0; i < 100; i++) {}
console.timeEnd('lb1');
// 打印 lb1: 23.43ms