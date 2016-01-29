
function Apple(type, color) {
    this.type = type;
    this.color = color;
    this.getInfo = getAppleInfo;
}

function getAppleInfo() {
    return this.color + ' ' + this.type + ' ' + 'apple';
}

var apple = new Apple('big');
apple.color = 'red';
console.log(apple.getInfo());
