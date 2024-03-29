import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import "../public/css/index.scss"
import "bootstrap/dist/css/bootstrap.css"
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
)
