import React from "react";
import { useCartStore } from "../store/CartStore";

const Payment = () => {
    const { total } = useCartStore();
  return (
    <div className="w-full   mt-6">
      <div className="max-w-370 mx-auto p-8 bg-[#3B2F4A1A] grid grid-cols-12 gap-8">
        {/* Left */}
        <div className="col-span-12 lg:col-span-7">
          <h2 className="text-xl font-semibold text-gray-800">
            Payment Summary
          </h2>

          <p className="text-sm text-gray-500 mt-2 max-w-md">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et
            ultricies est. Aliquam in justo varius, sagittis neque ut, malesuada
            leo.
          </p>

          <div className="mt-8">
            <p className="text-sm text-gray-600 mb-2">Have a discount code?</p>

            <div className="flex gap-3 max-w-sm">
              <input
                type="text"
                placeholder="Enter Promo Code"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-md text-sm outline-none"
              />
              <button className="px-6 py-2 bg-[#3a2d4f] text-white text-sm rounded-md">
                Apply
              </button>
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="col-span-12 lg:col-span-5">
          <div className="flex flex-col gap-4">
            <div className="flex justify-between text-sm text-gray-600">
              <span>Subtotal</span>
              <span className="font-medium text-gray-800">${total}</span>
            </div>

            <div className="flex justify-between text-sm text-gray-600">
              <span>Shipping</span>
              <span className="font-medium text-gray-800">Free Delivery</span>
            </div>

            <div className="flex justify-between text-sm text-gray-600">
              <span>Tax</span>
              <span className="font-medium text-gray-800">$4</span>
            </div>

            <div className="border-t pt-4 flex justify-between items-center">
              <span className="text-sm text-gray-500">Total</span>
              <span className="text-xl font-bold text-pink-600">${total + 4 }</span>
            </div>

            <button className="mt-4 w-full py-3 bg-pink-600 text-white rounded-md text-sm font-medium">
              Check out
            </button>

            <button className="w-full py-3 border border-pink-600 text-pink-600 rounded-md text-sm font-medium">
              Keep Shopping
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
