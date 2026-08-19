import { useState } from "react";

export default function Counter() {

    const [count, changeCount] = useState(0); // here we are using the useState hook to create a state variable called count and a function called changeCount to update the value of count. The initial value of count is set to 0.
    return (
        <>
            <h1>Count Value is: {count} </h1> 
            {/* here why we use call back function because we want to pass a function to the onClick event handler 
            and it helps in managing the state */}
            <button onClick = {() => changeCount(count + 1)}> Click here to increase the count</button>
            <button onClick = {() => changeCount(count - 1)}> Click here to decrease the count</button>
        </>
    )
}

// state is the data that the above component can hold
// state is like a component memory