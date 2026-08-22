import { useReducer } from "react";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const [state, dispatch] = useReducer(reducer, {count: 0 })  
  function reducer(state, action)
  {
    // the jib of the reducer function is to cahnge the value of the reducer funnction 
    if (action.type == "increment"){
      // making the shallow copy of existing object 
      // so that if there is any other value of the count they get copied here

      return {...state, count: state.count + action.payload}//state + action.payload;
    }
    
    if (action.type == "decrement"){
      // 
      return {...state, count: state.count - action.payload};
    }
    
  } 
  return (
    <>
      <div>
        <div>
          <h1>
            UseState: {count}
           
          </h1>
        </div>

        <button onClick={() => setCount(count + 1)}>
          <h1> Increase</h1>
        </button>
        <button onClick={() => setCount(count - 1)}>
          <h1> Decrement</h1>
        </button>
        <div>
          <h1>
             Reducer: {state.count }
          </h1>
        </div>
        {/* dispatch whenever i click on the increment this action is going to be dipatched and the action is being 
        handleld by the reducer function*/}
        {/*  when ever we are clicking we are dispatching the action object
         and reducer function handle this action*/}
        <button onClick={()=>dispatch({type: "increment", payload: 1})}>
          <h1> Increase</h1>
        </button>
        <button onClick={()=>dispatch({type: "decrement", payload: 1})}>
          <h1> Decrement</h1>
        </button>
      </div>
    </>
  ); 
}

export default App;
