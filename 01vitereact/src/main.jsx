// import { StrictMode } from 'react' // react ka feature
import { createRoot } from 'react-dom/client' // react provide karta hai ki aap apne khud ka dom create kar lo using createRoot function 
import './index.css'
import App from './App.jsx'
import React from 'react'

// agar app ek function hai toh mai function ko parse kar ke dekh leta hu directly from here for testing just by making it in main.jsx 

function MyApp(){
    return (
        <div>
            <h1>Custom app !</h1>
        </div>
    )
}

//  ye jsx wale code ko parsing in like object formate ye kaam bhi bundler ka hi hota hai


const reactElement = {
    type: 'a',
    props: {
        href: 'https://www.google.com',
        target: '_blank',
    },
    children: "Click me to visit google"
}



const anotherElement = (
    <a href="https://www.google.com">Go to Google</a>
)


const anotherUser = 'chai aur react'

// as per react required formate 
const realReactElement = React.createElement(
    'a',
    {
        href: 'https://www.google.com',
        target: '_blank',
    },
    "Click me to visit google",
    // anotherUser // to put any value using variable - agar another user mein if else ka code likhoge toh in the end vo object mein hi convert ho raha hai and object me toh expressions nahi likh sakte na
)


createRoot(document.getElementById('root')).render(

    // anotherElement
    // reactElement
    realReactElement
    // <MyApp /> - har react ek buldler use karta hai bable / vite (behind he scene magic)
    // <MyApp /> --> MyApp() is ko aise bhi agar like toh kya karen at the end react bhi toh js hi hai 
    // <App />
)
// just create root ki madat se dom create kiye id ke through root div ko select karke usmein app ko render kar diye
// function ke andar html return kardo and main us html ko render karva dunga
// in the end java script ke through html render karva rahe

// ek curiosity ki agar vo function / method ko likhne ki jagah mai agar directly hi pass kardu in formate of that object to save the steps is it possible ? 
//  <reactElement /> aisa likhane se toh "a" tag aa jana chahiye tha phir kyo nahi aaya 
// asia bhi toh ho sakte hai ki function ko hi aspect kiya ja raha ho par hum toh object ko execute karne ki koshish kar rahe hai

// ek reason hai ki jo hum ne object banaya uske liye custom render ka code bhi hum ne likha tha - par react mein toh jo render ka code hai vo toh react ne mera liye likha hai vo "render" ek method hai toh vo kuchh(kisi) type ke parameter except kar rahi hogi vo kaisa object expect kar rahe ispar sab depend karta hai
