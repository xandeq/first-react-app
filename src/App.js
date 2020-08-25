import React, {useState} from 'react';
import './App.css';
import {InputArea} from "./components/inputArea";
import TodoItem from "./components/TodoItem";

function App() {
  const  [items,setItems] = useState([]);
  const addItems = (inputText) => {
    setItems((prevItems)=> {
      return [...prevItems,inputText]
    })
  }
  const deleteItem = (id)=>{
    setItems((prevItems)=> {
      return prevItems.filter((items,index)=>{
        return index !== id;
      })
    })
  }
  return (
      <div className="container">
        <div className="heading">
          <h1>TO DO LIST</h1> 
        </div>
        <InputArea onAdd={addItems}/>
        <div>
          <ul>
          {items.map((item, index)=> (
          <TodoItem key={index} id={index} text={item} onChecked={deleteItem} />
          ))}
          </ul>
        </div>
      </div>
  );
}

export default App;
