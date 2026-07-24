import Me from "./me"

function App() {
  return (
    //  these are fragments like  we cant return multiple tags its a rule of JSX
    // so what they did was 
    // create one element and then return many elements in it 
    // its like we are returing only one element
    
    <>
    // <h1>Hello Again its me rafay learing raect with vite</h1>
    <Me />
    </>
  )
}



export default App
