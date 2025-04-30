import Piece from './piece';
import Square from '../square';
import GameSettings from '../gameSettings';
import King from './king';

export default class Bishop extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        const bishopMoves = [];
        let location = board.findPiece(this);
        let row;
        let col;
        let square;
        let piece;
        //using while because it moves diagonally so needs ro and coloumn eah move

       row = location.row - 1, col = location.col - 1;
        while (row >= 0 && col >= 0) {
            square = Square.at(row, col);
            piece = board.getPiece(square);
            if (!piece) {
                bishopMoves.push(Square.at(row, col));
                row --, col --;
            } else {
                if (piece.player !== this.player && !(piece instanceof King)) bishopMoves.push(Square.at(row, col));
                row --, col --;
                break;
            }
            
        }

        row = location.row - 1, col = location.col + 1;
        while (row >= 0 && col < GameSettings.BOARD_SIZE) {
            square = Square.at(row, col);
            piece = board.getPiece(square);
            if (!piece) {
                bishopMoves.push(Square.at(row, col));
                row --, col ++;
            } else {
                if (piece.player !== this.player && !(piece instanceof King)) bishopMoves.push(Square.at(row, col));
                row --, col ++;
                break;
            }
        }

        row = location.row + 1, col = location.col - 1;
        while (row < GameSettings.BOARD_SIZE && col >= 0) {
            square = Square.at(row, col);
            piece = board.getPiece(square);
            if (!piece) {
                bishopMoves.push(Square.at(row,col));
                row ++, col --
            } else {
                if (piece.player !== this.player && !(piece instanceof King)) bishopMoves.push(Square.at(row, col));
                row ++, col --;
                break;
            }
        }

        row = location.row + 1, col = location.col + 1;
        while (row < GameSettings.BOARD_SIZE && col < GameSettings.BOARD_SIZE) {
            square = Square.at(row, col);
            piece = board.getPiece(square);
            if (!piece) {
                bishopMoves.push(Square.at(row, col));
                row ++, col ++;
            } else {
                if (piece.player !== this.player && !(piece instanceof King)) bishopMoves.push(Square.at(row, col));
                row ++, col ++;
                break;
            } 
        }

        return bishopMoves;
    }
}
