//例子1
var fs = require("fs");
fs.readFile('../input.txt',
    function (err, data) {
        if (err) return console.error(err);
        console.log(data.toString());
        console.log("end");
        console.log("***********************");
    });
//例子2
//1、eventEmitter.emit 是触发事件（事件请求），eventEmitter.on是绑定处理事件的处理器（事件处理），事件的请求和处理是分开的，所以是异步。
var events = require("events");
var eventEmitter = new events.EventEmitter();
var connectHandler = function connected() {
    console.log("connnect successfully !");
    eventEmitter.emit("after_connect");
}
eventEmitter.on("connected", connectHandler);
eventEmitter.on('after_connect',
    function () {
        console.log("after connect");
    });
eventEmitter.emit("connected");
console.log("event emitter end");