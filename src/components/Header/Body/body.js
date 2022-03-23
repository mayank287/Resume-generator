import React from 'react';
import Editor from '../../Editor/Editor';
import "./body.css"


const body = () => {

    const colors = ["#239ce2", "#48bb78", "#0bc5ea", "#a0aec0", "#ed8936"];
    const sections = {
        basicInfo: "Basic Info",
        workExp: "Work Experience",
        project: "Projects",
        education: "Education",
        achievement: "Achievements",
        summary: "Summary",
        other: "Other",
      };
  return (
   <div className='body-container'>
       <div className='body-heading'>
           Resume Builder
       </div>
       <div className='body-toolbar'>
           <div className='body-colors'>
             {
             colors.map(item => (<span key={item} style = {{backgroundColor: item}} className = "body-color" />
             
             )) }


           </div>
         
       <button>Download</button>
       </div>
       <div className='body.main' >
           <Editor  section  = {sections}/>
       </div>

   </div>
  )
}

export default body;