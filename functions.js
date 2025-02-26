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

function reverseString (word) {
	if(typeof word != typeof 'string') {
		throw new TypeError('Parameter is not a string!')
	}

	let str = ''
	for(let i = word.length - 1; i >= 0; i--) {
		str += word[i]
	}
	return str
}

class calculator {
	static #verifyInput(a, b) {
		if (isNaN(a)) throw new TypeError()
		if (isNaN(b)) throw new TypeError()
	}

	static add(a, b) {
		this.#verifyInput(a, b)
		return a + b
	}

	static subtract(a, b) {
		this.#verifyInput(a, b)
		return a - b
	}

	static divide(a, b) {
		this.#verifyInput(a, b)
		return a / b
	}

	static multiply(a, b) {
		this.#verifyInput(a, b)
		return a * b
	}
}

module.exports = {capitalize, reverseString, calculator}