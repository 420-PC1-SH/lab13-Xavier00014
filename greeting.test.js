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
    test("Test greet HAN", function () {
        let result = greet("HAN");
        expect(result).toEqual("HELLO, HAN");
    });
    test("Test greet 2 people", function () {
        let result = greet(["Jango", "Boba"]);
        expect(result).toEqual("Hello, Jango and Boba");
    });
    test("Test greet 3 people", function () {
        let result = greet(["Jill", "Jane", "Leia"]);
        expect(result).toEqual("Hello, Jill, Jane and Leia");
    });
})