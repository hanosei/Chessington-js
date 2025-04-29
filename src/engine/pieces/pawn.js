import Player from '../player';
import Square from '../square';
import Piece from './piece';

export default class Pawn extends Piece {
    constructor(player) {
        super(player);
        this.firstMove = true;
    }

    moveTo(board, square) {
        this.firstMove = false;
        super.moveTo(board, square);
    }

    getAvailableMoves(board) {

        let availableMoves = [];
        let location = board.findPiece(this);
        const firstSquareWhite = Square.at(location.row + 1, location.col)
        const secondSquareWhite = Square.at(location.row + 2, location.col)
        const firstSquareBlack = Square.at(location.row - 1, location.col)
        const secondSquareBlack = Square.at(location.row - 2, location.col)

        console.log(board, "<<< board", location, "<<<<location");

        if (this.player === Player.WHITE) {
            
            if (this.checkIfEmpty(board, firstSquareWhite)) {
                availableMoves.push(firstSquareWhite);
            }
            if (this.firstMove && this.checkIfEmpty(board, firstSquareWhite) && this.checkIfEmpty(board, secondSquareWhite)) {
                availableMoves.push(secondSquareWhite);
            }
        } else {
            if (this.checkIfEmpty(board, firstSquareBlack)) {
                availableMoves.push(firstSquareBlack);
            
            }
            if (this.firstMove && this.checkIfEmpty(board, firstSquareBlack) && this.checkIfEmpty(board, secondSquareBlack)) {
                availableMoves.push(secondSquareBlack);
            }
        }
        return availableMoves;
    }

    checkIfEmpty(board, square) {
        return !board.getPiece(square);
    }
}