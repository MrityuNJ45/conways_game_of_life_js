const { Cell } = require("../models/cell")

class Board {

    #rows;
    #columns;
    #matrix;

    constructor(rows, columns) {
        if (typeof rows !== "number" || typeof columns !== "number" || rows <= 0 || columns <= 0) {
            throw new Error("Invalid rows and columns");
        }
        this.#rows = rows;
        this.#columns = columns;
        this.#matrix = [];
        for (let row = 0; row < this.#rows; row++) {
            let cellRow = [];
            for (let column = 0; column < this.#columns; column++) {
                cellRow.push(new Cell(false));
            }
            this.#matrix.push(cellRow);
        }
    }



    populate() {
        this.#matrix = [];
        for (let row = 0; row < this.#rows; row++) {
            let cellRow = [];
            for (let column = 0; column < this.#columns; column++) {
                let randomVal = Math.round(Math.random());
                if (randomVal == 1) {
                    cellRow.push(new Cell(true));
                } else {
                    cellRow.push(new Cell(false));
                }
            }
            this.#matrix.push(cellRow);
        }
    }

    equals(anotherBoard) {
        if (!(anotherBoard instanceof Board)) {
            throw new Error("Invalid board to compare with.")
        }
        if (this.#rows != anotherBoard.#rows || this.#columns != anotherBoard.#columns) {
            return false;
        }

        for (let row = 0; row < this.#rows; row++) {
            for (let column = 0; column < this.#columns; column++) {
                if (this.#matrix[row][column].isAlive() !== anotherBoard.#matrix[row][column].isAlive()) {
                    return false;
                }
            }
        }

        return true;
    }

    toString() {
        return `Board { Rows : ${this.#rows}, Columns : ${this.#columns}, Matrix : ${this.#matrix}}`;
    }


}


module.exports = { Board }