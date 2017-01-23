/**
 * Created by DHUser on 2017/1/16.
 */
// 引入 events 模块
var events = require('events');
// 创建 eventEmitter 对象
var eventEmitter = new events.EventEmitter();
// 创建事件处理程序
var connectHandler = function connected() {
    console.log('连接成功。');
    // 触发 data_received 事件
    /*for(var i=0;i<10;i++) {
        //eventEmitter.emit('data_received',i);
        //eventEmitter.emit('data_received',{"name":'chenyb'+i});
        eventEmitter.emit('data_received',[{"name":'chenyb'+i}]);
    }*/
    var i=0;
    for(var i=0;i<1;i++) {
        setTimeout(function () {
            eventEmitter.emit('data_received', [{"name": 'chenyb'+i}]);
        }, 1000);
    }
}
// 绑定 connection 事件处理程序
eventEmitter.on('connection', connectHandler);

// 使用匿名函数绑定 data_received 事件
eventEmitter.on('data_received', function(data){
    //console.log('数据接收成功。'+i);
    //console.log('数据接收成功。'+data.name);
    console.log('数据接收成功。'+data[0].name);
});
// 触发 connection 事件
eventEmitter.emit('connection');
for(var i=0;i<10;i++) {
    setTimeout(function () {
        eventEmitter.emit('data_received', [{"name": 'chenyb'+i}]);
    }, 1000);
}

console.log("程序执行完毕。");