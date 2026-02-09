import React from "react";
import { useCartStore } from "../store/CartStore";
import { TbTruckDelivery } from "react-icons/tb";
import { RiDeleteBin5Line } from "react-icons/ri";

const CartBooks = () => {
  const { cartItems, total, decrementQty, incrementQty, clearCart } = useCartStore();
  return (
    <div className="container mx-auto">
<div className="w-full bg-gray-50 p-6">

  <div className="grid grid-cols-12 gap-4 mb-4 px-4 font-semibold text-gray-700">
    <div className="col-span-6 text-center">Item</div>
    <div className="col-span-2 text-center">Quantity</div>
    <div className="col-span-2 text-center">Price</div>
    <div className="col-span-1 text-center">Total Price</div>
    <div className="col-span-1 text-center"></div>
  </div>


  <div className="flex flex-col gap-4">
    {cartItems.map((item) => (
      <div 
        key={item.id} 
        className="grid grid-cols-12 gap-4 items-center bg-white p-4 rounded-lg shadow-sm border border-gray-100"
      >
        {/* Item Column */}
        <div className="col-span-6 flex gap-4">
          <div className="w-43.25  shrink-0 overflow-hidden rounded">
            <img
              className="w-full h-full object-cover"
              src={item.img}
              alt={item.title}
            />
          </div>
          <div className="flex flex-col justify-start gap-1">
            <h3 className="font-bold text-[#212121] text-lg">{item.title}</h3>
            <p className="text-sm text-[#22222280]">Author: <span className="text-[#222222]">{item.author}</span></p>
            <p className="text-xs text-gray-400 line-clamp-3 w-[50%] leading-relaxed">
              {item.desc}
            </p>
            <div className="mt-5 inline-flex items-center gap-2 text-[14px] text-gray-400 border px-2 py-1 rounded w-max">
              <TbTruckDelivery /> Free Shipping
            </div>
            <p className="text-[10px] text-[#181818] mt-1 uppercase">ASIN: <span className="text-[#22222250]">{item.asin || 'B09TWSRMCB'}</span></p>
          </div>
        </div>

        {/* Quantity Column */}
        <div className="col-span-2 flex justify-center items-center gap-3">
          <button onClick={()=> decrementQty(item.id)} className="w-6 h-6 flex items-center justify-center rounded-full border border-pink-500 text-pink-500 hover:bg-pink-50">-</button>
          <span className="font-medium">{item.qty}</span>
          <button onClick={()=> incrementQty(item.id)} className="w-6 h-6 flex items-center justify-center rounded-full border border-pink-500 text-pink-500 hover:bg-pink-50">+</button>
        </div>

        {/* Price Column */}
        <div className="col-span-2 text-center font-bold text-xl">
          ${item.price}
        </div>

        {/* Total Price Column */}
        <div className="col-span-1 flex justify-around items-center">
          <span className="font-bold text-xl">${item.price * item.qty}</span>
        </div>
        {/* Delete Button Column */}
        <div className="col-span-1 flex justify-center items-center">
          <button onClick={()=> clearCart(item.id)} className="text-pink-300 hover:text-pink-500 transition-colors">
           <RiDeleteBin5Line />
          </button>

        </div>
      </div>
    ))}
  </div>
</div>
    </div>
  );
};

export default CartBooks;
