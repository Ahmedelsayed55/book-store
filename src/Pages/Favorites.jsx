import React from 'react'
import FavoritesBooks from '../favoritesComponent/FavoritesBooks'
import CheckAndMoveBooks from '../favoritesComponent/CheckAndMoveBooks'

const Favorites = () => {
  return (
    <div className='flex flex-col gap-10 min-h-screen py-10'>
      <FavoritesBooks/>
      <CheckAndMoveBooks/>
    </div>
  )
}

export default Favorites
