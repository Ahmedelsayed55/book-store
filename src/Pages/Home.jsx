import React from 'react'
import Hero from '../HomeComponent/Hero'
import LogNavBar from '../Component/LogNavBar'
import Footer from '../Component/Footer'

const Home = () => {
  return (
    <div className='flex flex-col'>
      <LogNavBar />
      <Hero/>
      <footer className='bg-[#3B2F4A] h-64 flex items-center justify-center'>
        <Footer/>
      </footer>
    </div>
  )
}

export default Home
