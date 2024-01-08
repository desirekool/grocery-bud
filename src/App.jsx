import { useState } from "react";
import Form from "./Form";
import Items from "./Items";
import { ToastContainer, toast } from 'react-toastify';

const getLocalStorage = () => {  
  return JSON.parse(localStorage.getItem('list')  || '[]');
};

const setLocalStorage = (items) => {
  localStorage.setItem('list', JSON.stringify(items));
};

const App = () => {
  const [items, setItems] = useState(getLocalStorage);

  const addItem = (newItem) => {
    const newItems = [...items, newItem];
    setItems(newItems);
    setLocalStorage(newItems);
    toast.success('item added to the list');
  }

  const removeItem = (itemId) => {
    const newItems = items.filter(item => item.id !== itemId);
    setItems(newItems);
    setLocalStorage(newItems);
    toast.success('item deleted');
  }

  const editItem = (itemId) => {
    const newItems = items.map((item) => item.id === itemId ? { ...item, completed: !item.completed } : item );    
    setItems(newItems);
    setLocalStorage(newItems);
  }

  return (
    <section className="section-center">
      <ToastContainer position="top-center" />
      <Form addItem={addItem} />
      <Items items={items} editItem={editItem} removeItem={removeItem}/>
    </section>
  )
};

export default App;
