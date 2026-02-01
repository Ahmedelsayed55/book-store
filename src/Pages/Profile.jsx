
import { useEffect, useState } from 'react'
import { domain, useCheckToken } from '../Store'
import axios from 'axios'
import MainNavbar from '../ComponentMainLayout/MainNavbar'
import Footer from '../Component/Footer'
import UserImg from '../ProfileComponent/UserImg'
import UserForm from '../ProfileComponent/UserForm'

const Profile = () => {
  const [userInfo , setUserInfo] = useState()
  const token = localStorage.getItem("token") || sessionStorage.getItem("token")
  useEffect(()=>{
    axios.get(domain+ "/profile", {
      headers:{
        Authorization: `Bearer ${token}`,
      }
    }).then((res)=>{
      console.log(res.data.data)
      setUserInfo(res.data.data)
    }).catch((err)=>{
      console.log(err)
    })
  },[])
 useCheckToken()
  return (
     <div>
       <header  className={`bg-[url('/navbarimg.png')] h-96`}><MainNavbar/></header>
       <main className='bg-[#F5F5F5] flex flex-col items-center'>
        <UserImg/>
        <UserForm userInfo={userInfo} token={token} />
       </main>
       <footer className='bg-[#3B2F4A] h-64 flex items-center justify-center'>
         <Footer/>
       </footer>
     </div>
  )
}

export default Profile
