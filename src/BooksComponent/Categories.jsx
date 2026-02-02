import React from 'react'


const Categories = ({categories}) => {
  return (
    <div className='flex justify-between'>
      {
        categories.map((cat, i)=>(
          <button className='border border-gray-500 px-5 py-2 rounded-2xl' key={i}>{cat.name}</button>
        ))
      }
      Categories
    </div>
  )
}

export default Categories
