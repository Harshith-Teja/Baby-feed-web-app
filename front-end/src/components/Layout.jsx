import React from 'react'
import { Header } from './Header'
import { NavBar } from './NavBar'
import { Home } from './Home'
import { Footer } from './Footer'
import { Outlet } from 'react-router-dom'

export const Layout = () => {
  return (
    <div className='grow flex flex-col'>
        <Header/>
        <NavBar/>
        <main className='grow overflow-auto bg-gradient-to-b from-slate-200 to-stone-200'>    
            <Outlet/>
        </main>
        <Footer/>
    </div>
  )
}
