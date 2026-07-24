import React from 'react'; // these two libraries are used to manipulte the web DOM

import ReactDOM from 'react-dom/client';
import App from './App';

 // REACT ALSO MAKES ITS OWN COPY OF THE DOM --> called the VIRTUAL DOM
 // (the browser's real one is the "actual DOM". React compares the two and
 //  only touches the parts that actually changed --> that's why it's fast)

 // document.getElementById('root') --> plain JS. finds <div id="root"></div>
 //                                     inside public/index.html (an empty box)
 // ReactDOM.createRoot(...)       --> hands that box to React. from now on
 //                                     React owns everything inside it
 // const root = ...               --> save it so we can call .render() below
const root = ReactDOM.createRoot(document.getElementById(
'root'));

root.render(
  // proprty
  // we can make custom tags
  // we are rendering the <App /> tag but we dont have any kind of tag like this
  //  raect gives the power of JSX --> we can render HTML tags through 
  // javascript
  // <React.StrictMode> 
  // we are rendering the html 
  //  its a programming capabilities that is being provided by the 
  // react
    <App />
  // </React.StrictMode>
);

