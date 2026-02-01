
import { Outlet } from 'react-router-dom'
import Footer from '../Component/Footer'
import MainNavbar from '../ComponentMainLayout/MainNavbar'

const LayoutForNotLocked = () => {
  return (
    <div>
      <header  className={`bg-[url('/navbarimg.png')] h-64 `}> 
        <MainNavbar/>
      </header>
      <main className='bg-[#F5F5F5]'>
        <Outlet/>
      </main>
      <footer className='bg-[#3B2F4A] h-64 flex items-center justify-center'>
        <Footer/>
      </footer>
    </div>
  )
}

export default LayoutForNotLocked
