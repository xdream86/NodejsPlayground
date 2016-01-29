require('./line.js')();

// 原型继承
var person = {
    name: "Nicholas",
    friends: ["Shelby", "Court", "Van"]
}

var anotherPerson = Object.create(person);
anotherPerson.name = 'Grey';
anotherPerson.friends.push('Rob');

var yetAnotherPerson = Object.create(person);
yetAnotherPerson.name = 'Linda';
yetAnotherPerson.friends.push('Barbie');

console.log(__line, person.friends);

// Object.create(o, descriptor)接受两个参数，第二个参数是描述符对象
var newPerson = Object.create(person, {
    name: {
	value: "jack"

    }
});

console.log(__line, newPerson.name); // jack

// 组合继承
function SuperType(name) {
    this.name = name;
    this.colors = ['red', 'blue', 'green'];
}

SuperType.prototype.sayName = function() {
    console.log(__line, this.name);
}

function SubType(name, age) {
    SuperType.call(this, name);
    this.age = age;
}

SubType.prototype = new SuperType();
SubType.constructor = SubType;
SubType.prototype.sayAge = function() {
    console.log(__line, this.age);
}

var instance1 = new SubType('jack', 12);
instance1.sayName();
instance1.sayAge();
instance1.colors.push('black');
console.log(__line, instance1.colors);

var instance2 = new SubType('jack', 27);
instance2.sayName();
instance2.sayAge();
console.log(__line, instance2.colors);
// colors的输出结果表明，colors已经分别属于两个实例，不在两个模式之间共享
