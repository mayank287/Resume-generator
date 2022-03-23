import React, { useState } from 'react'
import InputControl from '../InputControl/InputControl';
import "./Editor.css"

const Editor = (props) => {
    const sections =  props.section;
    const [activeSetionkey,setActiveSectionKey] = useState(Object.keys(sections)[0]);

    
  return (
    <div className='Editor-container'>
        <div className='Editor-header'  >
            {Object.keys(sections)?.map(key => (<div className={`${"Editorsection"} ${ activeSetionkey === key ? "Editoractive"  :""}`} key={key} onClick = {() => setActiveSectionKey(key)}>


               { sections[key]}
            </div>))}

        </div>
        <div className='Editor-body'>
          <InputControl />
            
        </div>




    </div>
  )
}

export default Editor