const Cell = require("./cell")
const Board = require("./board")


function isCellAliveAt(rowNo, columnNo, matrix) {

    if (rowNo < 0 || columnNo < 0 || rowNo >= matrix.length || columnNo >= matrix[0].length) {
        return false;
    }

    return matrix[rowNo][columnNo].isAlive();

}

function getNumberOfALiveNeighboursAt(rowNo, columnNo, matrix) {

    let count = 0;
    if (isCellAliveAt(rowNo+1,columnNo,matrix)) count += 1;
    if (isCellAliveAt(rowNo-1,columnNo,matrix)) count += 1;
    if (isCellAliveAt(rowNo,columnNo+1,matrix)) count += 1;
    if (isCellAliveAt(rowNo,columnNo - 1,matrix)) count += 1;
    if (isCellAliveAt(rowNo+1,columnNo+1,matrix)) count += 1;
    if (isCellAliveAt(rowNo+1,columnNo - 1,matrix)) count += 1;
    if (isCellAliveAt(rowNo-1,columnNo +1,matrix)) count += 1;
    if (isCellAliveAt(rowNo-1,columnNo-1,matrix)) count += 1;
    return count;
}


module.exports = {
    isCellAliveAt, getNumberOfALiveNeighboursAt
}