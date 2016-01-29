
var apple = new function() {
    this.type = 'big';
    this.color = 'red';
    this.getInfo = function () {
	return this.color + ' ' + this.type + 'apple';
    }
}

console.log(apple.getInfo());
