import React from 'react'
import './ToDo.css'

function ToDo(props) {



  return (
      <>
        <div className='list_style'>
        <i className=" icon fa-solid fa-circle-xmark"
         onClick={()=>{
          props.onSelect(props.id)
         }}
        ></i>
        <li >{props.text}</li>
        </div>
      </>
    
    
  )
}

export default ToDo;
