import React, {useState} from 'react';
import Number from './Number';
import Clear from './Clear';
import Submit from './Submit';
import Display from './display';
import Add from './Add';
import Subtract from './subtract';
import Multiply from './multiply';
import Divide from './divide'

const Keypad = () => {
    const [inputText, setInputText] = useState('0');
    const [inputText2, setInputText2] = useState(0);
    const [sign, setSign] = useState('+')
    return(
    <div className="calculator">
        <div className="calculator-closed">
            <Display
                input = {inputText}
                inputText2={inputText2}
            />
            <div className="keypad">
                
                <Number
                    number="9"
                    inputText={inputText}
                    setInputText={setInputText}
                />
                <Number
                    number="8"
                    inputText={inputText}
                    setInputText={setInputText}
                />
                <Number
                    number="7"
                    inputText={inputText}
                    setInputText={setInputText}
                />
                <Add
                    setInputText2={setInputText2}
                    inputText={inputText}
                    setInputText={setInputText}
                    setSign={setSign}
                />
                <Number
                    number="6"
                    inputText={inputText}
                    setInputText={setInputText}
                />
                <Number
                    number="5"
                    inputText={inputText}
                    setInputText={setInputText}
                />
                <Number
                    number="4"
                    inputText={inputText}
                    setInputText={setInputText}
                />
                <Subtract
                    setInputText2={setInputText2}
                    inputText={inputText}
                    setInputText={setInputText}
                    setSign={setSign}
                />
                <Number
                    number="3"
                    inputText={inputText}
                    setInputText={setInputText}
                />
                <Number
                    number="2"
                    inputText={inputText}
                    setInputText={setInputText}
                />
                <Number
                    number="1"
                    inputText={inputText}
                    setInputText={setInputText}
                />
                <Multiply
                    setInputText2={setInputText2}
                    inputText={inputText}
                    setInputText={setInputText}
                    setSign={setSign}
                />
                <Clear
                    inputText={inputText}
                    setInputText={setInputText}
                />
                <Number
                    number="0"
                    inputText={inputText}
                    setInputText={setInputText}
                />
                <Submit
                    inputText2={inputText2}
                    setInputText2={setInputText2}
                    inputText={inputText}
                    setInputText={setInputText}
                    sign={sign}
                    setSign={setSign}
                />
                <Divide
                    setInputText2={setInputText2}
                    inputText={inputText}
                    setInputText={setInputText}
                    setSign={setSign}
                />
                </div>
        </div>
    </div>
        )
}

export default Keypad;