import React from 'react';
import Board from './Board.js';
import { initializeChessBoard } from "../helperFunctions/";

export default class Game extends React.Component {
    state = {
        board: initializeChessBoard(),
        player: 1,
        status: '',
        turn: "white",
    }

    handleClick = (position, j) => {
        console.log('tile', position);
        console.log('row', position % 8);
        console.log('column', j);
    }

    render() {
        return (
            <div className="game-container">
                <div className="game">
                    <div className="game-board">
                        <Board
                        tiles={this.state.board}
                        onClick={(i, j) => this.handleClick(i, j)}
                        />
                    </div>
                </div>
            </div>
        )
    }
}