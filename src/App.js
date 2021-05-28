import React, { useState } from "react";
import ToDoItem from './components/ToDoItem/ToDoItem';
import './App.css';

function App() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);

  const makeId = () => {
    let ID = "";
    let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    for ( var i = 0; i < 6; i++ ) {
      ID += characters.charAt(Math.floor(Math.random() * 36));
    }
    return ID;
  }

  const handleChange = (event) => {
    const newValue = event.target.value;
    setInputText(newValue);
  };

  const addItem = () => {
    setItems((prevItems) => {
      return [...prevItems, {id: makeId(), text: inputText}];
    });
  };
  const deleteItem = (id) => {
    setItems(prevItems => {
      return prevItems.filter(item => {
        return item.id !== id;
      })
    })
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} value={inputText} type="text" />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((item) => <ToDoItem key={item.id} id={item.id} text={item.text} onDelete={deleteItem}/>)}
        </ul>
      </div>
    </div>
  );
}

export default App;
