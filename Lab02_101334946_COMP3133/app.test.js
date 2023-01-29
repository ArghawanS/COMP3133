const chai = require("chai")
const { describe } = require("mocha")
const calculator = require("./app/calculator")
let assert = chai.assert
const ADD = "add 5 and 2"
const SUB = "subtract 2 from 5"
const DIV = "divide 10 by 2"
const MUL = "multiply 5 by 2"
describe("calculator", function () {
	it(ADD, function () {
		assert.equal(calculator.add(5, 2), 7)
	})

	it(ADD, function () {
		assert.equal(calculator.add(5, 2), 8, `Expected to be 8 but got different ${calculator.add(5, 2)}`)
	})

	it(SUB, function () {
		assert.equal(calculator.sub(5, 2), 3)
	})
	it(SUB, function () {
		assert.equal(calculator.sub(5, 2), 5, `Expected to be 5 but got different ${calculator.sub(5, 2)}`)
	})

	it(MUL, function () {
		assert.equal(calculator.mul(5, 2), 10)
	})
	it(MUL, function () {
		assert.equal(calculator.mul(5, 2), 12, `Expected to be 12 but got different ${calculator.mul(5, 2)}`)
	})
	it(DIV, function () {
		assert.equal(calculator.div(10, 2), 5)
	})
	it(DIV, function () {
		assert.equal(calculator.div(10,2), 2, `Expected to be 5 but got different ${calculator.div(5,2)}`)
	})
})
