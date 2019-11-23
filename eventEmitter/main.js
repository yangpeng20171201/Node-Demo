var events = require('events');
var emitter = new events.EventEmitter();
//EventEmitter 支持若干个事件监听器
emitter.on('some_event',function(arg1,arg2){
        console.log('listener1',arg1,arg2);
});
emitter.on('some_event',function(arg1,arg2){
    console.log('listener2',arg1,arg2);
});
//当事件发射时，注册到这个事件的事件监听器被依次调用，事件参数作为回调函数参数传递
emitter.emit('some_event','参数1','参数2');