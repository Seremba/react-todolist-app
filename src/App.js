import Header from './Header.'
import SearchItem from './SearchItem'
import AddItem from './AddItem'
import Content from './Content'
import Footer from './Footer'
import { useState, useEffect } from 'react'


function App() {
  const API_URL = "http://localhost:3500/itemss";
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState(''); 
  const [search, setSearch] = useState('');
  const [fetchError, setFetchError] = useState(null);
  // console.log("before use effect") 

  useEffect(() => {
    
    const fetchItems = async () => {
       try {
          const response = await fetch(API_URL);
          if(!response.ok) throw Error("Did not receive expected data");
          const listItems = await response.json();
          console.log(listItems)
          setItems(listItems);
          setFetchError(null);
       } catch(err) {
          // console.log(err.message);
          setFetchError(err.message);
       }
    }

    fetchItems();
  }, []);

  // console.log("after use effect")
  
  const addItem = (item) => {
      const id = items.length ? items[items.length - 1].id + 1 : 1
      const myNewItem = { id, checked: false, item}
      const listItems = [...items, myNewItem]
      setItems(listItems)

  }

  
  // logic for handling checking with map
  const handle2Check = (id) => {
    const listItems = items.map((item) => item.id === id ? { ...item, checked: !item.checked } : item);
    setItems(listItems)
  }
  
  //logic for handling deleting with filter
  const handleDelete = (id) => {
     const listItems = items.filter((item) => item.id !== id)
     setItems(listItems)
  }

  //logic for handling form
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
      <SearchItem 
       search={search}
       setSearch = {setSearch}  
      />
      <main>
        {fetchError && <p style={{color: "red"}}>{`error: ${fetchError}`}</p>}
       { !fetchError && <Content
        items={items.filter(item => ((item.item).toLowerCase()).includes(search.toLowerCase()))}
        setItems ={setItems}
        handle2Check = {handle2Check}
        handleDelete = {handleDelete}
        />} 
      </main>
      
      <Footer length={items.length}/>
    </div>
  );
}

export default App;
