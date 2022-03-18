import React from 'react';

import './App.css';

function TextBox(props : any) {
    return (
        <div className="App">
            <label>{props.label}</label>
            <input type="text" onChange={event => props.change(event.target.value)}></input>
        </div>
    );
}

export default TextBox;