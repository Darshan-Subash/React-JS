import React from 'react'
import { createRoot } from 'react-dom/client'
import { useState } from 'react'

function Button({colour,bgColour,setColor}) {
  
  const colour1 = `bg-${colour}-400`
  const changeBGC = () => {
   document.body.style.backgroundColor = colour
  }
  return (
    <button onClick={() => {setColor(colour)}}  className={bgColour+" flex flex-wrap rounded-full text-white px-3 py-2 "} >
      {colour}
    </button>
  )
}

export default Button
