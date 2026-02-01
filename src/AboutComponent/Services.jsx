import React from "react";
import { FaShippingFast } from "react-icons/fa";
import { MdOutlinePayment, MdOutlineSupportAgent, MdOutlineSync } from "react-icons/md";

const Services = () => {
  const data = [
    {
      icon: <FaShippingFast />,
      name: "Fast & Reliable Shipping",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et ultricies est. Aliquam in justo varius, sagittis neque ut, malesuada leo.",
    },
    {
      icon: <MdOutlinePayment />,
      name: "Secure Payment",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et ultricies est. Aliquam in justo varius, sagittis neque ut, malesuada leo.",
    },
    {
      icon: <MdOutlineSync />,
      name: "Easy Returns",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et ultricies est. Aliquam in justo varius, sagittis neque ut, malesuada leo.",
    },
    {
      icon: <MdOutlineSupportAgent />,
      name: "24/7 Customer Support",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et ultricies est. Aliquam in justo varius, sagittis neque ut, malesuada leo.",
    },
  ];
  return ( 
  <div className="w-full bg-[#F5F5F5] min-h-101.75 flex items-center justify-center"> 
    <div className="container grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-15.25">
      {
        data.map((data,index)=>(
          <div key={index} className="flex flex-col gap-3 p-2 ">
            <p className="text-[#22222280] text-2xl md:text-3xl">{data.icon}</p>
            <h2 className="text-[#222222] text-[18px]">{data.name}</h2>
            <p className="text-[#22222280] text-[16px]">{data.desc}</p>
          </div>
        ))
      }
    </div>
  </div>
);
};

export default Services;
