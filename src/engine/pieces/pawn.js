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
        const availableMoves = [];
        let location = board.findPiece(this);
        if (this.player === Player.WHITE) {
            availableMoves.push(Square.at(location.row + 1, location.col));
            if (this.firstMove) {
                availableMoves.push(Square.at(location.row + 2, location.col));
            }
        } else {
            availableMoves.push(Square.at(location.row - 1, location.col));
            if (this.firstMove) {
                availableMoves.push(Square.at(location.row - 2, location.col));
            }
        }
        return availableMoves;
    }
}
