// A COMPONENT = just a normal JavaScript function that returns UI.
//
// two rules that make it a component and not a plain function:
//   1. the name MUST start with a Capital letter (App, not app)
//      -> that's how JSX knows <App /> is your component and not a
//         built-in html tag like <div>. lowercase = html, Uppercase = yours
//   2. it must return JSX (or null)

function App() {
  // this function returns html
  // ...well, it LOOKS like html but it isn't. this is JSX.
  // before it reaches the browser, babel converts this line into:
  //     React.createElement("h1", null, "Hello its me Rafay learning react")
  // the browser never sees JSX, it only ever sees JavaScript.
  return (
    // a component can only return ONE parent element.
    // if you need two siblings, wrap them in a <div> or in <> </> (fragment)
    <h1>
      Hello its me Rafay learning react
    </h1>
  );
}

// `default` export = whoever imports this file can name it whatever they want.
// index.js does `import App from './App'` -- that name comes from here, not
// from the filename
export default App;
