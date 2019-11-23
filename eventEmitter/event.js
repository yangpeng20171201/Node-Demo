var EventEmitter= require('events').EventEmitter;
var event = new EventEmitter();
//注册一个some_event监听器
event.on('some_event',function(){
    console.log('some_event 事件触发.');
});
//为指定事件注册一个单次监听器，即监听器最多只会触发一次，触发后立即解除该监听器
event.once('connection',function(){
    console.log('Ah,we have our first user!');
});
//注册一个监听器
var callback = function () {
    console.log('someone connected');
}
event.on('connected',callback);
//移除connected这个监听器
event.removeListener('connected',callback);
//error事件
event.emit('error');
setTimeout(function(){
    event.emit('some_event');
},1000);