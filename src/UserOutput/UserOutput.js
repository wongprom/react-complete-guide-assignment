import React from 'react';
import './UserOutput.css';

const Output = (props) => {
    return(
        <div className = "OutputBox">
            <p onClick = {props.changeName}> {props.oneGirl}</p>
            <p>{props.peopleZero}</p>
            <p>{props.peopleOne}</p>
            <p>{props.animal}</p>
        </div>
    );
}

export default Output;