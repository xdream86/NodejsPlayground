
function Apple(type, color) {
    this.type = type;
    this.color = color;
}

Apple.prototype.getInfo = function getAppleInfo() {
    return this.type + ' ' + this.color + ' apples';
}

var apple = new Apple('big', 'red');
console.log(apple.getInfo());


