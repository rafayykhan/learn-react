// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
import "./App.css";

import Card from "./Components/Card";
// props make componenet reuseable
// lets say we have to change the names and different thing in the 2nd card so tahts where props came in the picture
function App() {
  // const myObj = {
  //   userName: "Rafay",
  //   age: 20
  // }

  return (
    <>
      <h1 className="text-red-500 text-4xl" >
        
        Hello

      </h1>
      <Card channel = "hello"/>
      <Card channel="Rafay"/> 
    </>
  );
}

export default App;
