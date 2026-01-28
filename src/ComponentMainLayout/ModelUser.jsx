import React from 'react'
import { AiOutlineExclamationCircle } from 'react-icons/ai'
import { CiUser } from 'react-icons/ci'
import { IoLocationOutline, IoTimeOutline } from 'react-icons/io5'
import { RxExit } from 'react-icons/rx'
import { Link } from 'react-router-dom'

const ModelUser = () => {
  return (
    <div className='w-full md:w-70 absolute top-20 text-black left-1/2 -translate-x-1/2  '>
        <h3 className='text-[14px] py-2'>Profile</h3>
        <div className='w-full bg-white shadow-md rounded-2xl p-6 flex flex-col gap-4'>
            <Link className='w-full flex items-center gap-3 p-4 rounded duration-300 hover:bg-gray-200 ' to={"profile"}>
              <CiUser />  Profile
            </Link>
            <Link className='w-full flex items-center gap-3 p-4 rounded duration-300 hover:bg-gray-200 ' to={"profile"}>
              <IoTimeOutline />  Order History
            </Link>
            <Link className='w-full flex items-center gap-3 p-4 rounded duration-300 hover:bg-gray-200 ' to={"profile"}>
              <IoLocationOutline />  Address
            </Link>
            <Link className='w-full flex items-center gap-3 p-4 rounded duration-300 hover:bg-gray-200 ' to={"profile"}>
              <AiOutlineExclamationCircle />  Help
            </Link>
            <Link className='w-full flex items-center gap-3 p-4 rounded duration-300 hover:bg-gray-200 ' to={"profile"}>
              <RxExit />  Log Out
            </Link>

        </div>
      
    </div>
  )
}

export default ModelUser
