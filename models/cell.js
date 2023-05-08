class Cell {

    #live;
    constructor(live) {
        if (typeof live !== "boolean") {
            throw new Error("Invalid value given for creation of cell.");
            
        } 
        this.#live = live;
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