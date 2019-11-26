import React from 'react';

const Square = ({color, percentWidth, percentHeight, children, agentId}) => {
    return (
        <div style={{
            backgroundColor: color,
            width: percentWidth,
            height: percentHeight,
            border: '1px solid black'
        }}
        >
            {children}
        </div>
    )
};

export default Square;