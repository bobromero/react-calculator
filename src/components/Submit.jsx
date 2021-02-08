import React from 'react';

const Submit = ({inputText,  setInputText, inputText2, setInputText2, sign, setSign}) => {
    function click(){
        let answer = 0;
        let a = parseInt(inputText)
        let b =parseInt(inputText2)
        switch(sign){
            case '-':
                answer = a - b;
                break;
            case '*':
                answer = a * b;
                break;
            case '/':
                answer = a / b;
                break;
            default:
                answer = a + b;
                break;
        }
        setInputText2('0')
        setInputText(answer.toFixed(4));
        console.log(answer);
    }
    return(
    <div>
        <button onClick={click}  className="submit">=</button>

    </div>
    );
}

export default Submit;