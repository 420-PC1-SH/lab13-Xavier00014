const greet = require('./greeting.js');

describe("greeting", function () {
    test("Test return Hello, Luke", function () {
        let result = greet("Luke");
        expect(result).toEqual("Hello, Luke");
    });
    test("Test greet undefined", function () {
        let result = greet(undefined);
        expect(result).toEqual("Hello, there");
    });
    test("Test greet null", function () {
        let result = greet(null);
        expect(result).toEqual("Hello, there");
    });
    test("Test greet ''", function () {
        let result = greet("");
        expect(result).toEqual("Hello, there");
    });
})