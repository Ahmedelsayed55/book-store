import React from "react";
import { useCartStore } from "../store/CartStore";

const Payment = () => {
  const { total } = useCartStore();
  return (
    <div className="w-full">
      <div className="max-w-370 mx-auto py-10 px-28 bg-[#3B2F4A1A] grid grid-cols-12 gap-8">
        {/* Left */}
        <div className="col-span-12 lg:col-span-7 flex flex-col gap-10 lg:gap-20">
          <div>
            <h2 className="text-[#222222] font-semibold text-[26px]">
              Payment Summary
            </h2>

            <p className="text-4 text-[#22222280] mt-2 max-w-[70%]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et
              ultricies est. Aliquam in justo varius, sagittis neque ut,
              malesuada leo.
            </p>
          </div>

          <div className="mt-8">
            <p className="text-[18px] text-[#22222280] mb-2">Have a discount code?</p>

            <div className="flex gap-3 max-w-sm">
              <input
                type="text"
                placeholder="Enter Promo Code"
                className="flex-1 px-4.75 py-4 border border-gray-300 rounded-md text-[16px] outline-none"
              />
              <button className="px-6 py-2 bg-[#3a2d4f] text-white text-sm rounded-md">
                Apply
              </button>
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="col-span-12 lg:col-span-5">
          <div className="flex flex-col gap-6">
            <div className="flex justify-between ">
              <span className="text-[20px] text-[#22222280]">Subtotal</span>
              <span className="font-medium text-[24px] text-[#222222]">${total?.toFixed(2)}</span>
            </div>

            <div className="flex justify-between">
              <span className="text-[20px] text-[#22222280]">Shipping</span>
              <span className="font-medium text-[24px] text-[#222222]">Free Delivery</span>
            </div>

            <div className="flex justify-between ">
              <span className="text-[20px] text-[#22222280]">Tax</span>
              <span className="font-medium text-[24px] text-[#222222]">$4</span>
            </div>

            <div className="border-t border-[#22222233] pt-4 flex justify-between items-center">
              <span className="text-[20px] text-[#22222280]">Total</span>
              <span className="text-[28px] font-bold text-[#D9176C]">
                ${(total + 4)?.toFixed(2)}
              </span>
            </div>

            <button className="mt-4 w-full py-3.25 border border-pink-600 bg-[#D9176C] cursor-pointer hover:bg-white hover:text-[#D9176C] active:scale-105 transition duration-300 text-white rounded-md text-[16px] font-medium">
              Check out
            </button>

            <button className="w-full py-3.25 border border-pink-600 text-[#D9176C] cursor-pointer hover:bg-[#D9176C] hover:text-white active:scale-105 transition duration-300 rounded-md text-[16px] font-medium">
              Keep Shopping
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
