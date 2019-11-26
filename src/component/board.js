import React from 'react';
import Square from "./square";
import {ownerId, opponentId} from "../fakeData";
import Agent from "./agent";

const boardStyle = {
    width: 500,
    height: 500,
    display: 'flex',
    flexWrap: 'wrap'
};


const squareCreator = (rowId, colId, boardWidth, boardHeight, squareScore, squareTile, teams) => {
    const percentWidth = 95 / boardWidth;
    const percentHeight = 95 / boardHeight;
    const color= squareTile === ownerId ? 'green' : squareTile === opponentId ? 'red' : 'white';
    let agentIcons = null;
    teams.forEach(team => {
        team.agents.forEach(agent => {
            if (agent.x === colId && agent.y === rowId) {
                agentIcons = <Agent agentId={agent.agentId} teamId={squareTile}/>;
            }
        })
    });
    return (
        <Square color={color} percentWidth={`${percentWidth}%`} percentHeight={`${percentHeight}%`}>
            {squareScore}
            {agentIcons}
        </Square>
    )
};

const Board = ({mapInfo}) => {
    const listSquare = [];

    for (let i = 0; i < mapInfo.width; i++)
        for (let j = 0; j < mapInfo.height; j++) {
            listSquare.push(squareCreator(i+1,j+1, mapInfo.width, mapInfo.height, mapInfo.points[i][j], mapInfo.tiled[i][j], mapInfo.teams));
        }

    return (
        <div style={boardStyle}>
            {listSquare}
        </div>
    )
};

export default Board;