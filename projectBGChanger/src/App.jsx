import React from 'react'
import { useState } from 'react'

const App = () => {
  const [color, setColor] = useState('olive')

  const buttonColors = [
    { name: 'Olive', value: 'olive', textColor: '#ffffff' },
    { name: 'Red', value: 'red', textColor: '#ffffff' },
    { name: 'Blue', value: 'blue', textColor: '#ffffff' },
    { name: 'Green', value: 'green', textColor: '#ffffff' },
    { name: 'Yellow', value: 'yellow', textColor: '#000000' },
    { name: 'Pink', value: 'pink', textColor: '#000000' },
    { name: 'Purple', value: 'purple', textColor: '#ffffff' },
    { name: 'Lavender', value: 'lavender', textColor: '#000000' },
    { name: 'White', value: 'white', textColor: '#000000' },
    { name: 'Black', value: 'black', textColor: '#ffffff' },
  ]

  return (
    <div className="w-full h-screen" style={{ backgroundColor: color }}>
      <div className="fixed inset-x-0 bottom-8 flex justify-center px-4">
        <div className="relative flex flex-wrap justify-center gap-3 overflow-hidden rounded-4xl border border-white/35 bg-white/20 px-4 py-3 shadow-[0_18px_45px_rgba(15,23,42,0.28)] backdrop-blur-xl backdrop-saturate-150">
          <div className="pointer-events-none absolute inset-x-6 top-1 h-1/2 rounded-full bg-linear-to-b from-white/55 via-white/20 to-transparent blur-md" />
          <div className="pointer-events-none absolute inset-x-10 bottom-1 h-px bg-white/40" />
          {buttonColors.map((button) => (
            <button
              key={button.name}
              className="relative outline-none rounded-full border border-white/20 px-4 py-1.5 text-sm font-medium shadow-[inset_0_1px_1px_rgba(255,255,255,0.35),0_8px_18px_rgba(15,23,42,0.18)] transition-all duration-200 hover:-translate-y-2 hover:scale-110 hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.45),0_16px_28px_rgba(15,23,42,0.24)] active:translate-y-0 active:scale-100"
              style={{
                backgroundColor: button.value,
                color: button.textColor,
              }}
              onClick={() => setColor(button.value)}
            >
              <span className="pointer-events-none absolute inset-x-3 top-1 h-1/3 rounded-full bg-white/20 blur-[2px]" />
              <span className="relative z-10">{button.name}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
