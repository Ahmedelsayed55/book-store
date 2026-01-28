import React from 'react'
import MainNavbar from '../ComponentMainLayout/MainNavbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Component/Footer'

const HomeLayout = () => {
  return (
    <div>
      <header  className={`bg-[url('/navbarimg.png')]`}><MainNavbar/></header>
      <main className='bg-[#F5F5F5]'><Outlet/></main>
      <footer className='bg-[#3B2F4A] h-64 flex items-center justify-center'>
        <Footer/>
      </footer>
    </div>
  )
}

export default HomeLayout
