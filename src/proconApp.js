import React from 'react';
import Board from "./component/board";
import {mapInfoMocks} from "./fakeData";
import {DndProvider} from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";

const ProconsApp = () => {
    return (
        <DndProvider backend={HTML5Backend}>
            <Board mapInfo={mapInfoMocks}/>
        </DndProvider>
    )
};

export default ProconsApp;