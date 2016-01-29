
// 在js中类被称为引用类型，对象是引用类型的一个实例

var obj = new Object(); // 使用new操作符创建对象
obj.name = 'nicheal';

// 使用对象字面量的形式
var obj = { // 花括号表示表达式的开始，如果在if语句 条件的后面，表示一个语句块的开始
    name: 'nicheal', // "name": 'nicheal' 也可以
    age: 29 // 数值属性名会自动被转为字符串
};

var obj = {}; // 只包含默认属性和方法的对象
obj.name = 'nicheal'
obj.age = 29;


function displayInfo(args) {
    var output = '';
    
    if (typeof args.name == 'string') {
	output += 'name: ' + args.name + '\n';
    }

    if (typeof args.age == 'number') {
	output += 'age: ' + args.age + '\n';
    }

    console.log(output);
}

displayInfo({name: 'jam', age: 100}); // 对必选参数使用命名参数，对可选参数使用对象字面量封装可选参数

console.log(obj['age']); // 使用方括号访问对象的属性
console.log(obj.age); // 使用点语法访问对象的属性

var array = ['red', 'blue', 'green'];
var name = [];
var values = [1, 2];
var array = new Array(3);
var array = new Array('red', 'blue', 'green');
console.log(array.length); // 3
array[3] = 'pupple'; // 超出索引，数组自动增加到该索引加1的长度
console.log(array.length); // 4
array[6] = 'white'; // 7
array.length = 3;  // length的长度是可写的，所以可用于移除数组中的项
console.log(array[3]);  // undefined
array[array.length] = 'black';
array[array.length] = 'brown'; // 向数组尾部追加项

var o1 = {
    toLocaleString: function() {
	return 'a';
    },
    toString: function() {
	return 'aa';
    }
};

var o2 = {
    toLocaleString: function() {
	return 'b';
    },
    toString: function() {
	return 'bb';
    }
};

// 每个对象都有toLocaleString(), toString()和valueOf()方法
var array = [o1, o2]; 
console.log(array);
console.log(array.toString());
console.log(array.toLocaleString());
console.log(array.join('||')); // 使用不一样的分隔符
