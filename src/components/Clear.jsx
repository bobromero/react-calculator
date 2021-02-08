import React from 'react';

const Clear = ({inputText,  setInputText}) => {
    function click(){
        setInputText('')
        console.log(inputText)
    }
    return(
        <div>
            <button onClick={click} className="clear">C</button>
        </div>
    );
}

export default Clear;