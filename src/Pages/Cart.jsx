import React from 'react'
import CartBooks from '../cartComponent/CartBooks'
import Payment from '../cartComponent/Payment'

const Cart = () => {

  return (
    <div className='overflow-hidden min-h-screen pt-10 pb-20 flex flex-col gap-10 lg:gap-14'>
      <CartBooks/>
      <Payment/>
    </div>
  )
}

export default Cart
