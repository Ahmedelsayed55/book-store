import React from 'react'
import CartBooks from '../cartComponent/CartBooks'
import Payment from '../cartComponent/Payment'

const Cart = () => {

  return (
    <div className='overflow-hidden min-h-screen py-10 flex flex-col gap-10 lg:gap-20'>
      <CartBooks/>
      <Payment/>
    </div>
  )
}

export default Cart
