import React from 'react';

const userOutput = (props) => {
    return (
        <div>
            <p>{props.userName}</p>
            <p>{props.children}</p>
        </div>
    );
}

export default userOutput;