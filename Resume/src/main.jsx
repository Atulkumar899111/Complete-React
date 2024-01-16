import React from 'react'
import ReactDOM from 'react-dom/client'
import Heading from './Components/Heading'
import NavBar from './Components/NavBar'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NavBar/>
    <Heading/>
  </React.StrictMode>,
)
