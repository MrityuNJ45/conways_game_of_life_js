const { Board } = require("../models/board")

test("Expects not to throw expection when valid input is given", () => {

    expect(() => new Board(2, 2)).not.toThrow();

})


test("Expects to throw expection when invalid input is given", () => {

    expect(() => new Board("hello", 2)).toThrow("Invalid rows and columns");

})


test("Expects to return true when 2 similar boards are compared", () => {

    let board = new Board(2, 2);
    let anotherBoard = new Board(2, 2);
    expect(board.equals(anotherBoard)).toBe(true);

})

test("Expects to return false when 2 different boards are compared", () => {
    let board = new Board(2, 2);
    let anotherBoard = new Board(3, 3);
    expect(board.equals(anotherBoard)).toBe(false);
})


test("Expects to throw error when invalid board is compared with a board", () => {
    let board = new Board(2, 2);
    expect(() => { board.equals("invalid stuff") }).toThrow("Invalid board to compare with.");
})


test("Expects to return false when initial board is compared with another board after populate", () => {
    let board = new Board(2, 2);
    let anotherBoard = new Board(2, 2);
    board.populate();
    expect(board.equals(anotherBoard)).toBe(false);
})