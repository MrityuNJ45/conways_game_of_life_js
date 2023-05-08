class Cell {

    #live;
    constructor(live) {
        if (live === false || live === true) {
            this.#live = live;
        }else{
            throw new Error("Invalid value given for creation of cell.");
        }
    
    }

    isAlive() {
        return this.#live;
    }

    nextGenerationCell(numOfAliveNeighbours)


}

module.exports = {Cell}