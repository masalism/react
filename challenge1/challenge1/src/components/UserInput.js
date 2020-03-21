import React from 'react';

const userInput = (props) => {

    const style = {
        border: '2px solid red',
        padding: '5px'

    };

    return <input 
        type="text"
        style={style}
        onChange={props.changed}
        value={props.currentName} />
};

export default userInput;