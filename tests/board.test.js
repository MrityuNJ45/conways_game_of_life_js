const {Board} = require("../models/board")

test("Expects not to throw expection when valid input is given", () => {

    expect(() => new Board(2,2)).not.toThrow();

})


test("Expects to throw expection when invalid input is given", () => {

    expect(() => new Board("hello",2)).toThrow("Invalid rows and columns");

})