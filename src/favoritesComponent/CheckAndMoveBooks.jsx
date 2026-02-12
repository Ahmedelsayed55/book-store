import React from "react";
import { useFavoritesStore } from "../store/FavoritesStore";
import right from "../assets/right.svg";
import { useCartStore } from "../store/CartStore";
import { useCheckoutStore } from "../store/Checkout";
import { useNavigate } from "react-router-dom";
const CheckAndMoveBooks = () => {
  const Navigate = useNavigate();
  const { addToCheckout } = useCheckoutStore();
  const { favoritesItems, total, clearFavorites } = useFavoritesStore();
  const { addToCart } = useCartStore();

  return (
    <div className="flex justify-center items-center">
      <div className=" flex flex-col md:flex-row  gap-4 ">
        <button
          onClick={() => {favoritesItems.forEach((item) => addToCart(item)); clearFavorites();}}
          className="text-[#D9176C] cursor-pointer transition duration-300 hover:bg-white text-[16px] border border-[#D9176C] bg-[#D9176C1A] px-6 py-3.5 rounded-lg "
        >
          Move to cart
        </button>
        <div onClick={()=>{favoritesItems.forEach((item) => addToCheckout(item)); Navigate("/info/checkout") }} className="flex justify-between cursor-pointer transition duration-300 hover:bg-[#db4284] items-center px-6 py-1 border border-[#D9176C] rounded-lg bg-[#D9176C] w-[320px]">
          <p className="flex flex-col text-white text-[14px]">
            {favoritesItems.length} item
            <span>${total.toFixed(1)}</span>
          </p>
          <p className="text-white font-bold">Check out</p>
          <img src={right} alt="" />
        </div>
      </div>
    </div>
  );
};

export default CheckAndMoveBooks;
