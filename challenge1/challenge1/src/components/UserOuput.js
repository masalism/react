import React from 'react';

import './UserOuput.css';

const userOuput = (props) => {
    return (
        <div className="UserOutput">
            <p>Username: {props.userName}</p>
            <p>Some more random text</p>
        </div>
    );
}

export default userOuput;