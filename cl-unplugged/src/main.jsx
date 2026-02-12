import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import { AnimationProvider } from './context/AnimationContext'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <AnimationProvider>
          <App />
        </AnimationProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
