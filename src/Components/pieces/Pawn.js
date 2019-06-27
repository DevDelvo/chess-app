import Piece from './Piece.js';

export default class Pawn extends Piece {
    constructor(player) {
        super(player, player === 1 ? "https://upload.wikimedia.org/wikipedia/commons/4/45/Chess_plt45.svg" : "https://upload.wikimedia.org/wikipedia/commons/c/c7/Chess_pdt45.svg");
        this.initialPositions = {
            1: [48, 49, 50, 51, 52, 53, 54, 55],
            2: [8, 9, 10, 11, 12, 13, 14, 15],
        }
    }

    isMovePossible(origin, destination, isEnemyPresent) {
        if (this.player === 1) {
            if ((destination === origin - 8 && !isEnemyPresent) || (destination === origin - 16 && this.initialPositions[1].indexOf(origin) !== -1)) {
                return true;
            } else if (isEnemyPresent && (destination === origin - 9 || destination === origin - 7)) {
                return true;
            }
        } else if (this.player === 2) {
            if ((destination === origin + 8 && !isEnemyPresent) || (destination === origin + 16 && this.initialPositions[2].indexOf(origin) !== -1)) {
                return true;
            } else if (isEnemyPresent && (destination === origin + 9 || destination === origin + 7)) {
                return true;
            }
        }
        return false;
    }

    getOriginToDestinationPath(origin, destination) {
        if (destination === origin - 16) {
            return [origin - 16];
        } else if (destination === origin + 16) {
            return [origin + 8];
        }
        return [];
    }

}