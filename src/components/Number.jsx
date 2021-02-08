import React from 'react';



const Number = ({number, inputText,  setInputText}) => {
    function click(){
        if (inputText.length < 12){
            setInputText(inputText += number)
        }
        
        console.log(inputText)
    }
    return(
        <div >
            <button onClick={click}  className="number">{number}</button>
            
        </div>
    );
}

export default Number;