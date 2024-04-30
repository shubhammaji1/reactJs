import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCount] = useState(0)
 
  // let counter = 10;
  const addvalue =()=>{
    if(counter+1 >20){
      alert("Exceeded")
    }
      else {
              setCount(counter+1)
      }
  }
const deletevalue=()=>{
  if(counter-1<0){
    alert("can't be negetive")
  }
  else{
     setCount(counter-1)
  }
}



  return (
    <>
      <h1>Hellooo</h1>
      <h3>Counter value:{counter}</h3>

      <button
      onClick={addvalue}>Add value</button>
      <button
      onClick={deletevalue}>delete value</button>
    </>
  )
}

export default App
