import React, { useState } from 'react'
import { question } from './api'
import MyAccordian from './MyAccordian.js'

export function Accordian(props) {
    
    const [data, setData] = useState(question)
    return (
        <>
            {
                data.map((currEle)=>{
                    const {id} = currEle;
                    return <MyAccordian key={id}{...currEle}/>
                })
            }
        </>
    )
}
