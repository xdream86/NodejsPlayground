require('./line.js')();

// 使用对象字面量定义对象

var o = {
    name: "jack"
};

console.log(o.name);
o.name = "micke";
console.log(__line,o.name);

// Object.defineProperty(object, propertyName, descriptor)
// 接受三个参数，第一个是对象，第二个是属性名，第三个是一个描述符对象
// 描述符支持：configurable, enumerable, writable, value，
// 如果在调用defineProperty不指定描述符，configurable, enumerable, writable都是false
// configurable：是否可以通过delete删除属性，是否能够修改属性的特性，是否能把属性修改为访问器属性,属性一旦被定义为不可配置，则无法改回去
// enumerable: 是否可以通过for-in枚举属性
// writable: 是否能修改属性的值
// value: 属性的数据值，默认是undefined

Object.defineProperty(o, "name", {
    writable: false,
    value: "jhon"
});

console.log(__line,o.name); // jhon
o.name = "micke";
console.log(__line,o.name); // 还是jhon

// ES包含两类属性：数据属性和访问器属性
var o = {
    _year: 2004,
    diff: 0
}

Object.defineProperty(o, "year", {
    get: function() {
	return this._year; // 使用this访问
    },
    set: function(year) {
	diff = this._year - year;
	this._year = year;
    }    	
});

console.log(__line,o.year, o.diff);
o.year = 2008;
console.log(__line,o.year, o.diff);

// defineProperty一次只能添加一个属性，
// defineProperties一次可以添加多个属性
var book = {};
Object.defineProperties(book, {
    _yeart: {
	writable: true,
	value: 2004
    },
    edition: {
	writable: true,	 // 如果不给出配置，默认是false，不可写
	value: 1
    },
    year: {
	get: function() {
	    return this._yeart;
	},
	set: function(newValue) {
	    this._yeart = newValue;
	    this.edition = newValue - 2014;
	}
    }
});

book.year = 2100;
console.log(__line,'year ' + book.year); // year 2100
console.log(__line,'edition ' + book.edition);  // edition 86

// 创建自定义的构造函数
function Person(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
    this.sayName = function() { // 函数是对象，直接将函数作为属性值
	console.log(__line,this.name);
    }
}

var person = new Person('nick', 18, 'software enginire');

console.log(__line,person.constructor == Person) // true
console.log(__line,person instanceof Object) // true
console.log(__line,person instanceof Person) // true, 既是Object类型 也是Person类型

// 构造函数也是普通函数，如果不是用new调用函数，它和普通函数没有什么区别
Person('nick', 12, 'cia'); // this.name
console.log(__line,"this.name = " + this.name);

// 在另一个对象作用域中调用
var o1 = new Object();
Person.call(o1, "nick", 12, "cia");
o1.sayName(); // nick

// 原型prototype
// 每一个函数都有一个prototype属性，它指向一个对象
// 该对象用途是包含可以由特定类型的所有实例共享的属性和方法
// 当创建一个函数，就会为该函数创建一个prototype属性，该属性指向函数的原型对象。
// 默认情况下，所有原型对象都会自动获得一个constructor(构造函数)属性，这个属性包含一个指向prototype所在函数的指针
// Person.prototype.constructor 指向 Person. 而通过这个构造函数，还可以为原型对象添加其他属性和方法

function Person1() {
}

Person1.prototype.name = 'Nicholas';
Person1.prototype.age = 29;
Person1.prototype.job = 'Software Engineer';
    
Person1.prototype.sayName = function() {
    debugger;
    console.log(__line,this.name);
}

var person1= new Person1();
person1.sayName();

var person2 = new Person1();
person2.sayName();

// 如果person1内部的[[prototype]]指向Person1.prototype，则返回true
console.log(__line, Person1.prototype.isPrototypeOf(person1)); // true
// Object.getPrototypeOf获取对象的原型对象
console.log(__line, Object.getPrototypeOf(person1) == Person1.prototype);

person2.name = 'ladygaga';
person2.sayName();
delete person2.name // 删除给对象实例添加的属性;
person2.sayName();

// hasOwnProperty必须是实例属性才返回true,原型属性返回false
console.log(__line, person2.hasOwnProperty("name")); // false

// in 操作符使用场景：单独使用或在for-in中使用
// 单独使用时，判断通过对象是否能够访问到属性，不管是实例属性还是原型属性
console.log(__line, "name" in person1); // true

// 所以要判断一个属性是否只在原型上
function hasPrototypeProperty(object, property) {
    return !object.hasOwnProperty(property) && (property in Object);
}

console.log(__line, hasPrototypeProperty(person1, "name")); // true
person1.name = 'jack';
console.log(__line, hasPrototypeProperty(person1, "name")); // false

// 使用for-in循环时，返回所有能通过对象访问的、可枚举(enumerated)属性，其中既包括
// 实例属性，也包括原型属性。屏蔽了原型中不可枚举属性的实例属性也会出现在for-in列表中

for (var i in person2) {
    console.log(__line, i);
}

// 获取对象上的所有可枚举实例属性  
var allEnumableKeys = Object.keys(Person1.prototype);
console.log(__line, allEnumableKeys);

// 获取对象上所有属性，不管是否可否枚举
var allKeys = Object.getOwnPropertyNames(Person1.prototype);
console.log(__line, allKeys);
    
// 调用构造函数时会为实例添加一个指向最初原型的[[Prototype]]指针
// 修改原型会切断实例到原型之间的联系

function Dog() {
}

var dog = new Dog();

Dog.prototype = {
    constructor:Dog,
    name: 'jc',
    sayName: function() {
       console.log(this.name);
   }
}

// dog.sayName(); // error, 最初创建的dog并没有指向后续创建的原型对象

// 对原生类型添加方法
String.prototype.startWith = function(text) {
    return this.indexOf(text) == 0;
}

var h = 'hello world';
console.log(__line, h.startWith('he'));

// 原型模式中属性和方法是被实例之间共享的

// 继承的实现
// 修改函数的原型对象，让其指向另一个类型的实例

function SuperType() {
    this.superTypeProperty = true;
}

SuperType.prototype.getSuperTypeProperty = function() {
    return this.superTypeProperty;
}

function SubType() {
    this.subtypeProperty = false;
}

SubType.prototype = new SuperType();
SubType.prototype.getSubValue = function() {
    return this.subtypeProperty;
}

var subType = new SubType();
console.log(__line, subType.getSubValue()); // false
console.log(__line, subType.getSuperTypeProperty()); // true

console.log(subType.constructor); // SuperType 因为Subtype.prototpye的constructor被重写了


