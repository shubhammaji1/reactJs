import React,{useState,useContext} from 'react'
import UserContext from '../context/UserContext'
export function Login() {
    const [username,setusername] = useState('')
    const handleSubmit  = ()=>{

    }
    return (
        <div>
            <h2>Login</h2>
            <input type='text' placeholder='Username'/>
            <input type='text' placeholder='Password'/>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}
