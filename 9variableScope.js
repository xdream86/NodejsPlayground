

if (true) {
    var color = 'red';
}

// 在if语句中声明的变量，会被添加到当前的执行环境
console.log(color); // color

// for语言初始化变量的表达式定义的变量，在循环结束后，依旧会存在与外部的执行环境中
for (var i = 0; i < 10; i++) {
}

console.log(i); // 10
