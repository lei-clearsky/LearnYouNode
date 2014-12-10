var fs = require('fs');

var fileName = process.argv[2];

var file = fs.readFileSync(fileName);

var fileContent = file.toString();

console.log(fileContent.split('\n').length - 1);