// import { StrictMode } from 'react'
// import ReactDOM from 'react'
import React from 'react'
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
// import MyApp from "./MyApp.jsx"

//  we can make  function here as well like deaclaring function here
//
// function MyApp() {
//   return (
//     <div>
//       <h1>
//         My custom!
//       </h1>
//     </div>
//   )
// } --> behind the scene it parse into the dom tree

// cant we just give direct objecct to it  like if we can render funxction like this
// will it be helping for the objects

// const ReactElement_prismo = {
//     type: 'a', // types tells what kind if tag it is
//     props: {
//         // every attribute we write in jsx lands inside props
//         href: 'https://prismovector.com',
//         target: '_blank'
//     },
//     // whatever is written between the opening and closing tag
//     Children : 'click here to vist my website'
// }

//  this is not being rendering and as we know in custom react we are wrote
// custom react and fow the rendering we wroote cutom render code
//  but in vite i mean here we are being given a render code by react itself

// const anotherElement = (
//    <a href="https://prismovector.com" target = '_blank'>vist my website</a>
// )

//  
const anotherUser = "help meeeeeeeeeee";
const reactElement = React.createElement(
  // 1st element is tag
  "a",
  //  2nd would be the properties
  {
    href: "https://www.google.com",
    target: "_blank",
  },
  // 3rd should be the text inside the tag
  "click the link",
  React.createElement('br'),
  // 4th after formation of tree then variable injections
  // come into play
  anotherUser,
);

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  // every react use bundler
  // below its its the structure of JSX
  // anotherElement,
  <>
    <App />
    {reactElement}
  </>,
  // {/* <MyApp /> */}

  // </StrictMode>,
);
