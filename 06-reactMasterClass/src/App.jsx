// import Hello from './components/Hello.jsx'
// import Destructuring from './components/Destructuring.jsx'
// import Fruits from './components/Fruits.jsx'
import Message from "./components/Message.jsx"
// import ConditionalComponent from './components/ConditionalComponent.jsx'
function App() {
  // const seatNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  // const personobj = {
  //   name: "Rafay",
  //   paragraph: "this is a component that is being imported from another file and rendered inside the App component",
  //   seatNumbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  // }
  return (
    <>
      <div>
        {/* <Hello 
          name="Rafay"
          paragraph = "this is a component that is being imported from another file and rendered inside the App component"
          seatNumbers = {seatNumbers}
        /> */}
        {/* <Hello 
          name="Nick"
          paragraph = "this is a component"
        />
        <Hello 
          name="Lucy"
          paragraph = "this is a component that is being imported from another file and rendered inside the App component"
        />
        <Hello 
          name="mick"
          paragraph = "this is a component"
        />
        */}

        {/* <Destructuring
          // name="destructuring"
          // paragraph = "this is a component that is being imported from another file and rendered inside the App component"
          // seatNumbers = {seatNumbers}
          obj = {personobj}
        /> */}

        {/* <Fruits/> */}
        <Message />
        {/* <ConditionalComponent/> */}
      </div>
    </> 
  )
}

export default App
