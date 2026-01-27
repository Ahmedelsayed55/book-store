import React from 'react'
import bockMarck from "../assets/Vector.png"
import { MdOutlineFacebook } from 'react-icons/md'
const Footer = () => {
  return (
    <div className='flex flex-col justify-center gap-5'>
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
        <a href=""><MdOutlineFacebook className="text-white" /></a>
        <a href=""></a>
        <a href=""></a>
        <a href=""></a>
        </div>
      </div>
      <hr />
      <div className='flex justify-between'>


      </div>
    </div>
  )
}

export default Footer
