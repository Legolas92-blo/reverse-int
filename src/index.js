module.exports = function reverse(n) {
	if (n > 0) {
		return n.toString().split('').reverse().join('')
	} else {
		const nNegative = n * (-1);
		return nNegative.toString().split('').reverse().join('')
	}

}