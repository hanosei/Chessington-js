import Piece from './piece';
import Square from '../square';
import GameSettings from '../gameSettings';

export default class King extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        const moves = [];
        let location = board.findPiece(this);
        let square;
        let piece;
        let row;
        let col;
        let rowStarting = location.row - 1;
        let colStarting = location.col - 1;
        let rowEnding = location.row + 1;
        let colEnding = location.col + 1;


        if (location.row===0)
            rowStarting = location.row;
        if (location.col===0)
            colStarting = location.col;
        if (location.row===GameSettings.BOARD_SIZE-1)
            rowEnding = location.row;
        if (location.col===GameSettings.BOARD_SIZE-1)
            colEnding = location.col;

        for (row = rowStarting; row <= rowEnding; row++) {
            for (col = colStarting; col<= colEnding; col++){
                if (!(row===location.row && col===location.col)) {
                    square = Square.at(row, col);
                    piece = board.getPiece(square);
                    if (super.isValidMove(piece)&& !(piece instanceof King)) {
                        moves.push(square);
                        if (piece)
                            break;
                    }
                    else
                        break;
                }
            }
        }
        return moves;
    }
}