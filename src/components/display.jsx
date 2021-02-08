import React from 'react';

const Display = ({input, inputText2}) => {
    return(
        <div className="display">
            <h1>{input}</h1>
            <h3 className="input-text-2">{inputText2}</h3>
        </div>
    );
}

export default Display;