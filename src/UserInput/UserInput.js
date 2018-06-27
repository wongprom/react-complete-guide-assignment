import React from 'react';

const Input = (props) => {

    const styleinput = {
        backgroundColor: '#3CBC8D',
        color: 'white',
        width: '50%',
      };

    return(
        <input 
        style = {styleinput}
        type='text'
        onChange = {props.test} 
        value = {props.currentName}
         />
    );
}
export default Input;