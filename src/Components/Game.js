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

    handleClick = (i) => {

    }

    render() {
        return (
            <div className="game-container">
                <div className="game">
                    <Board
                    tiles={this.state.board}
                    onClick={(i) => this.handleClick(i)}
                    />
                </div>
            </div>
        )
    }
}