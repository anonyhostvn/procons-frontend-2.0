import React from 'react';
import {opponentId, ownerId} from "../fakeData";
import {Icon} from 'antd';
import {useDrag} from "react-dnd";
import {ItemTypes} from "../items.type";

const Agent = ({agentId, teamId}) => {
    const [{isDragging}, drag] = useDrag({
        item: {type: ItemTypes.AGENT},
        collect: monitor => ({
            isDragging: !!monitor.isDragging()
        })
    });

    const icon = teamId  === ownerId ? <Icon type="apple" /> : teamId === opponentId ? <Icon type="android" /> : null;


    return (
        <div
            ref={drag}
            style={{
                fontSize: 30,
                opacity: isDragging ? 0.1 : 1
            }}
        >
            {icon}
        </div>
    );
};

export default Agent;