import React from 'react';

const userInput = (props) => {
    const userInputStyle = {
        marginBottom: "20px"
    };

    return (
        <input type="text"
            className="UserInput"
            style={userInputStyle}  
            onChange={props.changeName} 
            value={props.inputValue} />
    );
}

export default userInput;