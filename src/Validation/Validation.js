import React from 'react';

const validation = (props) => {
    let message = <p>text to short</p>
    if(props.inputLength >= 5){
        message = <p>text length OK</p>
    }
    return (
        <div>
            {message}
        </div>
    );

}

export default validation;