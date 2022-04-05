

import Header from './Header.'
import Content from './Content'
import Footer from './Footer'
import { useState } from 'react'

function App() {

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
    },
    {
      id: 4,
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
    <div className="App">
      <Header title="groceries"/>
      <Content
       items={items}
       setItems ={setItems}
       handle2Check = {handle2Check}
       handleDelete = {handleDelete}
      />
      <Footer length={items.length}/>
    </div>
  );
}

export default App;
