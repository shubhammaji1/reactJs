import { useState,useCallback } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length,setlength] = useState(8)
  const [number,setnumber] = useState(false)
  const [charecter,setcharecter] = useState(false)
  const [password,setpassword]= usestate("")
const passwordGenerator = useCallback(()=>{
  let pass=" "
  let str ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
  if(number) str+="0123456789"
  if(charecter) str+="!@#$%&*?/` "
  for(let i=1;i<=array.length;i++){
    let char = Math.floor(Math.random() * str.length +1)
    pass = str.charAt(char)
  }
  setpassword(pass)


},[length,number,charecter,setpassword])


  return (
    <>
      <div className='w-full max-w-md mx-auto 
      shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray'>Test</div>
    </>
  )
}

export default App
