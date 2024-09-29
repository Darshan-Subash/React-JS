import { useState } from 'react';
import './App.css'


function App() {

  let [Counter,setCounter]= useState(0)

  const addValue = () =>{

    if(Counter >= 20) {
      alert("maximum value reached");
    }
    else{
      Counter = Counter + 1;
      setCounter(Counter)}
  }
  const removeValue = () =>{

    if(Counter <= 0) {
      alert("minimum value reached");
    }
    else{
    Counter = Counter - 1;
    setCounter(Counter)}
  }
  return (
    <>
      <h1>counter is {Counter}</h1>
      <button onClick={addValue}>add value</button><br />
      <button onClick={removeValue}>remove value</button>
      </>
  )
}

export default App
