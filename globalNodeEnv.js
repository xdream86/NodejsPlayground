require('./line.js')();

console.log(__dirname);

// module对象是独立存在于每个模块的

// 1. 加载第三方模块
// 搜索:npm install /^express$/
// shell 本地安装express: npm install express
// shell 全局安装express: npm install -g express
// 全局的安装目录在:/usr/local/lib/node_modules

var express = require('express'); // require通常返回一个对象或方法
console.log(__line, typeof express);

// 2. 划分文件到多个模块
// module.exports用来导出值
var myclass = require('./myclass');
console.log(__line, myclass.method());
// exports用来导出属性
var module2 = require('./module-2');
console.log(__line, module2.method2());

// 删除模块缓存
delete require.cache[require.resolve('./myclass')];

// 目录作为一个分组模块
var group = require('./group');
console.log(__line, group.one());
console.log(__line, group.two());

;// 加载模块的默认文件是package.json

// 使用__dirname, __filename相对路径访问文件
var path = require('path');
console.log(path.join(__dirname, 'group', 'one.js'));
console.log(__dirname + '/group/one.js');

console.log('%s', 'value');
console.log('%d', 3.14);
console.log('%j', {name : 'alex'}); // 打印json

console.trace();

console.time('start');
for (var i = 0; i < 10; i++) {
    console.log(i);
}
console.timeEnd('start');

// 获取操作系统和处理器架构信息
console.log(process.arch);

