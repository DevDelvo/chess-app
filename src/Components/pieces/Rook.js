import Piece from './Piece.js';

export default class Rook extends Piece {
    constructor(player) {
        super(player, (player === 1? "https://upload.wikimedia.org/wikipedia/commons/7/72/Chess_rlt45.svg" : "https://upload.wikimedia.org/wikipedia/commons/f/ff/Chess_rdt45.svg"));
    }

    isMovePossible(origin, destination) {
        return (origin - 9 === destination ||
        origin - 8 === destination ||
        origin - 7 === destination ||
        origin + 1 === destination ||
        origin + 9 === destination ||
        origin + 8 === destination ||
        origin + 7 === destination ||
        origin - 1 === destination);
    }

    getOriginToPath (origin, destination) {
        return [];
    }
}
