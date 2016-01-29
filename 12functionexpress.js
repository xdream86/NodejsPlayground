require('./line')();

function functionName() {
}

console.log(functionName.name);

sayHi();

// 函数声明会被提升
function sayHi() {
}

// sayBye(); // 报错

// 函数表达式不会被提升
var sayBye = function() {
}

function factorial(num) {
    if (num <= 1) {
	return 1;
    } else {
	// return num * factorial(num - 1);
	// arguments.callee指向当前被调用函数的指针
	return num * arguments.callee(num - 1);
    }
}

// 在严格模式下arguments.callee不能使用，所以可以使用命名函数表达式解决
var factorial = (function f(num) {
    if (num <= 1) {
	return 1;
    } else {
	return num * f(num - 1);
    }
});

// 每个函数在被调用时都会取得两个特殊变量：this和arguments
var _color = 'red';
var f1 = {
    _color: 'black',
    getColor: function() {
	console.log(this._color);
	return function() {
	    return this._color;
	};
    }
};

console.log(__line, f1.getColor()()); // 输出undefined, 而非black


var _color = 'red';
var f1 = {
    _color: 'black',
    getColor: function() {
	console.log(this._color);
	that = this;
	return function() {
	    return that._color;
	};
    }
};

console.log(__line, f1.getColor()()); // 输出black

var i;
i = 10;
var i;
console.log(i); // 还是10

for (var i = 0; i < 10; i++) {
    console.log(i);
}

console.log('block ouside: i = ' + i);

// 通过匿名函数实现块级作用域
(function(){
for (var j = 0; j < 10; j++) {
    console.log(j);
}
    
})();
console.log('block ouside: j = ' + j);

