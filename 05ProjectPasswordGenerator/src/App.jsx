import React, { useState,useCallback,useEffect,useRef } from 'react'

const App = () => {
  const [length,setLength] = useState(8);
  const [number,setNumber] = useState(false);
  const [character,setCharacter] = useState(false)
  const [password,setPassword] = useState("")

  const passwordRef = useRef();

  const passwordGenerator = useCallback(()=>{
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if(number) str += "0123456789";
    if(character) str += "!@#$%^&*()_+";

    for(let i = 0;i < length;i++){
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char)
    }

    setPassword(pass)
  },[length,number,character,setPassword]);

  const copyPasswordToClipboard = useCallback(()=>{
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0,101)

    window.navigator.clipboard.writeText(password)
  },[password])

  
  useEffect(()=>{passwordGenerator()},[length,number,character,passwordGenerator])
  return (
    <div className='h-screen w-screen bg-gray-950 text-white flex items-center justify-center'>
      <div className='bg-gray-900 p-8 rounded-2xl shadow-2xl w-full max-w-md'>
        <h1 className='text-3xl font-bold text-center mb-8 text-orange-500'>Password Generator</h1>
        
        {/* Password Display */}
        <div className='flex gap-4 mb-8'>
          <input 
            type="text" 
            value={password}
            readOnly
            ref={passwordRef}
            className='flex-1 bg-gray-800 text-orange-500 text-xl font-mono p-4 rounded-lg border-2 border-gray-700 focus:border-orange-500 outline-none'
            placeholder='Generate Password'
          />
          <button onClick={copyPasswordToClipboard} className='bg-blue-600 hover:bg-blue-700 text-white px-6 py-4 rounded-lg font-semibold transition-colors'>
            Copy
          </button>
        </div>

        {/* Length Slider */}
        <div className='mb-6'>
          <div className='flex justify-between items-center mb-2'>
            <label className='text-lg font-semibold text-orange-500'>Length</label>
            <span className='text-orange-500 font-bold'>{length}</span>
          </div>
          <input 
            type="range" 
            min="6" 
            max="20" 
            value={length}
            onChange={(e) => setLength(Number(e.target.value))}
            className='w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-blue-600'
          />
        </div>

        {/* Checkboxes */}
        <div className='flex gap-8'>
          <label className='flex items-center gap-3 cursor-pointer'>
            <input 
              type="checkbox" 
              checked={number}
              onChange={() => setNumber(prev => !prev)}
              className='w-5 h-5 accent-blue-600 cursor-pointer'
            />
            <span className='text-orange-500 font-semibold'>Numbers</span>
          </label>
          
          <label className='flex items-center gap-3 cursor-pointer'>
            <input 
              type="checkbox" 
              checked={character}
              onChange={() => setCharacter(prev => !prev)}
              className='w-5 h-5 accent-blue-600 cursor-pointer'
            />
            <span className='text-orange-500 font-semibold'>Characters</span>
          </label>
        </div>
      </div>
    </div>
  )
}

export default App