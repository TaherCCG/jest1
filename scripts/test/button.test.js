/**
 * @jest-environment jsdom
 */

const buttonClick = require("../button");

beforeAll(() => {
    let fs = require("fs");
    let fileContents = fs.readFileSync("index.html", "utf-8");
    document.open();
    document.write(fileContents);
    document.close();
});

describe("DOM tests", () => {
    test("Expects content to change", () => {
        buttonClick();
        expect(document.getElementById("par")
            .innerHTML).toEqual("You Clicked");
    });
    test("h1 should be present", () => {
        const h1Element = document.querySelector("h1");
        expect(h1Element).not.toBeNull();
    });
    test("h1 should contain correct text", () => {
        const h1Element = document.querySelector("h1");
        expect(h1Element.textContent).toEqual("Jest Click Test");
    });
});