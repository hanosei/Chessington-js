import Piece from './piece';
import Square from '../square';
import GameSettings from '../gameSettings';

export default class Rook extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        //return new Array(0);
        const rookMoves = [];
        let location = board.findPiece(this);

        for (let row = 0 ; row < GameSettings.BOARD_SIZE; row++) {
            if (row !==location.row) {
                rookMoves.push(Square.at(row, location.col));
            }
        }
        for (let col = 0; col < GameSettings.BOARD_SIZE; col++) {
            if (col !==location.col) {
                rookMoves.push(Square.at(location.row, col));
            }
        }
        return rookMoves;
    }
}
