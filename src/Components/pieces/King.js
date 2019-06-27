import Piece from './Piece.js';

export default class King extends Piece {
    constructor(player) {
        super(player, (player === 1 ? "https://upload.wikimedia.org/wikipedia/commons/4/42/Chess_klt45.svg" : "https://upload.wikimedia.org/wikipedia/commons/f/f0/Chess_kdt45.svg"));
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
