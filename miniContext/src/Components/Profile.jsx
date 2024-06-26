import React,{useContext} from 'react'
import UserContext from '../context/UserContext'

export function Profile(props) {
    const {User} = useContext(UserContext)

    if(!User) return <div>Please Login</div>

    return <div>Welcome {User.username} </div>
}
