//匿名函数
function say(word){
    console.log(word);
}

function execute(someFunction,value){
    someFunction(value);
}
//将say函数作为execute函数的第一个变量进行了传递，返回say本身，不是say的返回值
execute(say,'Hello');

//匿名函数也可以直接在另一个函数的括号中定义鹤传递这个参数
//execute(function(word){
//    console.log(word)
//},'HELLO,WORLD');