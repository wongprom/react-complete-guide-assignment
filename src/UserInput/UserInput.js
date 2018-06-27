import React from 'react';

const Input = (props) => {
    return(
        <input 
        type='text'
        onChange = {props.test} 
        value = {props.currentName}
         />
    );
}
export default Input;