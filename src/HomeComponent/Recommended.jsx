import React from "react";
import img from "../assets/hero2.png";
import star from "../assets/star.png";
import { BsCart3 } from "react-icons/bs";
import { GrFavorite } from "react-icons/gr";
const Recommended = ({ recommended }) => {
  console.log(recommended);
  return (
    <div className="w-full bg-[#F5F5F5] py-10 md:py-28">
      <div className="max-w-[1320px] mx-auto ">
        <h1 className="text-[#222222] text-[26px] mb-2 md:mb-10 font-bold">Recommended For You</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

       
        {recommended.map((data) => (
          <div
            key={data.bookId}
            className="flex gap-10 bg-white shadow p-10"
          >
            <div className="w-full md:w-66 h-auto md:h-66">
              <img className="w-full h-full" src={img} alt="" />
            </div>
            <div className="flex flex-col w-full gap-6">
              <div className="flex flex-col gap-1">
                <h2 className="text-[#222222#22222280] font-bold text-[18px]">{data?.bookName}</h2>
                <h3 className="text-[#22222280] text-[14px]">
                  {" "}
                  author <span className="text-[#222222] ">{data?.author}</span>
                </h3>
                <p className="text-[#22222280] line-clamp-3 text-[14px]">{data?.description}</p>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex flex-col gap-1">
                  <div className="flex gap-1">
                    <img src={star} alt="" />
                    <p className="text-[#22222280] text-[12px]"> ({data?.countReview} Review)</p>
                  </div>
                  <p className="text-[#22222280] text-[14px]">Rate: <span className="text-[#222222]"> {data?.rate ? data.rate : "4.2"}</span></p>
                </div>
                <h3 className="text-[#222222] text-2xl font-semibold">{data.final_price}</h3>
              </div>
              <div className="w-full flex gap-4">
                <button className="cursor-pointer hover:bg-white hover:text-[#D9176C] border border-[#D9176C] text-[16px] py-3.5 px-21 flex gap-2 items-center bg-[#D9176C] text-white rounded-2xl"> Add to Cart <BsCart3 /></button>
                <button className="cursor-pointer hover:bg-[#D9176C] hover:text-white text-2xl text-[#D9176C] border border-[#D9176C] hover:border-[#d6d6d6] p-3.5 rounded-md "><GrFavorite /></button>
              </div>
            </div>
          </div>
        ))}
         </div>
      </div>
    </div>
  );
};

export default Recommended;
