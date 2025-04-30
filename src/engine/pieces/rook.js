import Piece from './piece';
import Square from '../square';
import GameSettings from '../gameSettings';
import King from './king';

export default class Rook extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        //return new Array(0);
        const rookMoves = [];
        let location = board.findPiece(this);
        let square;
        let piece;
        let row;
        let col;

        for (row = location.row + 1 ; row < GameSettings.BOARD_SIZE; row++) {
            square = Square.at(row, location.col);
            piece = board.getPiece(square);
            if (!piece) {
                rookMoves.push(square);
            } else {
                if (piece.player !== this.player && !(piece instanceof King)) rookMoves.push(square)
                    break;
                }
        }
        if (location.row!=0){
            for (row = location.row - 1 ;row >= 0; row--) {
                square = Square.at(row, location.col);
                piece = board.getPiece(square);
                if (!piece) {
                    rookMoves.push(square);
                } else {
                    if (piece.player !== this.player && !(piece instanceof King)) rookMoves.push(square)
                        break;
                    }
            }
        }
        for (col = location.col + 1 ; col < GameSettings.BOARD_SIZE; col++) {
            square = Square.at(location.row, col);
            piece = board.getPiece(square);
            if (!piece) {
                rookMoves.push(square);
            } else {
                if (piece.player !== this.player && !(piece instanceof King)) rookMoves.push(square)
                    break;
                }
        }

        if (location.col!=0) {        
            for (col = location.col-1; col >= 0; col--) {
                square = Square.at(location.row, col);
                piece = board.getPiece(square);
                if (!piece) {
                    rookMoves.push(square);
                } else {
                    if (piece.player !== this.player && !(piece instanceof King)) rookMoves.push(square)
                        break;
                }
            }
        }
        return rookMoves;
    }
}
