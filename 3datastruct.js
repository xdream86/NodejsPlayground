
var array = [];
array.push('red', 'blue', 'white');
console.log(array);
var item = array.pop();
console.log('pop a item = ' + item);
var item = array.shift(); // 在队列的前端推出元素
console.log('shift a item = ' + item);
var count = array.unshift('black'); // 在队列的前端插入元素
console.log(array);
array.reverse();  // 反转顺序
console.log(array);

var values = [0, 1, 5, 10, 15]; 
values.sort(); // [ 0, 1, 10, 15, 5 ], 排序调用元素的toString()方法进行排序
console.log(values);

// 使用自定义函数排序
function compare(v1, v2) {
    if (v1 < v2) {
	return -1;
    } else if (v1 == v2) {
	return 0;
    } else {
	return 1;
    }
}

values.sort(compare);
console.log(values);

// 对于数值类型或者其valueOf()方法会返回数值类型的对象类型，可以使用更简单的比较函数
function compare(value1, value2) {
    return value1 - value2;
}

// concat 连接两个数组
var colors = ['red', 'green'];
var color2 = colors.concat('yellow', ['black', 'brown']);
// 这里不会出现想oc那样，末尾会出现整个数组对象
console.log(color2); // [ 'red', 'green', 'yellow', 'black', 'brown' ]

// slice求子数组，如果是一个参数，则得到从参数表示的数组下标到末尾
//  如果是两个参数，则得到从第一个参数表示的数组下标到第二个参数的数组下标-1
var array = ['red', 'yellow', 'green', 'black'];
console.log(array.slice(1));
console.log(array.slice(1, 3));
// 如果slice包含负数，比如slice(-2,-1)，长度为5， 最终的结果是slice(-2+5, -1+5)相同
// 如果结束位置小于起始位置，则返回空数组

// splice(v1, v2, v3); 可以执行插入，删除，替换
var array = ['red', 'green', 'blue']; // 删除
var item = array.splice(0, 1); 
console.log(array); // [ 'green', 'blue' ]
console.log(item);  // [ 'red' ]
array.splice(1, 0, 'black'); // 插入
console.log(array); // [ 'green', 'black', 'blue' ]
array.splice(1, 1, 'white'); // 替换
console.log(array); // [ 'green', 'black', 'blue' ]

// indexOf(v1, v2);支持两个参数，第一个是待查找项，第二个参数是起始的下标
var number = [1, 2, 3, 4, 5, 4, 3, 2, 1];
console.log(number.indexOf(4)); // 3
// every()和some()方法返回boolean值，filter()方法返回数组
var everyResult = number.every(function(item, index, array) {
    if (item > 2) {
	return true;
    }
});
console.log(everyResult); // false

var filteResults = number.filter(function(item, index, array) {
    if (item > 2) {
	return true;
    }
});
console.log(filteResults); // [ 3, 4, 5, 4, 3 ]

var mapResults = filteResults.map(function(item, index, array) {
    return item * 2;
});
console.log(mapResults); // [ 6, 8, 10, 8, 6 ] 每一项都乘以2

var mapResults = filteResults.forEach(function(item, index, array) {
    console.log('forEach', item);
});

var values = [1, 2, 3, 4, 5];
// reduce()第一次运行，发生在数组的第二个元素上，每次函数的返回值作为
// 下一次运行的第一个参数值
var sum = values.reduce(function(pre, cur, index,array) {
    return pre+cur;
});
console.log(sum);

// 日期对象
var date = new Date();

// 正则表达式用于处理是否匹配，返回boolean，以及获取匹配项
var text = 'this is a dog';
var pattern = /thI/ig;
var matches = pattern.exec(text);
console.log(matches[0]);

