import React from 'react'
import SideFilter from '../BooksComponent/SideFilter'
import Search from '../BooksComponent/Search'
import Categories from '../BooksComponent/Categories'
import BooksProducts from '../BooksComponent/BooksProducts'

const Books = () => {
  const categories = [
    {name:" Business"},
    {name:" Kids"},
    {name:" Art"},
    {name:" History"},
    {name:" Romance"},
    {name:" Fantasy"},
    {name:" Self Help"},
    {name:" Cooking"},
    {name:" sports"},
  ]
  return (
    <div className='flex justify-center text-black '>
      <div className='container flex flex-col lg:flex-row gap-10 '>
        {/* side menu for category */}
        <div>
          <SideFilter categories={categories}/>
        </div>
        {/* main page for product */}
        <div className='w-full flex flex-col gap-5 pt-16 h-screen overflow-auto'>
          <Search/>
          <Categories categories={categories}/>
          <BooksProducts/>
        </div>
      </div>
    </div>
  )
}

export default Books
