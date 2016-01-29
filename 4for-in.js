
var count = 0;
for (var i = 0; i < 10; i++) {
    count = count + i;
}

console.log("count = %s", count);

var items = ['1', '2', '3', '4'];

for (var item in items) {
    console.log(items[item]);
}
