var fs = require("fs");

// asynchronous - opening file
console.log("Going to open file!");
fs.open('input.txt', 'r+', function(err, fd) {
	if (err) {
		return console.error(err);
	}
	console.log("File opened successfully!");
});