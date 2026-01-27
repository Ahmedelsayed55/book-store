import React from 'react'
import LogNavBar from '../Component/LogNavBar'
import { Outlet } from 'react-router-dom'
import Footer from '../Component/Footer'

const LayoutForNotLocked = () => {
  return (
    <div>
      <header  className={`bg-[url('/navbarimg.png')] h-64 `}> 
        <LogNavBar/>
      </header>
      <main className='bg-[#F5F5F5]'>
        <Outlet/>
      </main>
      <footer className='bg-[#3B2F4A] h-64'>
        <Footer/>
      </footer>
    </div>
  )
}

export default LayoutForNotLocked
