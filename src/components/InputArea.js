import React, {useState, useRef} from 'react';

function InputArea({addItem}) {
    const [inputText, setInputText] = useState("");

    const ref = useRef(null);

    // input control
    const handleChange = (event) => {
        const newValue = event.target.value;
        if (inputText.length <= 30) {
            setInputText(newValue);
        }
        
    };

    const onClick = () => {
        addItem(inputText);
        setInputText("");
        ref.current.focus();
    };

    // 
    const onKeyPressHandler = (event) => {
        if (event.charCode === 13) {
            onClick();
        }
    };

    return (
        <div className="form">
            <input
                ref={ref}
                name="text"
                onChange={handleChange}
                value={inputText}
                onKeyPress={onKeyPressHandler}
                type="text"
                placeholder="add a to-do list"/>
            <button onClick={onClick}>
                <img src="icons/pen.svg" alt="add" width="25px" />
            </button>
        </div>
    )

}

export default InputArea;