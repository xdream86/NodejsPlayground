
var o = {};
// instead of
var o = new Object();

var array = [];
// instead of
var array = new Array();

// 使用对象字面量的方式创建对象

var apple = {
    type: "macintosh",
    color: 'red',
    getInfo: function () {
	return this.color + ' ' + this.type + ' apple';
    }
}

apple.color = 'pupple';
console.log(apple.getInfo());
