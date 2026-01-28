import React from 'react'
import { CiSearch } from 'react-icons/ci'
import { LuMic } from 'react-icons/lu'

const Hero = () => {
  return (
    <div className="bg-[url('/navbarimg.png')] relative  w-full h-[70vh] bg-no-repeat bg-cover flex items-center justify-center">
        <div className=' w-134 flex '>
            <div className='relative z-30 w-full'>
            <input type="text" placeholder='Search' className='w-full text-2xl bg-white px-6 py-3 border-0 outline-0 rounded-l-full' />
            <LuMic className='absolute right-2 top-3.5 cursor-pointer text-3xl text-gray-400' />
            </div>
            <button className=' bg-[#D9176C] px-6 py-3   rounded-r-full'><CiSearch className='text-white font-bold text-3xl'/></button>
        </div>
      <div className='w-full h-full absolute top-0 left-0 bg-black/20'></div>
    </div>
  )
}

export default Hero
