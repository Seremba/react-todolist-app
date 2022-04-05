import React from 'react'
import ListItem from './ListItem'


const Content = ({items,handle2Check, handleDelete}) => {


  return (
    <main>
      { items.length ? (
        <ListItem 
          items={items}
          handle2Check={handle2Check}
          handleDelete={handleDelete}
        />
      ): (
                  <p
                    style={{marginTop: '2rem'}}
                  >Your list is empty</p>)}
       
    </main>
    
  )
}

export default Content