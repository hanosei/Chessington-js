import GameSettings from '../gameSettings';
import Piece from './piece';
import Square from '../square';

export default class King extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        const kingMoves = [];
        let location = board.findPiece(this);
        if (!location){
            return
        }
        let row;
        let col;
        
        let directions = [
            [-1, -1], [-1, 0], [-1, 1], // up+left, up, up+right
            [0, -1], [0, 1], // left, right
            [1, -1], [1, 0], [1, 1] // down+left, down, down_right
        ];

        for (let i = 0; i <directions.length; i++) {
            row = location.row + directions[i][0];
            console.log(row);
            col = location.col + directions[i][1];

            if (row >= 0 && row < GameSettings.BOARD_SIZE && col >= 0 && col < GameSettings.BOARD_SIZE) {
                let square = Square.at(row, col);
                let piece = board.getPiece(square);

                if (!piece) {
                kingMoves.push(Square.at(row, col));
                }
            }
        }

        return getAvailableMoves;
    }
}