import { useState } from 'react';

var todolist = [
    { title: 'Cabbage', isComplete: false},
    { title: 'Garlic', isComplete: false},
    { title: 'Apple', isComplete: true},
  ];
var currentText = ""
function appendList() {
    todolist = [...todolist, ...[currentText]]

}
function removeFromList() {
    const newList = todolist.filter((item) => item.title !== currentText);
    todolist = newList
}


function MyButton({title, onClick }) {
    return (
      <button onClick={onClick}>
        {title}
      </button>
    );
  }
  export default function ShoppingList() {
    const listItems = todolist.map(product =>
        <div>
            
            <li
                key={product.title}
                style={{
                color: 'black'
                }}
            >
                {product.title}
            </li>
      </div>
    );
  
    return (
        <div>
        <MyButton title = "Delete" onClick = {removeFromList}  />
        
        <MyButton title = "Add Item" onClick = {appendList} /> 

        <ul>{listItems}</ul>
        </div> 
    );

  }
  