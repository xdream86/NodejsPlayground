// String类型的实例包含一个length方法
var sValue = "hello";
console.log(sValue.length);
var sObject = new String('hello');
console.log(sObject.length);

console.log(typeof sValue); // string
console.log(typeof sObject); // object

// 去下标位置的字符
console.log(sValue.charAt(1)); // e
console.log(sValue[1]); // e

// 求[1, 2)内的子字符串
console.log(sValue.substring(1, 2)); // e
// substr最后一个参数是字符串的长度
console.log(sValue.substr(1, 2)); // el

// indexOf(v1, v2?)和lastIndexOf(v1, v2?)
// 获取字符串的位置,v1是字符串,v2是可选的，表示从什么位置开始
// lastIndexOf的v2，如果v2是7，表示7之后的都不算
// 如果找不到，返回-1

// trim()方法会创建一个字符串副本，移除首位的空格

// toLowerCase()和toUpperCase()转换字符串小写和大写

// match(pattern)方法接受一个正则表达式，方法返回一个数组，数组的第一项是与整个模式匹配的字符串
// search(pattern)方法接受一个正则表达式，返回匹配项第一次出现的位置
// replace(pattern, withString) 或 replace(pattern, function),
// 接受一个正则表达式和替换用的字符串，或一个函数

function htmlEscape(text) {
    return text.replace(/[<>"&]/g, function(match, pos, originalText) {
	switch (match) {
	case "<":
	    return "&lt;";
	    break;
	case ">":
	    return "&gt;";
	    break;
	case "&":
	    return "&amp;";
	    break;
	case ";":
	    return "&quot;";
	    break;
	}
    });
}

console.log(htmlEscape("<>")); // &lt;&gt;

var colorText = "red, blue, white, black";
var colors = colorText.split(","); // split(",", 2);接受第一个参数，2表示只包含前2个元素
console.log(colors);

// 比较字符串localCompare()
var s = "yellow";
console.log(s.localeCompare('zellow')); // -1
// fromCharCode是一个字符串静态方法
console.log(String.fromCharCode(104, 101, 108, 108, 111)); // hello

console.log(Math.PI); // 3.141592653589793
var max = Math.max(3, 54, 32, 16);
var min = Math.min(3, 54, 32, 16);
console.log(max, min);

// 舍入
var a = Math.ceil(5.1); // 6
var b = Math.round(5.5); // 6
var c = Math.floor(5.5); // 5
console.log(a, b, c);

