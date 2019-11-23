//object.js 
//把一个对象封装到模块中
function Object() { 
    var name; 
    this.setName = function(thyName) { 
        name = thyName; 
    }; 
    this.sayHello = function() { 
        console.log('Hello ' + name); 
    }; 
}; 
//模块接口的唯一变化是使用 module.exports = Hello 代替了exports.world = function(){}
module.exports = Object;