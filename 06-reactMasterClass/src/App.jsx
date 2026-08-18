import Hello from './components/Hello.jsx'
function App() {

  return (
    <>
      <div>
        <Hello 
          name="Rafay"
          paragraph = "this is a component that is being imported from another file and rendered inside the App component"
        />
        <Hello 
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
      </div>
    </> 
  )
}

export default App
