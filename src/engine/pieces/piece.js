export default class Piece {
    constructor(player) {
        this.player = player;
    }

    getAvailableMoves(board) {
        throw new Error('This method must be implemented, and return a list of available moves');
    }

    moveTo(board, newSquare) {
        const currentSquare = board.findPiece(this);
        board.movePiece(currentSquare, newSquare);
    }

    isValidMove(piece) {
        //console.log(piece instanceof King);
        if (!piece)
            return true;
        else {
            if (piece.player!==this.player)
                return true;
        }
        return false;
    }
}
