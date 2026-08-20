import { useState } from "react";
import TodoItems from "./TodoItems";

export default function Todo() {
  const [toDo, setToDo] = useState("");

  // we want to store the list somewhere so we can display it on the screen and we can also add new items
  // to the list and we can also remove items from the list. so we will use useState hook to create a state
  //  variable called toDoList and a function called setToDoList to update the value of toDoList. The initial
  // value of toDoList is set to an empty array.

  const [toDoList, setToDoList] = useState([]); // here we are using the useState hook to create a state
  //  variable called toDo and a function called setToDo to update the value of toDo. The initial value
  //  of toDo is set to an empty string. and we are also creating a state variable called toDoList and a
  // function called setToDoList to update the value of toDoList. The initial value of toDoList is set to an empty array.

  function handleClick(e) {
    e.preventDefault(); // this will prevent the page from reloading when we submit the form and it will allow us to handle the form submission in our own way.
    // why we did that because the todo was a string and we cant use it directly instead
    // i have made a new array and added the string to it and then updated the state of the array with the new array.
    setToDoList([...toDoList, toDo]); // here we are using the spread operator to create a new array with the existing items in the toDoList array and the new
    // item that we want to add to the list. and we are also updating the value of toDoList with the new array that we created.
    // console.log("clicked")
    setToDo("");
  }

  return (
    <div>
      <form>
        <input
          onChange={(e) => setToDo(e.target.value)}
          value={toDo}
          type="text"
        />
        <button onClick={(e) => handleClick(e)} type="submit">
          submit
        </button>
      </form>

      <ul>
        {toDoList.map((item, index) => {
          return <TodoItems
             item={item}
             index={index}
           />
        })}
      </ul>
    </div>
  );
}
