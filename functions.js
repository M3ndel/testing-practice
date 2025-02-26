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

function caesarCipher(str, shift) {
	if(typeof str != typeof 'string') {
		throw new TypeError()
	}

	if(typeof shift != typeof 1) {
		throw new TypeError()
	}

	cipher = ''
	for (let i=0; i < str.length; i++) {
		let char = str.charCodeAt(i)
		if (char >= 97 && char <= 122) {
			cipher += String.fromCharCode((char - 97 + shift) % 26 + 97)
		}
		else if (char >= 65 && char <= 97) {
			cipher += String.fromCharCode((char - 65 + shift) % 26 + 65)
		} else {
			cipher += str[i]
		}
	}
	return cipher
}

module.exports = {capitalize, reverseString, calculator, caesarCipher}