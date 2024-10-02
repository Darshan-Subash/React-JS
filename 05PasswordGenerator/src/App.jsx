import { useState ,useCallback,useEffect,useRef} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length, setlength] = useState(8)
  const [NumberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setcharAllowed] = useState(false)
  const [Pass, setPass] = useState("")

  const Passref = useRef(null);
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(NumberAllowed) str += "0123456789"
    if(charAllowed) str += "!@#$%^&*()_-:;'\"|/?><.,~`"

    for (let i = 1; i < length; i++) {
      let char = Math.floor(Math.random() *str.length +1);
      pass += str.charAt(char)
    }
    setPass(pass);
    console.log(pass)
    

  },[length,NumberAllowed,charAllowed,setPass])

  const copyTexttoClipboard = useCallback(() => {
    Passref.current?.select()
    Passref.current?.setSelectionRange(0,50)
    window.navigator.clipboard.writeText(Pass)
    if(window.navigator.clipboard.writeText(Pass)) alert('copied')
  },[Pass])

  useEffect(()=>{
    passwordGenerator()
  },[length,NumberAllowed,charAllowed,passwordGenerator])
  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-red-800 text-cyan-400'>
        <h2 className='text-center my-3'>password Generator</h2>
        <div className='rounded-lg flex shadow overflow-hidden mb-4 w-full'>
        <input type="text" name="password" id="pass" value={Pass} className='outline-none w-full px-3 py-1' placeholder={Pass} readOnly ref={Passref}/>
        <button type="button" id='button' className='bg-blue-700' onClick={copyTexttoClipboard}>copy</button>



        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1.5'>
        <input type="range" name="range" id="range"  className='cursor-pointer' 
        onChange={(e)=>{setlength(e.target.value)
          // passwordGenerator()
        }} min={8} max={50} value={length}/>
        <label >length{length}</label>
        <input type="checkbox" name="check" id="checkbox" onClick={()=>{setNumberAllowed(!NumberAllowed)
          // passwordGenerator()
        }}  
        className='outline-none px-3 py-1' />
        <label >number</label>
        <input type="checkbox" name="check" id="checkbox" onClick={()=>{setcharAllowed(!charAllowed)
          // passwordGenerator()
        }}  className='outline-none px-3 py-1' />
        <label >character</label>

          </div>

        </div>
      </div>
    </>
  )
}

export default App
