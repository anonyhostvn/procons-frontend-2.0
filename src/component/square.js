import React from 'react';

const Square = ({color, percentWidth, percentHeight, children}) => {
    return (
        <div style={{
            backgroundColor: color,
            width: percentWidth,
            height: percentHeight
        }}
        >
            {children}
        </div>
    )
};

export default Square;