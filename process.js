
process.stdin.resume(); // 防止Node程序直接退出
process.stdin.setEncoding('utf8');

process.stdin.on('data', function(text) {
    process.stdout.write(text.toUpperCase());
});

// process.argv得到一个数组, 
console.log(process.argv);

/* 假设输入node process.js -h aaa -v bbb得到
[ '/usr/local/Cellar/node/5.3.0/bin/node',
  '/Users/XiaJun/Desktop/Note/Node.js/javascript/jscode/process.js',
  '-h',
  'aaa',
  '-v',
'bbb' ]
*/

// 退出状态码使用:process.exit(1)

process.on('SIGHUP', function () {
    console.log('reloading configuration...');
});
console.log('pid: ', process.pid);

// 延迟执行代码
var timeId = setTimeout(function() {
    console.log('hello from the past!');
}, 5000);

// 取消延时
clearTimeout(timeId);

// 循环执行
function tick() {
    console.log('tick', Date.now());
}

function tock() {
    console.log('tock', Date.now());
}

setInterval(tick, 1000);

setTimeout(function() {
    setInterval(tock, 1000);
}, 500);


// 如果你有一个方法接受一个回调方法，并且需要异步的调用这个回调方法，你应该使用process.nextTick确保执行的顺序
// process.nextTick()方法允许你防止一个放置函数到下一个事件循环的开头。这意味着回调函数会被稍微延迟被调用
var EventEmitter = require('events').EventEmitter;

function complexOperations() {
    var events = new EventEmitter();
    process.nextTick(function() {
	events.emit('success');
    });

    return events;    
}

complexOperations().on('success', function() {
    console.log('success');
});
