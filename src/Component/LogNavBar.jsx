import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import LinkForNav from './LinkForNav'
const LogNavBar = () => {
  const navigate = useNavigate()
  return (
    
    <div className='w-full bg-white/20 py-6'>
      <div className='container mx-auto  flex justify-between items-center'>
      <LinkForNav/>
        <div className='flex gap-5'>
          <button onClick={()=>navigate('/home/login')} className='bg-[#D9176C] rounded cursor-pointer text-white px-4 py-3'>Log in</button>
          <button onClick={()=>navigate('/home/register')} className='bg-white rounded cursor-pointer text-[#D9176C] px-4 py-3'>Sign Up</button>
        </div>
      </div>

    </div> 
  )
}

export default LogNavBar
