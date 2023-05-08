class Cell {

    #live;
    constructor(live) {
        if (live === false || live === true) {
            this.#live = live;
        } else {
            throw new Error("Invalid value given for creation of cell.");
        }

    }

    isAlive() {
        return this.#live;
    }

    nextGenerationCell(numOfAliveNeighbours) {

        if (this.isAlive()) {
            if (numOfAliveNeighbours >= 2 && numOfAliveNeighbours <= 3) {
                return new Cell(true);
            }
        }
        if (numOfAliveNeighbours == 3) {
            return new Cell(false);
        }
        return new Cell(false);
    }


}

module.exports = { Cell }