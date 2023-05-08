const { Cell } = require("../models/cell")

test("should not throw an error when live parameter is true or false", () => {
    expect(() => new Cell(true)).not.toThrow();
    expect(() => new Cell(false)).not.toThrow();
});

test("should throw an error when live parameter is not true or false", () => {
    expect(() => new Cell("true")).toThrow("Invalid value given for creation of cell.");
    expect(() => new Cell(null)).toThrow("Invalid value given for creation of cell.");
});


test("should return true when checking for is alive or not", () => {
    expect(new Cell(true).isAlive()).toBe(true);
});


test("should return false when checking for is alive or not", () => {
    expect(new Cell(false).isAlive()).toBe(false);
});