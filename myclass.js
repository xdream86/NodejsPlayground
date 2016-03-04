function MyClass() {
}

MyClass.prototype = {
    method: function() {
	return 'hello';
    }
};

var myclass = new MyClass();
// 导出对象：modul.exports
module.exports = myclass;
