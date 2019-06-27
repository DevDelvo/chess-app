import React from "react";
import '../index.css'

export default function Tile(props) {
    return (
        <button className={`tile ${props.color}`}
        onClick={props.onClick}
        style={props.style}>
        </button>
    )
}