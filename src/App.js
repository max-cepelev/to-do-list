import React, { useState} from "react";
import ToDoItem from './components/ToDoItem';
import InputArea from './components/InputArea';
import './App.scss';

function App() {
  
  const [items, setItems] = useState(JSON.parse(localStorage.getItem("todoitems")) || []);
  localStorage.setItem("todoitems", JSON.stringify(items));

  // id generator
  const makeId = () => {
    let ID = "";
    let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    for ( var i = 0; i < 6; i++ ) {
      ID += characters.charAt(Math.floor(Math.random() * 36));
    }
    return ID;
  }

  // first letter to upper case
  const ucFirst = (str) => {
    if (!str) return str;
    return str[0].toUpperCase() + str.slice(1);
  }

  const addItem = (inputText) => {
    if (inputText !== "") {
      setItems((prevItems) => {
        return [...prevItems, {id: makeId(), text: ucFirst(inputText)}];
      });
    } else {
      return
    }
  };

  const deleteItem = (id) => {
    setItems(prevItems => {
      return prevItems.filter(item => {
        return item.id !== id;
      })
    })
  };

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputArea addItem={addItem}/>
      <div>
        <ul className="list">
          {items.map((item, index) => 
            <ToDoItem
              number={index+1}
              key={item.id}
              id={item.id}
              text={item.text}
              onDelete={deleteItem}/>)}
        </ul>
      </div>
    </div>
  );
}

export default App;
