import React, { useState,useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'

export function Github() {
    const data = useLoaderData();
    // const [data,setData] = useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/shubhammaji1')
    //     .then(response=> response.json())
    //     .then(data=>{
    //         console.log(data);
    //         setData(data)
    //     })
    // }, [])
    

    return (
        <div className='text-center m-4 bg-gray-900 text-white p-4 text-3xl'>Github followers: {data.followers}
        <img src ={data.avatar_url} alt="Git picture" width={100} />
        
        </div>
    )
}

export const githubInfoLoader =async() =>{
   const response = await fetch('https://api.github.com/users/shubhammaji1')
   return response.json();
}
