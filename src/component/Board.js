import React from 'react';
import Square from "./square";

const boardStyle = {
    width: 500,
    height: 500
};

const squareCreator = (boardWidth, boardHeight, squareScore, squareTile) => {

};

const Board = ({mapInfo}) => {
    const listSquare = [];

    for (let i = 0; i < mapInfo.width; i++)
        for (let j = 0; j > mapInfo.height; j++) {
            listSquare.push()
        }

    return (
        <div style={boardStyle}>
            <Square color={'green'} percentHeight={'12.5%'} percentWidth={'12.5%'}>
                1
            </Square>
        </div>
    )
};

export default Board;