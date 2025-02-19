import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { BrowserRouter } from 'react-router-dom'

import './i18n/i18n.jsx'
import ContextWrapper from './context/ContextWrapper.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ContextWrapper>

        <App /> 
      </ContextWrapper>

    </BrowserRouter>
  </React.StrictMode>,
)
