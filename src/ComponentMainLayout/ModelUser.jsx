import React from 'react'
import { AiOutlineExclamationCircle } from 'react-icons/ai'
import { CiUser } from 'react-icons/ci'
import { IoLocationOutline, IoTimeOutline } from 'react-icons/io5'
import { RxExit } from 'react-icons/rx'
import { Link, useNavigate } from 'react-router-dom'

const ModelUser = () => {
  const navigate = useNavigate()
  const handleLogout = () => {
  localStorage.removeItem("userInfo");
  localStorage.removeItem("token");

  navigate("/login");
};
  return (
    <div className='w-full md:w-70 absolute top-20 text-black left-1/2 -translate-x-1/2  '>
        <h3 className='text-[14px] py-2'>Profile</h3>
        <div className='w-full bg-white shadow-md rounded-2xl p-6 flex flex-col gap-4'>
            <Link className='w-full flex items-center gap-3 p-4 rounded duration-300 hover:bg-gray-200 ' to={"/profile"}>
              <CiUser />  Profile
            </Link>
            <Link className='w-full flex items-center gap-3 p-4 rounded duration-300 hover:bg-gray-200 ' to={"/info/order"}>
              <IoTimeOutline />  Order History
            </Link>
            <Link className='w-full flex items-center gap-3 p-4 rounded duration-300 hover:bg-gray-200 ' to={"/about"}>
              <IoLocationOutline />  Address
            </Link>
            <Link className='w-full flex items-center gap-3 p-4 rounded duration-300 hover:bg-gray-200 ' to={"/help"}>
              <AiOutlineExclamationCircle />  Help
            </Link>
            <p className='w-full flex items-center gap-3 p-4 rounded duration-300 hover:bg-gray-200 ' onClick={handleLogout} >
              <RxExit />  Log Out
            </p>

        </div>
      
    </div>
  )
}

export default ModelUser
