import Pawn from '../Components/pieces/Pawn'
import King from '../Components/pieces/King';
import Queen from '../Components/pieces/Queen';
import Rook from '../Components/pieces/Rook';
import Knight from '../Components/pieces/Knight'
import Bishop from '../Components/pieces/Bishop'

export function initializeChessBoard() {
    const tiles = Array(64).fill(0);

    // rendered pawns
    for (let i = 8; i < 16; i++) {
        tiles[i] = new Pawn(2);
        tiles[i + 40] = new Pawn(1);
    }

    tiles[4] = new King(2);
    tiles[60] = new King(1);

    tiles[3] = new Queen(2);
    tiles[59] = new Queen(1);

    tiles[0] = new Rook(2);
    tiles[7] = new Rook(2);
    tiles[56] = new Rook(1);
    tiles[63] = new Rook(1);

    tiles[1] = new Knight(2);
    tiles[6] = new Knight(2);
    tiles[57] = new Knight(1);
    tiles[62] = new Knight(1);

    tiles[2] = new Bishop(2);
    tiles[5] = new Bishop(2);
    tiles[58] = new Bishop(1);
    tiles[61] = new Bishop(1);

    return tiles;
}