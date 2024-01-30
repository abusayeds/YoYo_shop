import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Context from './components/Context/Context.jsx'
import Model from './layouts/Model.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   
    <Context>
       
        <App />
        <Model></Model>
    </Context>
  </React.StrictMode>,
)
