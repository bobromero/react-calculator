import React from 'react';
const Subtract = ({inputText,  setInputText, setInputText2, setSign}) => {
    function click(){
        setInputText2(inputText)
        setInputText('');
        setSign('-');
    }
    return(
    <div>
        <button onClick={click}  className="operators">-</button>

    </div>
    );
}


export default Subtract;