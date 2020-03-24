import React from 'react';

const UserOutput = (props) => {
    return (
        <div>
            <p>Hey there {props.username}</p>
            <p>New York City</p>
        </div>
    )
}

export default UserOutput