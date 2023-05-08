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


test("should return alive cell when no. of live neighbours will be 2 or 3 for live cell", () => {
    let cell = new Cell(true);
    let resultCell = cell.nextGenerationCell(2);
    expect(resultCell.isAlive()).toBe(true);
    let anotherCell = new Cell(true);
    let anotherResultantCell = anotherCell.nextGenerationCell(3);
    expect(anotherResultantCell.isAlive()).toBe(true);
})


test("should return dead cell when no. of live neighbours will be less than 2 or greater than 3 for live cell", () => {

    let cell = new Cell(true);
    let resultCell = cell.nextGenerationCell(1);
    expect(resultCell.isAlive()).toBe(false);
    let anotherCell = new Cell(true);
    let anotherResultantCell = anotherCell.nextGenerationCell(4);
    expect(anotherResultantCell.isAlive()).toBe(false);

});


test("should return live cell when no. of live neighbours will be equal to 3 for dead cell", () => {

    let cell = new Cell(false);
    let resultCell = cell.nextGenerationCell(3);
    expect(resultCell.isAlive()).toBe(false);
    
});