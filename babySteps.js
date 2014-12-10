var sum = function() {
	var total = 0;
	for (var i = 2; i < process.argv.length; i++) {
		total += Number(process.argv[i]);
	}
	return total;
};
console.log(sum());