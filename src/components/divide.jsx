import React from 'react';
const Add = ({inputText,  setInputText, setInputText2, setSign}) => {
    function click(){
        setInputText2(inputText)
        setInputText('');
        setSign('/');
    }
    return(
    <div>
        <button onClick={click}  className="operators">/</button>

    </div>
    );
}


export default Add;