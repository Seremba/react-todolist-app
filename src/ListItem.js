import React from 'react'
import { FaTrashAlt } from 'react-icons/fa'

function ListItem({items, handle2Check, handleDelete}) {
  return (
    <ul>
    { items.map((item) => (
      <li className='item' key={item.key}>
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
       tabIndex='0'/>

      </li>
    )) }
  </ul>
  )
}

export default ListItem