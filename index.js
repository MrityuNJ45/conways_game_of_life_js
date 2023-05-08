const {Board} = require("./models/board")



let board = new Board(3,3);
board.print();
console.log("==============================")
board.populate();
board.print();
console.log("==============================")
let nextBoard = board.boardForNextGeneration();
nextBoard.print();