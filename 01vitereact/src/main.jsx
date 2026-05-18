// import { StrictMode } from 'react' // react ka feature
import { createRoot } from 'react-dom/client' // react provide karta hai ki aap apne khud ka dom create kar lo using createRoot function 
import './index.css'
import App from './App.jsx'
import React from 'react'


// function MyApp(){
//     return (
//         <div>
//             <h1>Custom app</h1>
//         </div>
//     )
// }


const reactElement = {
    type: 'a',
    props: {
        href: 'https://www.google.com',
        target: '_blank',
    },
    children: "Click me to visit google"
}



// const anotherElement = (
//     <a href="https://www.google.com">Go to Google</a>
// )


const anotherUser = 'chai aur react'

// const reactElement = React.createElement(
//     'a',
//     {
//         href: 'https://www.google.com',
//         target: '_blank',
//     },
//     "Click me to visit google",
//     anotherUser
// )


createRoot(document.getElementById('root')).render(
    // anotherElement
    // reactElement
    <App />
)
// just create root ki madat se dom create kiye id ke through root div ko select karke usmein app ko render kar diye
// function ke andar html return kardo and main us html ko render karva dunga
// in the end java script ke through html render karva rahe
