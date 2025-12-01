"use client"

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './page'
import './globals.css'
import { Web3Provider } from './context/Web3Provider'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Web3Provider>
      <App />
    </Web3Provider>
  </React.StrictMode>,
)