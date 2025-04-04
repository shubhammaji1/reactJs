import React from 'react'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import { Outlet } from 'react-router-dom'

export function Layout(props) {
    

    return (
        <>
            <Header/>
            <Outlet/>
            <Footer/>
        </>
    )
}
