import React from 'react'
import LineItem from './LineItem'

function ListItem({items, handle2Check, handleDelete}) {
  return (
    <ul>
    { items.map((item) => (
      <LineItem 
         key={item.id}
         item={item}
         handle2Check = {handle2Check}
         handleDelete = {handleDelete}   

      />
    )) }
  </ul>
  )
}

export default ListItem