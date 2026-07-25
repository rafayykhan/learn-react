// ===============================================================
//  IMPORTS
// ===============================================================

// "useState" is a React Hook.
// A "Hook" is just a special function that React gives us so we can
// add extra powers to our component (like memory, side-effects, etc.).
// useState gives our component MEMORY — a value that React remembers
// and watches for changes.
import { useState } from 'react'

// This just brings in the CSS styles for this component.
import './App.css'

// ===============================================================
//  THE COMPONENT
// ===============================================================

// In React, a "component" is just a normal JavaScript function that
// RETURNS some HTML-looking code (called JSX).
// React calls this function to figure out what to show on the screen.
function App() {
  // -------------------------------------------------------------
  // 1. STATE (the component's memory)
  // -------------------------------------------------------------
  // useState(0) means: "Create a piece of memory and start it at 0."
  //
  // useState hands us back an ARRAY with exactly 2 things inside,
  // and we unpack them using [ ] (this is called array destructuring):
  //
  //   counter     -> the CURRENT value stored in memory (starts as 0)
  //   setCounter  -> a special FUNCTION we call to CHANGE that value
  //
  // ⚠️ Important rule: we must NEVER change "counter" directly
  //    (like counter = counter + 1). We must always use setCounter().
  //    Why? Because setCounter does 2 jobs:
  //       (a) it updates the value, AND
  //       (b) it tells React "hey, something changed — please redraw
  //           the screen so the user sees the new value."--> basically chnages the UI
  //    A plain variable would change in memory but the screen would
  //    NOT update.
  const [counter, setCounter] = useState(0)

  // -------------------------------------------------------------
  // 2. HELPER FUNCTIONS
  // -------------------------------------------------------------
  // This function runs when the "Add Value" button is clicked.
  // It takes the current counter, adds 1, and asks React to save it.
  const addValue = () => {
    // setCounter(counter + 1):
    //   - counter is the value RIGHT NOW (example: 5)
    //   - counter + 1 makes the new value (example: 6)
    //   - setCounter saves 6 AND re-runs this whole App function so
    //     the screen shows 6 instead of 5.
    setCounter(counter + 1)
  }

  // This function runs when the "Remove Value" button is clicked.
  // Same idea, but it subtracts 1 instead.
  const removeValue = () => {
    if (counter <= 0 )
    {
      console.log("error")
    }
    else{
      setCounter(counter - 1)

    }
  }

  // -------------------------------------------------------------
  // 3. THE JSX (what actually shows on the screen)
  // -------------------------------------------------------------
  // Everything below "return" is what the user will SEE.
  // It looks like HTML, but it's JSX (HTML written inside JavaScript).
  return (
    // <>...</> is called a "Fragment".
    // A component must return ONE single parent element.
    // Instead of wrapping everything in an extra <div>, we use this
    // empty <> </> tag to group items without adding anything to the page.
    <>
      <h1>Hello welcome !</h1>

      {/*
        The curly braces { } let us drop JavaScript INTO the JSX.
        Here {counter} prints the current value from our state memory.
        Every time setCounter changes it, this number updates on screen.
      */}
      <h2>Counter value = {counter}</h2>

      {/*
        onClick tells React: "when this button is clicked, run addValue".
        Notice we write {addValue}  (NO parentheses).
        - {addValue}    -> hands React the function to run LATER, on click. ✅
        - {addValue()}  -> would run it IMMEDIATELY while drawing. ❌ (wrong)
      */}
      <button onClick={addValue}>Add Value</button>
      <br />
      <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

// ===============================================================
//  EXPORT
// ===============================================================
// This makes the App component available to other files
// (like main.jsx) so it can be shown on the web page.
export default App
