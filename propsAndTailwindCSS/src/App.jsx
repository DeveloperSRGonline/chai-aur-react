import React, { useState } from 'react'
import Card from './components/Card'

const App = () => {
  const data = [
    {
      name: "Bird One",
      image: "https://www.shutterstock.com/image-photo/beautiful-bird-picture-hd-4k-600nw-2354722779.jpg"
    },
    {
      name: "Bird Two",
      image: "https://www.shutterstock.com/image-photo/beautiful-bird-picture-hd-4k-600nw-2354722779.jpg"
    },
    {
      name: "Bird Three",
      image: "https://www.shutterstock.com/image-photo/beautiful-bird-picture-hd-4k-600nw-2354722779.jpg"
    },
    {
      name: "Bird Four",
      image: "https://www.shutterstock.com/image-photo/beautiful-bird-picture-hd-4k-600nw-2354722779.jpg"
    },
    {
      name: "Bird Five",
      image: "https://www.shutterstock.com/image-photo/beautiful-bird-picture-hd-4k-600nw-2354722779.jpg"
    }
  ]

  const myObject = {
      name: "Bird One",
      image: "https://www.shutterstock.com/image-photo/beautiful-bird-picture-hd-4k-600nw-2354722779.jpg"
    }
  return (
    <div className='h-screen w-screen bg-black-950 text-amber-100'>
      <Card image={myObject.image} name={myObject.name}/>
    </div>
  )
}

export default App