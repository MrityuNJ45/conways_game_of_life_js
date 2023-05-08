const { Board } = require("../models/board")
const { Cell } = require("../models/cell")
const { isCellAliveAt, getNumberOfALiveNeighboursAt } = require("../models/cellBoardCommunicator")

test("Expects to give true when checking for live cell in a matrix", () => {

    let matrix = [];
    let cellRow1 = [];
    cellRow1.push(new Cell(true));
    cellRow1.push(new Cell(false));
    let cellRow2 = [];
    cellRow2.push(new Cell(true));
    cellRow2.push(new Cell(false));
    matrix.push(cellRow1);
    matrix.push(cellRow2);
    let result = isCellAliveAt(1, 0, matrix);
    expect(result).toBe(true);

});


test("Expects to give false when checking for live cell in a matrix", () => {

    let matrix = [];
    let cellRow1 = [];
    cellRow1.push(new Cell(true));
    cellRow1.push(new Cell(false));
    let cellRow2 = [];
    cellRow2.push(new Cell(true));
    cellRow2.push(new Cell(false));
    matrix.push(cellRow1);
    matrix.push(cellRow2);
    let result = isCellAliveAt(1, 1, matrix);
    expect(result).toBe(false);

});


test("Expects to give number of live neighbours at given position of a cell", () => {
    let matrix = [];
    let cellRow1 = [];
    cellRow1.push(new Cell(false));
    cellRow1.push(new Cell(true));
    let cellRow2 = [];
    cellRow2.push(new Cell(true));
    cellRow2.push(new Cell(true));
    matrix.push(cellRow1);
    matrix.push(cellRow2);
    let result = getNumberOfALiveNeighboursAt(0,0,matrix);
    expect(result).toBe(3);
})
