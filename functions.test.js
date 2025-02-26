const functions = require('./functions')

it('should throw error', ()=>{
	expect(() => {
		functions.capitalize({})
	})
	.toThrow(TypeError)
})

it('should capitalize the first letter in a string', ()=>{
	expect(functions.capitalize("hello world!"))
	.toBe("Hello world!")
})

it('should return the same string', ()=>{
	expect(functions.capitalize("1hello world!"))
	.toBe("1hello world!")
})

it('should throw error', ()=>{
	expect(() => {
		functions.reverseString({})
	})
	.toThrow(TypeError)
})

it('should reverse order of the letters in a string', ()=>{
	expect(functions.reverseString("hello world!"))
	.toBe("!dlrow olleh")
})

it('should throw error', ()=>{
	expect(() => {
		functions.calculator.add({}, 10)
	})
	.toThrow(TypeError)

	expect(() => {
		functions.calculator.add(10, {})
	})
	.toThrow(TypeError)

	expect(() => {
		functions.calculator.add(10, 'a')
	})
	.toThrow(TypeError)

	expect(() => {
		functions.calculator.add('a', 10)
	})
	.toThrow(TypeError)
})

it('should calculate', ()=>{
	expect(functions.calculator.add(5, 10))
	.toBe(15)

	expect(functions.calculator.subtract(5, 10))
	.toBe(-5)

	expect(functions.calculator.divide(5, 10))
	.toBe(0.5)

	expect(functions.calculator.multiply(5, 10))
	.toBe(50)
})

it('should throw error', ()=>{
	expect(() => {
		functions.caesarCipher({}, 3)
	})
	.toThrow(TypeError)

	expect(() => {
		functions.caesarCipher({}, '3')
	})
	.toThrow(TypeError)
})

it('should encrpyt the message', ()=>{
	expect(functions.caesarCipher('Hello, World!', 3))
	.toBe('Khoor, Zruog!')
})

it('should not change the message', ()=>{
	expect(functions.caesarCipher('Hello, World!', 26))
	.toBe('Hello, World!')
})

it('should encrpyt the message', ()=>{
	expect(functions.caesarCipher('Hello, World!', -1))
	.toBe(functions.caesarCipher('Hello, World!', 25))
})