# Currency Converter Project in React

## 1. Project Overview

Hum ek **Currency Converter** app bana rahe hain. Is project me mainly do cheezon par focus hai:

1. **Custom Hooks** banana.
2. **Reusable Components** banana (jaise ek input box jisko 'From' aur 'To' dono ke liye use kiya jayega).
Isme hum hardcoded values ke bajaye API call karenge taaki real-time currency conversion rates mil sake.

---

## 2. Custom Hooks Banana (`useCurrencyInfo.js`)

Custom hook actually ek normal JavaScript function hi hota hai, but React convention ke hisab se iska naam `use` se start hona chahiye. Ye built-in hooks jaise `useState` aur `useEffect` ko apne andar use kar sakta hai.

### Code

```javascript
import { useEffect, useState } from "react"

function useCurrencyInfo(currency) {
    // API se aane wala data hold karne ke liye state. 
    // Default empty object {} diya hai taaki fetch fail ho to map() / keys() crash na ho.
    const [data, setData] = useState({})
    
    useEffect(() => {
        // API call
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then((res) => res.json()) // response ko string se JSON format me convert kiya
        .then((res) => setData(res[currency])) // Object me se sirf apni currency ka data state me save kiya
    }, [currency]) // Dependency array: Jab bhi 'currency' parameter change hoga, API dobara call hogi
    
    return data; // Custom hook me hum pura data return kar dete hain
}

export default useCurrencyInfo;

```

### Theory & Explanation

* **Kyun banaya?** Components ko clean rakhne ke liye fetch logic ko ek alag hook me daal diya.
* **`useEffect`**: API call ko component render hone par automatically trigger karta hai. Dependency array `[currency]` ensure karta hai ki jab user nayi currency select kare, to updated data API se fetch ho.
* **Return Value**: Ye hook directly wo object return karta hai jisme rates hote hain (e.g., `{inr: 82.5, eur: 0.9, ...}`).

---

## 3. Reusable Component Banana (`InputBox.jsx`)

Hum ek single `InputBox` banayenge aur usko "From" (paise bhejne) aur "To" (paise milne) dono boxes ke liye use karenge.

### Code

```javascript
import React, { useId } from 'react'

function InputBox({
    label, // "From" ya "To" text
    amount, // Input field me dikhne wala amount
    onAmountChange, // Jab amount change ho tab trigger hone wala function
    onCurrencyChange, // Jab currency dropdown change ho
    currencyOptions = [], // Dropdown ke andar options ki array (API se aayegi)
    selectCurrency = "usd", // Default selected currency
    amountDisable = false, // Agar amount change na karne dena ho (jaise "To" field me)
    currencyDisable = false,
    className = "", // Koi extra custom CSS pas karni ho
}) {
    const amountInputId = useId() // Unique ID generate karne ke liye

    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            
            {/* Amount Input Section */}
            <div className="w-1/2">
                <label htmlFor={amountInputId} className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input
                    id={amountInputId}
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    disabled={amountDisable}
                    value={amount}
                    // e.target.value string me aata hai, isliye Number() se convert kiya
                    // && operator check karta hai ki prop pas kiya hai ya nahi, taaki error na aaye
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                />
            </div>

            {/* Currency Dropdown Section */}
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectCurrency}
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                    disabled={currencyDisable}
                >
                    {/* Loop laga ke options dikhana */}
                    {currencyOptions.map((currency) => (
                        <option key={currency} value={currency}>
                            {currency}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
}

export default InputBox;

```

### Theory & Explanation

* **`useId()` Hook**: Ye React 18 ka hook hai jo unique ID generate karta hai. Ise humne `<label htmlFor={...}>` aur `<input id={...}>` ko bind karne ke liye use kiya. Isse accessibility better hoti hai. Ise loop me keys ke liye use nahi karna chahiye.
* **Fail-safe Logic (`&&`)**: `onAmountChange && onAmountChange(...)`. Agar kal ko koi developer ye component call kare aur `onAmountChange` pass karna bhool jaye, to app crash nahi hogi.
* **`Number(e.target.value)`**: JavaScript me input type number ho tab bhi event usko string form me return karta hai. Multiplication sahi ho isliye use explicitely `Number()` me wrap kiya.
* **React Loops me `key**`: `<option key={currency}>`. Jab bhi JSX me loop/map function lagaye, `key` attribute zaroor den. Isse React Virtual DOM ki rendering ko optimized rakhta hai aur elements repeat hone pe warning nahi aati.

---

## 4. Components Import/Export Optimization (`index.js`)

Agar bahut saare components ho, to import likhna lamba ho jata hai. Iska solution hai components folder me ek `index.js` file banaye aur wahan se export karein:

```javascript
import InputBox from './InputBox'
export { InputBox }

```

Aisa karne se aap `App.jsx` me sidha `import { InputBox } from './components'` likh sakte hain.

---

## 5. Main App Logic (`App.jsx`)

Yahan hum apne banaye hue saare pieces ko combine karenge.

### Code

```javascript
import { useState } from 'react'
import { InputBox } from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo'

function App() {
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [convertedAmount, setConvertedAmount] = useState(0)

  // Custom hook call karna (Jise API fetch hoga based on 'from' currency)
  const currencyInfo = useCurrencyInfo(from)

  // API ne object diya. Object ki sari keys (usd, inr, eur) nikal ke array banayi jisse dropdown populate hoga.
  const options = Object.keys(currencyInfo)

  // Variables ko swap (ulta) karne wala function
  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }
  
  // Final Calculation logic
  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to])
  }

  return (
    <div className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat" style={{ backgroundImage: `url('...')` }}>
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
            <form
                onSubmit={(e) => {
                    e.preventDefault(); // Page refresh hone se rokne ke liye
                    convert(); // Submit hone par calculation method call
                }}
            >
                {/* UP/FROM BOX */}
                <div className="w-full mb-1">
                    <InputBox
                        label="From"
                        amount={amount}
                        currencyOptions={options}
                        onCurrencyChange={(currency) => setFrom(currency)}
                        selectCurrency={from}
                        onAmountChange={(amount) => setAmount(amount)}
                    />
                </div>
                
                {/* SWAP BUTTON */}
                <div className="relative w-full h-0.5">
                    <button
                        type="button" // form submit na karde accidentally, isliye type button diya
                        className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                        onClick={swap}
                    >
                        swap
                    </button>
                </div>
                
                {/* DOWN/TO BOX */}
                <div className="w-full mt-1 mb-4">
                    <InputBox
                        label="To"
                        amount={convertedAmount}
                        currencyOptions={options}
                        onCurrencyChange={(currency) => setTo(currency)}
                        selectCurrency={to}
                        amountDisable // Result box me user input disable kardiya
                    />
                </div>
                
                {/* SUBMIT BUTTON */}
                <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                    Convert {from.toUpperCase()} to {to.toUpperCase()}
                </button>
            </form>
        </div>
    </div>
  );
}

export default App

```

### Theory & Explanation

* **States**:
* `amount`: User kitna paisa convert karna chahta hai.
* `from` & `to`: Kaunsi currencies selected hain.
* `convertedAmount`: Final calculate kiya hua rate display karne ke liye.


* **`Object.keys(currencyInfo)`**: API humein object return kar rahi hai. Dropdown ko ek array chahiye keys ki `['inr', 'usd', 'eur']`. JavaScript ka `Object.keys()` property object me se sari keys nikal ke array bana deta hai.
* **Form `onSubmit**`: HTML me form ka default behavior page refresh karna hota hai. React SPA (Single Page Application) hai, isliye usko rokne ke liye `e.preventDefault()` pass karna bahut zaroori hai.
* **`swap()` Function**: Do simple variables ki tarah, `to` aur `from` ki string values ko reverse kiya gaya. Saath me, amount ko bhi exchange kar diya.