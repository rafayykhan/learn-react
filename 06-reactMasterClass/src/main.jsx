import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'


createRoot(document.getElementById('root')).render(  // accepts the root element from the html file and renders the react app inside it
  <StrictMode>
    <App />
  </StrictMode>,
)
