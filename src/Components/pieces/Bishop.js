import Piece from './Piece.js';

export default class Bishop extends Piece {
    constructor(player) {
        super(player, (player === 1? "https://upload.wikimedia.org/wikipedia/commons/b/b1/Chess_blt45.svg" : "https://upload.wikimedia.org/wikipedia/commons/9/98/Chess_bdt45.svg"));
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
