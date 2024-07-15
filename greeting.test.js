const processor = require('./greeting.js');

describe("greeting", function () {
    test("Test return Hello, Luke", function () {
        let result = greet("Luke");
        expect(result).toEqual("Hello, Luke");
    });
})