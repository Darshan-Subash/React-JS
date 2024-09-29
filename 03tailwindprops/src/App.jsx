import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/card'
function App() {
  const [count, setCount] = useState(0)
  const obj = {username:"darshan", pass:"34rddd"}

  return (
    <>
      <h1 className='bg-green-400 text-black p-0 rounded-xl mb-4'>tailwind test</h1>
      <Card username = "chai"></Card>
      <Card></Card>
      
      

    </>
  )
}

export default App
