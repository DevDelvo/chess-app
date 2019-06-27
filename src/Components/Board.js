import React from "react";
import Tile from './Tile';

function isEven(num) {
    return num % 2 === 0;
}

export default class Board extends React.Component {
    renderTile(i, color) {
        return <Tile
            piece={this.props.tiles[i]}
            style={this.props.tiles[i] ? this.props.tiles[i].style : null}
            color={color}
            onClick={(() => this.props.onClick(i))}
        />
    }
    render() {
        const board = [];
        for (let i = 0; i < 8; i++) {
            const tileRow = [];
            for (let j = 0; j < 8; j++) {
                const color = (isEven(i) && isEven(j)) || (!isEven(i) && !isEven(j))? "white" : "black";
                tileRow.push(this.renderTile((i * 8) + j, color));
            }
            board.push(<div className="board-row">{tileRow}</div>)
        }

        return (
            <div className="board-container">
                {board}
            </div>
        )
    }
}