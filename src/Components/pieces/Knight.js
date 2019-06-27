import Piece from './Piece.js';

export default class Knight extends Piece {
    constructor(player) {
        super(player, (player === 1? "https://upload.wikimedia.org/wikipedia/commons/7/70/Chess_nlt45.svg" : "https://upload.wikimedia.org/wikipedia/commons/e/ef/Chess_ndt45.svg"));
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
