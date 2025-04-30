import Piece from './piece';
import Square from '../square';
import GameSettings from '../gameSettings';

export default class Bishop extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        const bishopMoves = [];
        let location = board.findPiece(this);
        let row;
        let col;

        row = location.row - 1, col = location.col - 1;
        while (row >= 0 && col >= 0) {
            bishopMoves.push(Square.at(row, col));
            row --;
            col --;
        }

        row = location.row - 1, col = location.col + 1;
        while (row >= 0 && col < GameSettings.BOARD_SIZE) {
            bishopMoves.push(Square.at(row, col));
            row --;
            col ++;
        }

        row = location.row + 1, col = location.col - 1;
        while (row < GameSettings.BOARD_SIZE && col >= 0) {
            bishopMoves.push(Square.at(row,col));
            row ++;
            col --;
        }

        row = location.row + 1, col = location.col + 1;
        while (row < GameSettings.BOARD_SIZE && col < GameSettings.BOARD_SIZE) {
            bishopMoves.push(Square.at(row, col));
            row ++;
            col ++;
        }

        return bishopMoves;
    }
}
