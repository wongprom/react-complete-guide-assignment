import React from 'react';

const Output = (props) => {
    return(
        <div>
            <p onClick = {props.changeName}> {props.oneGirl}</p>
            <p>{props.peopleZero}</p>
            <p>{props.peopleOne}</p>
        </div>
    );
}

export default Output;