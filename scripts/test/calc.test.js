// const { test } = require("picomatch");        Why does this line keep appearing?

// Import the functions to be tested
const {addition, subtract, multiply, divide} = require("../calc");

// Test suite for the calculator
describe("Calculator", () => {
    // Addition function tests
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
        test('throws error when input is not a number', () => {
            expect(() => {
                addition('a', 10);
            }).toThrow("Invalid input. Please enter a number.");
        });
        test("should return 0.3 for 0.1 + 0.2", () => {
            expect(addition(0.1, 0.2)).toBeCloseTo(0.3);
        });
    });
    // Subtract function tests
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
        test("throws error when input is not a number", () => {
            expect(() => {
                subtract('a', 10);
            }).toThrow("Invalid input. Please enter a number.");
        });
        test("should return 0.1 for 0.3 - 0.2", () => {
            expect(subtract(0.3, 0.2)).toBeCloseTo(0.1);
        });
    });
    // Multiply function tests
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
        test("throws error when input is not a number", () => {
            expect(() => {
                multiply('a', 10);
            }).toThrow("Invalid input. Please enter a number.");
        });
        test("should return 0.06 for 0.2 * 0.3", () => {
            expect(multiply(0.2, 0.3)).toBeCloseTo(0.06);
        });

    });
    // Divide function tests 
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
        test("throws error when dividing by zero", () => {
            expect(() => {
                divide(10, 0);
            }).toThrow("Division by zero is not allowed.");
        });
        test("throws error when input is not a number", () => {
            expect(() => {
                divide('a', 10);
            }).toThrow("Invalid input. Please enter a number.");
        });
        test("should return 0.6 for 0.3 / 0.5", () => {
            expect(divide(0.3, 0.5)).toBeCloseTo(0.6);
        });
    });
});

// Run the tests
// npm test
// npm test -- --coverage
// npm test -- --watchAll
// npm test -- --verbose
// npm test -- --watch
