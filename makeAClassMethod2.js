
function Apple(type, color) {
    this.type = type;
    this.color = color;
    this.getInfo = function getAppleInfo() {
	return 'a ' + this.type + ' ' + this.color + ' apple';
    }
}

var apple = new Apple('big', 'red');
console.log(apple.getInfo());

