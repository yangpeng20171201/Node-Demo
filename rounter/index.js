//扩展index.js,使得路由函数可以被注入到服务器中
var server = require("./server");
var router = require("./router");

server.start(router.route);