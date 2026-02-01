import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const OurMission = () => {
  const data = [
    {
      name: "Quality Selection",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et ultricies est. Aliquam in justo varius, sagittis neque ut, malesuada leo.Quality SelectionLorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et ultricies est. Aliquam in justo varius,",
    },
    {
      name: "Exceptional Service",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et ultricies est. Aliquam in justo varius, sagittis neque ut, malesuada leo.Quality SelectionLorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et ultricies est. Aliquam in justo varius,",
    },
    {
      name: "Set Up Stores",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et ultricies est. Aliquam in justo varius, sagittis neque ut, malesuada leo.Quality SelectionLorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et ultricies est. Aliquam in justo varius,",
    },
  ];
  return (
    <div className="w-full bg-[#F5F5F5]">
    <div className="max-w-282 mx-auto py-10 md:py-32 flex flex-col gap-10 md:gap-20">
      <h1 className="text-center text-[#222222] text-4xl font-bold">Our Mission</h1>
      <div className="text-[#22222233] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" >
      {data.map((data, index) => (
          <div key={index} className="p-6 bg-white shadow rounded-2xl flex flex-col gap-6">
            <h2 className="text-[#222222]">{data.name}</h2>
            <p className="text-[#22222280]">{data.desc}</p>
            <button className="flex gap-3 text-[#D9176C]">
              {" "}
              View More <FaArrowRightLong />
            </button>
          </div>
      ))}
      </div>
    </div>
    </div>
  );
};

export default OurMission;
