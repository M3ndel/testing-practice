const { error } = require("console")

module.exports = {capitalize}

function capitalize(word) {
	if(typeof word != typeof 'string') {
		throw new TypeError('Parameter is not a string!')
	}

	let firstCharCode = word.charCodeAt(0)
	if (firstCharCode >= 97 && firstCharCode <= 122) {
		return String.fromCharCode(firstCharCode - 32) + word.substring(1, word.length)
	}
	return word
}