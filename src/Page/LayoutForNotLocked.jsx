import React from 'react'
import LogNavBar from '../Component/LogNavBar'
import { Outlet } from 'react-router-dom'
import Footer from '../Component/Footer'

const LayoutForNotLocked = () => {
  return (
    <div>
      <header  className={`bg-[url('/navbarimg.png')] `}> 
        <LogNavBar/>
      </header>
      <main className='bg-[#F5F5F5]'>
        <Outlet/>
      </main>
      <footer>
        <Footer/>
      </footer>
    </div>
  )
}

export default LayoutForNotLocked
