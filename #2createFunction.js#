// 函数是对象
function sum1(a, b) {
    return a + b;
}

var sum2 = function(a, b) {
    return a + b;
};

console.log(sum2(1, 2));

function addSomeNumber(num) {
    return num + 100;
}

function addSomeNumber(num) {
    return num + 200;
}

console.log(addSomeNumber(1));
// function 可以理解为 函数是对象，函数名是指向函数对象的指针
addSomeNumber = function(num) {
    return num + 100;
}

addSomeNumber = function(num) {
    return num + 200;
}

console.log(addSomeNumber(1));

function factorial(num) {
    if (num <= 1) {
	return 1;
    } else {
	return num * arguments.callee(num - 1);
    }
}

console.log(factorial(3));

// 函数对象内部包含了三个对象：arguments, caller和this,
// arguments除了保存函数的参数，还有一个名叫callee的属性，该属性是一个指针，指向拥有这个arguments对象的函数
// caller指向调用当前函数的函数的引用

// 函数外部的属性：length和prototype
// length表示函数希望接收的函数的个数
// prototype表示—————————————————————————————————————————————————————————————————————————————————————————————————————
// 每个函数对象包含两个非继承而来的方法:apply()和call()
// apply(v1, v2)接受两个参数，v1表示作用域对象，v2是Array的实例或者arguments对象
// call和apply方法最大的作用是可以更改函数执行的作用域
// 让对象与方法不需要任何耦合关系
function sum(v1, v2) {
    return v1 + v2;
}

function callsum1(v1, v2) {
    return sum.apply(this, arguments);
// call和apply类似，只是参数是枚举方式给出
//  return sum.call(this, v1, v2);
}

function callsum2(v1, v2) {
    return sum.apply(this, [v1, v2]);
}

console.log(callsum1(1, 2));
console.log(callsum2(1, 2));

// ES5定义了一个bind()方法，用于创建一个函数的实例，并将this值绑定在生成的函数实例上
color = 'red';
var o = {color: 'blue'};

function sayColor() {
//    'use strict' //  严格模式下，未指定环境对象而调用函数，this将会是undefined
//    console.log(this);
    console.log(this.color);
}

sayColor(); // red
var b = sayColor.bind(o); // blue
b();
console.log(b.toString()); // function () { [native code] }

// 包装类型
var obj = new Object("string");
console.log(obj instanceof String); // true

// JS的数据类型包括：Undefined, Null, Boolean, Number, String,Object
// Boolean, Number, String是基本数据类型对象化的包装引用类型
var num = 10;
console.log(num.toString(2));

