// import { StrictMode } from 'react' // react ka feature
import { createRoot } from 'react-dom/client' // react provide karta hai ki aap apne khud ka dom create kar lo using createRoot function 
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(<App />)
// just create root ki madat se dom create kiye id ke through root div ko select karke usmein app ko render kar diye
// function ke andar html return kardo and main us html ko render karva dunga
// in the end java script ke through html render karva rahe
