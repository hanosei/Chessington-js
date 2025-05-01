import Piece from './piece';
import GameSettings from '../gameSettings';
import Square from '../square';

export default class Queen extends Piece {
    constructor(player) {
        super(player);
    }

    diagonalMoves(board) {
        const moves = [];
        let location = board.findPiece(this);
        let row;
        let col;
        let square;
        let piece;
      
       row = location.row - 1, col = location.col - 1;
        while (row >= 0 && col >= 0) {
            square = Square.at(row, col);
            piece = board.getPiece(square);
            if (!piece) {
                moves.push(Square.at(row, col));
                row --, col --;
            } else {
                if (piece.player !== this.player && !(piece instanceof King)) moves.push(Square.at(row, col));
                row --, col --;
                break;
            }
            
        }

        row = location.row - 1, col = location.col + 1;
        while (row >= 0 && col < GameSettings.BOARD_SIZE) {
            square = Square.at(row, col);
            piece = board.getPiece(square);
            if (!piece) {
                moves.push(Square.at(row, col));
                row --, col ++;
            } else {
                if (piece.player !== this.player && !(piece instanceof King)) moves.push(Square.at(row, col));
                row --, col ++;
                break;
            }
        }

        row = location.row + 1, col = location.col - 1;
        while (row < GameSettings.BOARD_SIZE && col >= 0) {
            square = Square.at(row, col);
            piece = board.getPiece(square);
            if (!piece) {
                moves.push(Square.at(row,col));
                row ++, col --
            } else {
                if (piece.player !== this.player && !(piece instanceof King)) moves.push(Square.at(row, col));
                row ++, col --;
                break;
            }
        }

        row = location.row + 1, col = location.col + 1;
        while (row < GameSettings.BOARD_SIZE && col < GameSettings.BOARD_SIZE) {
            square = Square.at(row, col);
            piece = board.getPiece(square);
            if (!piece) {
                moves.push(Square.at(row, col));
                row ++, col ++;
            } else {
                if (piece.player !== this.player && !(piece instanceof King)) moves.push(Square.at(row, col));
                row ++, col ++;
                break;
            } 
        }
        return moves
    }

    horizontalAndVerticalMoves(board) {
        const moves = [];
        let location = board.findPiece(this);
        let square;
        let piece;
        let row;
        let col;

        for (row = location.row + 1 ; row < GameSettings.BOARD_SIZE; row++) {
            square = Square.at(row, location.col);
            piece = board.getPiece(square);
            if (!piece) {
                moves.push(square);
            } else {
                if (piece.player !== this.player && !(piece instanceof King)) moves.push(square)
                    break;
                }
        }
        if (location.row!=0){
            for (row = location.row - 1 ;row >= 0; row--) {
                square = Square.at(row, location.col);
                piece = board.getPiece(square);
                if (!piece) {
                    moves.push(square);
                } else {
                    if (piece.player !== this.player && !(piece instanceof King)) moves.push(square)
                        break;
                    }
            }
        }
        for (col = location.col + 1 ; col < GameSettings.BOARD_SIZE; col++) {
            square = Square.at(location.row, col);
            piece = board.getPiece(square);
            if (!piece) {
                moves.push(square);
            } else {
                if (piece.player !== this.player && !(piece instanceof King)) moves.push(square)
                    break;
                }
        }

        if (location.col!=0) {        
            for (col = location.col-1; col >= 0; col--) {
                square = Square.at(location.row, col);
                piece = board.getPiece(square);
                if (!piece) {
                    moves.push(square);
                } else {
                    if (piece.player !== this.player && !(piece instanceof King)) moves.push(square)
                        break;
                }
            }
        }
        return moves;
    }
    
    getAvailableMoves(board) {
        let availableMoves = [];
        availableMoves= this.diagonalMoves(board);
        return availableMoves.concat(this.horizontalAndVerticalMoves(board));
    }
}


