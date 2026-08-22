import { useReducer } from "react";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [state, dispatch] = useReducer(reducer, { count: 0, incrementBy: 1, inputIncrementBy: 1 });

  // function handleClick() {}

  function reducer(state, action) {
    if (action.type == "incrementBy") {
      return { ...state, incrementBy: state.incrementBy + action.payload };
    }
    if (action.type == "decrementBy") {
      return { ...state, incrementBy: state.incrementBy - action.payload };
    }
    if (action.type == "increment") {
      // making the shallow copy of existing object
      // so that if there is any other value of the count they get copied here

      return { ...state, count: state.count + action.payload }; //state + action.payload;
    }

    if (action.type == "decrement") {
      //
      return { ...state, count: state.count - action.payload };
    }
    if (action.type == "setIncrementBy") {
      return { ...state, inputIncrementBy: action.payload };
    }
    if (action.type == "submitIncrementBy") {
      // take whatever is sitting in the input and make it the real incrementBy
      return { ...state, incrementBy: state.inputIncrementBy };
    }
  }

  // function reducer(state, action)
  // {
  //   // the jib of the reducer function is to cahnge the value of the reducer funnction
  //   if (action.type == "increment"){
  //     // making the shallow copy of existing object
  //     // so that if there is any other value of the count they get copied here

  //     return {...state, count: state.count + action.payload}//state + action.payload;
  //   }

  //   if (action.type == "decrement"){
  //     //
  //     return {...state, count: state.count - action.payload};
  //   }

  // }
  return (
    <>
      <div>
        <div>
          <h1>UseState: {count}</h1>
        </div>

        <button onClick={() => setCount(count + state.incrementBy)}>
          <h1> Increase</h1>
        </button>
        <button onClick={() => setCount(count - state.incrementBy)}>
          <h1> Decrement</h1>
        </button>
        <div>
          <h1>Reducer: {state.count}</h1>
        </div>
        {/* dispatch whenever i click on the increment this action is going to be dipatched and the action is being 
        handleld by the reducer function*/}
        {/*  when ever we are clicking we are dispatching the action object
         and reducer function handle this action*/}
        <button
          onClick={() =>
            dispatch({ type: "increment", payload: state.incrementBy })
          }
        >
          <h1> Increase</h1>
        </button>
        <button
          onClick={() =>
            dispatch({ type: "decrement", payload: state.incrementBy })
          }
        >
          <h1> Decrement</h1>
        </button>
        <div>
          <h1>Increment By: {state.incrementBy}</h1>
        </div>
        <button onClick={() => dispatch({ type: "incrementBy", payload: 1 })}>
          <h1> Increase</h1>
        </button>
        <button onClick={() => dispatch({ type: "decrementBy", payload: 1 })}>
          <h1> Decrement</h1>
        </button>
        <div>
          <h1>Increment By Input.</h1>
          <h1>
            <input
              value={state.inputIncrementBy}
              onChange={(e) =>
                dispatch({
                  type: "setIncrementBy",
                  payload: Number(e.target.value),
                })
              }
              type="text"
            />
          </h1>
        </div>
        <button onClick={() => dispatch({ type: "submitIncrementBy" })}>
          <h1>Submit</h1>
        </button>
      </div>
    </>
  );
}

export default App;
