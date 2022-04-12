import Header from './Header.'
import AddItem from './AddItem'
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
      item: "item 3"
    },
    {
      id: 3,
      checked: false,
      item: "item 3"
    }
  ]);
  const [newItem, setNewItem] = useState(''); 

  const setAndSaveItem = (listAndsavedItem) => {
    setItems(listAndsavedItem);
    localStorage.setItem('shoppinglist', JSON.stringify(listAndsavedItem));

  }
  
  const addItem = (item) => {
      const id = items.length ? items[items.length - 1].id + 1 : 1
      const myNewItem = { id, checked: false, item}
      const listItems = [...items, myNewItem]
      setAndSaveItem(listItems)

  }

  
  // logic for handling checking with map
  const handle2Check = (id) => {
    const listItems = items.map((item) => item.id === id ? { ...item, checked: !item.checked } : item);
    setAndSaveItem(listItems)
  }
  
  //logic for handling deleting with filter
  const handleDelete = (id) => {
     const listItems = items.filter((item) => item.id !== id)
     setAndSaveItem(listItems)
  }

  //logic for adding form
  const handleSubmit = (e) => {
    e.preventDefault();
    if(!newItem) return
    addItem(newItem)
    setNewItem('')
  }

  return (
    <div className="App">
      <Header title="groceries"/>
      <AddItem 
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
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
