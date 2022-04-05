import React from 'react'


function Footer({length}) {
    
  return (
    <footer>
        {length} list  {length === 1 ? "item ": "items"}
    </footer>
  )
}

export default Footer