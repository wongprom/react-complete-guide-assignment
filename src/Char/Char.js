import React from 'react';


let char = (props) => {

    const style = {
        display: "inline-block", 
        padding: "16px", 
        textAlign: "center", 
        margin: "16px", 
        border: "1px solid black"
    }

    return(
        <div style={style} onClick = {props.clicked}>
            {props.character}
        </div>
    );
   
}

export default char;