// import { StrictMode } from 'react' // react ka feature
import { createRoot } from 'react-dom/client' // react provide karta hai ki aap apne khud ka dom create kar lo using createRoot function 
import './index.css'
import App from './App.jsx'
import React from 'react'

createRoot(document.getElementById('root')).render(<App/>)