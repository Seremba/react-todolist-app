import React from 'react'
import { useState } from 'react'
import { FaTrashAlt } from 'react-icons/fa'


const Content = () => {
const [items, setItems] = useState([
  {
    id: 1,
    checked: false,
    item: "One kilogram of okra"
  },

  {
    id: 2,
    checked: true,
    item: "item 2"
  },
  {
    id: 3,
    checked: false,
    item: "item 3"
  }
]);
// logic for handling checking with map
const handle2Check = (id) => {
  const listItems = items.map((item) => item.id === id ? { ...item, checked: !item.checked } : item);
  setItems(listItems);
  localStorage.setItem('shoppinglist', JSON.stringify(listItems));
}

//logic for handling deleting with filter
const handleDelete = (id) => {
   const listItems = items.filter((item) => item.id !== id)
   setItems(listItems)
   localStorage.setItem('shoppinglist', JSON.stringify(listItems));
}

  return (
    <main>
      { items.length ? (<ul>
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
       </ul>): (
                  <p
                    style={{marginTop: '2rem'}}
                  >Your list is empty</p>)}
       
    </main>
    
  )
}

export default Content