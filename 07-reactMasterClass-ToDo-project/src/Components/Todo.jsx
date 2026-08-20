import { useState } from "react";
import TodoItems from "./TodoItems";

export default function Todo() {
//   const [toDo, setToDo] = useState("");
  const [toDo, setToDo] = useState({name:"", done: false});


  // we want to store the list somewhere so we can display it on the screen and we can also add new items
  // to the list and we can also remove items from the list. so we will use useState hook to create a state
  //  variable called toDoList and a function called setToDoList to update the value of toDoList. The initial
  // value of toDoList is set to an empty array.

  const [toDoList, setToDoList] = useState([]); // here we are using the useState hook to create a state
  //  variable called toDo and a function called setToDo to update the value of toDo. The initial value
  //  of toDo is set to an empty string. and we are also creating a state variable called toDoList and a
  // function called setToDoList to update the value of toDoList. The initial value of toDoList is set to an empty array.

  function handleClick(e, item) {
    e.preventDefault(); // this will prevent the page from reloading when we submit the form and it will allow us to handle the form submission in our own way.
    // why we did that because the todo was a string and we cant use it directly instead
    // i have made a new array and added the string to it and then updated the state of the array with the new array.
    setToDoList([...toDoList, toDo]); // here we are using the spread operator to create a new array with the existing items in the toDoList array and the new
    // item that we want to add to the list. and we are also updating the value of toDoList with the new array that we created.
    // console.log("clicked")
    setToDo({ name: "", done: false }); // reset with the same shape as the state, not a plain string
    console.log("added the: ", item);
  }


//   const [delList, setDelList] = useState("")

  function deleteList (item) {
    // setDelList("");
    setToDoList( toDoList.filter((todo)=> todo!= item)) // return a filtered array
    console.log("deleted the: ", item)
  }

  return (
    <div
      style={{
        maxWidth: "420px",
        margin: "60px auto",
        fontFamily: "sans-serif",
      }}
    >
      <form style={{ display: "flex", gap: "8px" }}>
        <input
          onChange={(e) => setToDo({name: e.target.value , done: false })}
          value={toDo.name}
          type="text"
          style={{
            flex: 1,
            padding: "10px",
            fontSize: "15px",
            border: "1px solid #ccc",
            borderRadius: "6px",
          }}
        />
        <button
          onClick={(e) => handleClick(e, toDo)} // pass the current todo so handleClick actually receives an item
          type="submit"
          style={{
            padding: "10px 18px",
            fontSize: "15px",
            color: "white",
            backgroundColor: "#4f46e5",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
          }}
        >
          submit
        </button>
      </form>

      <ul style={{ listStyle: "none", padding: 0, marginTop: "20px" }}>
        {toDoList.map((item, index) => {
          // every item gets its own row, so the button sits in front of that item
          return (
            <li
              key={index}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                marginBottom: "8px",
              }}
            >
              <div style={{ flex: 1 }}>
                <TodoItems item={item.name} index={index} /> {/* pass the string, TodoItems cant render an object */}
              </div>
              <button
                style={{
                  padding: "10px 14px",
                  fontSize: "15px",
                  color: "white",
                  backgroundColor: "#4f46e5",
                  border: "none",
                  borderRadius: "6px",
                  cursor: "pointer",
                }}

                onClick = {() => deleteList(item)}
              >
                X
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
