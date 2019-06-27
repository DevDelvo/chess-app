import React from "react";
import Tile from './Tile';

function isEven(num) {
    return num % 2 === 0;
}

export default class Board extends React.Component {
    renderTile(i, j, color) {
        // console.log('tile', i)
        return <Tile
            key={i}
            piece={this.props.tiles[i]}
            style={this.props.tiles[i] ? this.props.tiles[i].style : null}
            color={color}
            onClick={(() => this.props.onClick(i, j))}
        />
    }
    render() {
        const board = [];
        for (let row = 0; row < 8; row++) {
            const tileRow = [];
            for (let j = 0; j < 8; j++) {
                const color = (isEven(row) && isEven(j)) || (!isEven(row) && !isEven(j))? "white" : "black";
                tileRow.push(this.renderTile((row * 8) + j, j, color));
            }
            // console.log('row', i)
            board.push(<div className="board-row" key={row}>{tileRow}</div>)
        }

        return (
            <div className="board-container">
                {board}
            </div>
        )
    }
}