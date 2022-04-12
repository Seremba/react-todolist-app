import React from 'react'
import { FaTrashAlt } from 'react-icons/fa'

function LineItem({item, handle2Check, handleDelete}) {
  return (
    <li className='item' >
       <input 
         type="checkbox"
         onChange={() => handle2Check(item.id)}
         checked={item.checked}
       /> 

       <label
       style={(item.checked) ? {textDecoration: "line-through"}: null}
       onDoubleClick={() => handle2Check(item.id)}
       >{item.item}</label>

       <FaTrashAlt 
       onClick={() => handleDelete(item.id)}
       role="button" 
       tabIndex='0'
       aria-label={`delete ${item.item}`}
       />
       
      </li>
  )
}

export default LineItem