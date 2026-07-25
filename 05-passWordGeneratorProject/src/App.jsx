import { useState, useCallback, useEffect, useRef } from "react";
import "./index.css";
import "./App.css";

function App() {
  const [length, setlength] = useState(8);
  const [numberAllowed, setNumber] = useState(false);
  const [charAllowed, setChar] = useState(false);
  // when the page loads and automatically functionality runs
  // and take teh data and load into the password
  const [pass, setPass] = useState("");

  // password generator

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "1234567890";
    if (charAllowed) str += "~`!@#$%^&*()_+{}:;'/><,[]|/?";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);

      pass += str.charAt(char);
    }
    setPass(pass);
  }, [length, numberAllowed, charAllowed, setPass]);

  const copyPasswordToClipboard = useCallback(() => {
    window.navigator.clipboard.writeText(pass)    
  }, [pass])

  useEffect (()=> {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])

  // ref hook
  const passwordRef = useRef(null)


  return (
    <div className="text-orange-500 w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-700">
      <h1 className="text-white text-center my-3">Password Generator</h1>

      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
          type="text"
          value={pass}
          className="outline-none w-full py-1 px-3"
          readOnly
          ref={passwordRef}
        />

        <button 
        onClick={copyPasswordToClipboard}
        className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0">
          Copy
        </button>
      </div>

      <div className="flex text-sm gap-x-2">
        <div className="flex items-center gap-x-1">
          <input
            type="range"
            min={6}
            max={100}
            value={length}
            className="cursor-pointer"
            onChange={(e) => setlength(Number(e.target.value))}
          />

          <label>Length: {length}</label>
        </div>

        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            id="numberInput"
            checked={numberAllowed}
            onChange={() => setNumber((prev) => !prev)}
          />

          <label htmlFor="numberInput">Numbers</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            id="charInput"
            checked={charAllowed}
            onChange={() => setChar((prev) => !prev)}
          />
          <label htmlFor="charInput">Character</label>
        </div>
      </div>
    </div>
  );
}

export default App;
