import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Heding from './Heding.jsx'
import 'bootstrap/dist/css/bootstrap.css';
import List from './List.jsx';
import Form from './Form.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Heding/>
    <Form/>
    <List/>
  </React.StrictMode>,
)
