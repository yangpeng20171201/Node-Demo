// 输出全局变量 __filename 的值
console.log( __filename );
// 输出全局变量 __dirname 的值
console.log( __dirname );
function printHello(){
    console.log( "Hello, World!");
 }

 // 两秒后执行以上函数
 var t = setTimeout(printHello, 2000);
 
 // 清除定时器
 clearTimeout(t);

 // 两秒后执行以上函数
// setInterval() 方法会不停地调用函数，直到 clearInterval() 被调用或窗口被关闭。
setInterval(printHello, 2000);