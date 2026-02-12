import React from "react";
import { useCartStore } from "../store/CartStore";
import { TbTruckDelivery } from "react-icons/tb";
import { RiDeleteBin5Line } from "react-icons/ri";
import { FiMinusCircle, FiPlusCircle } from "react-icons/fi";

const CartBooks = () => {
  const { cartItems, decrementQty, incrementQty, removeBook } = useCartStore();
  return (
    <div className="w-full overflow-x-auto ">
      <div className="w-225 md:w-270 lg:w-7xl xl:w-370 mx-auto   ">
        <div className="grid grid-cols-12 gap-4 mb-4 px-4 font-semibold text-gray-700">
          <div className="col-span-6 text-center">Item</div>
          <div className="col-span-2 text-center">Quantity</div>
          <div className="col-span-2 text-center">Price</div>
          <div className="col-span-1 text-center">Total Price</div>
          <div className="col-span-1 text-center"></div>
        </div>

        <div className="flex flex-col gap-4">
          {cartItems.map((item, i) => (
            <div
              key={i}
              className="grid grid-cols-12 gap-4 items-center bg-white p-4 rounded-lg shadow-sm border border-gray-100 "
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
                <div className="flex flex-col justify-start gap-8.75">
                  <div className="flex flex-col gap-2">
                    <h3 className="font-bold text-[#212121] text-lg">
                      {item.title}
                    </h3>
                    <p className="text-sm text-[#22222280]">
                      Author:{" "}
                      <span className="text-[#222222]">{item.author}</span>
                    </p>
                    <p className="text-sm text-gray-400 line-clamp-3 w-[50%] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-[14px] text-[#22222280] border px-3 py-2 rounded w-max">
                    <TbTruckDelivery /> Free Shipping
                  </div>
                  <p className="text-[14px] text-[#22222280] mt-1 uppercase">
                    ASIN:{" "}
                    <span className="text-[#22222250]">
                      {item.asin || "B09TWSRMCB"}
                    </span>
                  </p>
                </div>
              </div>

              {/* Quantity Column */}
              <div className="col-span-2 flex justify-center items-center gap-3 ">
                <button
                  onClick={() => decrementQty(item)}
                  className="text-2xl text-pink-500 cursor-pointer"
                >
                 <FiMinusCircle />
                </button>
                <span className="font-medium text-2xl ">{item.qty}</span>
                <button
                  onClick={() => incrementQty(item)}
                  className="text-2xl text-pink-500 cursor-pointer"
                >
                  <FiPlusCircle />
                </button>
              </div>

              {/* Price Column */}
              <div className="col-span-2 text-center font-bold text-xl">
                ${item.price}
              </div>

              {/* Total Price Column */}
              <div className="col-span-1 flex justify-around items-center">
                <span className="font-bold text-xl">
                  ${(item.price * item.qty).toFixed(2)}
                </span>
              </div>
              {/* Delete Button Column */}
              <div className="col-span-1 flex justify-center items-center">
                <button
                  onClick={() => removeBook(item)}
                  className="text-pink-300 cursor-pointer text-[24px] transition duration-200 hover:text-pink-500"
                >
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
