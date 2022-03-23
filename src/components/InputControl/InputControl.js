import React from 'react';
import "./InputControl.css"
const InputControl = ({ Label, ...props }) => {
    return (
        <div className='i-container'>
            {Label &&<label>{Label}</label>}
            <input type="text" {...props} />



        </div>
    )
}

export default InputControl