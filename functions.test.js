const functions = require('./functions')

it('should throw error', ()=>{
	expect(() => {
		functions.capitalize({})
	})
	.toThrow(TypeError);
})

it('should capitalize the first letter in a string', ()=>{
	expect(functions.capitalize("hello world!"))
	.toBe("Hello world!")
})

it('should return the same string', ()=>{
	expect(functions.capitalize("1hello world!"))
	.toBe("1hello world!")
})
