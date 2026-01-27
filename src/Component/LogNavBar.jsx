import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import bockMarck from "../assets/Vector.png"
const LogNavBar = () => {
  const navigate = useNavigate()
  return (
    
    <div className='w-full bg-white/20 py-6'>
      <div className='container mx-auto  flex justify-between items-center'>
        <nav className='hidden md:flex gap-12 text-white'> 
        <NavLink className='flex gap-3 ' to={"/"}>
          <img src={bockMarck} alt="" />
          <p className=''>Bookshop</p>
        </NavLink>
        <NavLink className=' font-bold ' to={"/"}>
          Home
        </NavLink>
        <NavLink className=' font-bold ' to={"/books"}>
          Books
        </NavLink>
        <NavLink className='font-bold  ' to={"/about"}>
          About us 
        </NavLink>
        </nav>
        <div className='flex gap-5'>
          <button onClick={()=>navigate('/')} className='bg-[#D9176C] rounded cursor-pointer text-white px-4 py-3'>Log in</button>
          <button onClick={()=>navigate('/register')} className='bg-white rounded cursor-pointer text-[#D9176C] px-4 py-3'>Sign Up</button>
        </div>
      </div>

    </div> 
  )
}

export default LogNavBar
