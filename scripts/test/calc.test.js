
const addition = require("../calc");


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
    describe("Multiply function", () => {

    });
    describe("Divide function", () => {

    });
});