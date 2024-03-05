// const addition = require("../calc");
// const subtract = require("../calc");
// const { test } = require("picomatch");
const {addition, subtract, multiply, divide} = require("../calc");


describe("Calculator", () => {
    
    describe("Addition function", () => {
        test("should return 42 for 20 + 22", () => {
            expect(addition(20, 22)).toBe(42);
        });
        test("should return 73 for 41 + 32", () => {
            expect(addition(41, 32)).toBe(73);
        });
        test("should return 10 for 5 + 5", () => {
            expect(addition(5, 5)).toBe(10);
        });
    });

    describe("Subtract function", () => {
        test("should return 10 for 20 - 10", () => {
            expect(subtract(20, 10)).toBe(10);
        });
        test("should return 5 for 10 - 5", () => {
            expect(subtract(10, 5)).toBe(5);
        });
        test("should return 0 for 5 - 5", () => {
            expect(subtract(5, 5)).toBe(0);
        });
    });

    describe("Multiply function", () => {
        test("should return 100 for 10 * 10", () => {
            expect(multiply(10, 10)).toBe(100);
        });
        test("should return 25 for 5 * 5", () => {
            expect(multiply(5, 5)).toBe(25);
        });
        test("should return 50 for 10 * 5", () => {
            expect(multiply(10, 5)).toBe(50);
        });

    });
    
    describe("Divide function", () => {
        test("should return 2 for 10 / 5", () => {
            expect(divide(10, 5)).toBe(2);
        });
        test("should return 5 for 25 / 5", () => {
            expect(divide(25, 5)).toBe(5);
        });
        test("should return 10 for 100 / 10", () => {
            expect(divide(100, 10)).toBe(10);
        });

    });

});