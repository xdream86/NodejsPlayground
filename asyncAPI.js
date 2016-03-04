var EventEmitter = require('events').EventEmitter;
var fs = require('fs');
var content;

function readFileIfRequired(cb) {
    if (!content){
	fs.readFile(__filename, 'utf8', function(err, data) {
	    content = data;
	    console.log('readFileRequired: readFile');
	    cb(err, content);
	});
    } else {
	process.nextTick(function() {
	    console.log('readFileIfRequired: cached');
	    cb(null, content);
	});
    }
}

readFileIfRequired(function(err, data) {
    console.log('1.length:', data.length);

    readFileIfRequired(function(err, data2) {
	console.log('2.length:', data2.length);
    });

    console.log('Reading file again...');
});

console.log('Reading file');

/*

Reading file
readFileRequired: readFile
1.length: 682
Reading file again...
readFileIfRequired: cached
2.length: 682

*/
