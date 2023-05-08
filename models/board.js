const {Cell} = require("../models/cell")

class Board {

    #rows;
    #columns;
    #matrix;

    constructor(rows, columns){
        if(typeof rows !== "number" || typeof columns !== "number" || rows <= 0 || columns <= 0){
            throw new Error("Invalid rows and columns");
        }
        this.#rows = rows;
        this.#columns = columns;
        this.#matrix = [];
        for(let row = 0; row < this.#rows; row++){
            let cellRow = [];
            for(let column = 0; column < this.#columns; column++){
                cellRow.push(new Cell(false));
            }
            this.#matrix.push(cellRow);
        }
    }


}


module.exports = {Board}