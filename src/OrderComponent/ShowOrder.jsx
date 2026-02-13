import React from "react";
import { order } from "../Data/Data";
import { BiCategory } from "react-icons/bi";
import { RiDeleteBin5Line } from "react-icons/ri";
import { FaArrowRightLong } from "react-icons/fa6";

const ShowOrder = ({ selectedState }) => {


    const filteredOrder = selectedState
      ? order.filter((item) => item.state === selectedState)
      : order;
  ;
  return (
    <div className="container mx-auto flex flex-col gap-4 py-5">
      {filteredOrder.map((data) => (
        <div
          key={data.id}
          className="flex flex-col gap-6  rounded-2xl pt-6 pb-10 px-6 shadow bg-white"
        >
          <div className="w-full flex justify-end">
            {" "}
            <button className="text-[#D9176C80] text-[30px] cursor-pointer active:scale-105">
              {" "}
              <RiDeleteBin5Line />
            </button>
          </div>
          {/* info for order */}
          <div className="flex flex-col gap-4 mb-10">
            <div className="flex items-center justify-between">
              <h2 className="text-[#22222280] text-[20px]">Order No</h2>
              <p className="text-[#222222] text-[20px]">#{data.id}</p>
            </div>
            <div className="flex items-center justify-between">
              <h2 className="text-[#22222280] text-[20px]">Status</h2>
              <p className="text-[#222222] text-[20px]">{data.state}</p>
            </div>
            <div className="flex items-center justify-between">
              <h2 className="text-[#22222280] text-[20px]">Date</h2>
              <p className="text-[#222222] text-[20px]">{data.date}</p>
            </div>
            <div className="flex items-center justify-between">
              <h2 className="text-[#22222280] text-[20px]">Address</h2>
              <p className="text-[#222222] text-[20px]">{data.address}</p>
            </div>
          </div>
          <div className="w-full ">
            {data.img ? (
                <div className="w-full flex items-center justify-center">
                    <img className="" src={data.img} alt="" />
                </div>
            ) : (
              <p className="flex gap-3 items-center text-[22px] text-[#D9176C]">
                View order detail <FaArrowRightLong />
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShowOrder;
