import React from "react";

const AboutHero = () => {
  return (
    <div className="bg-[url('/navbarimg.png')] relative  w-full h-[70vh] bg-no-repeat bg-cover flex items-center justify-center">
      <div className=" relative z-30 w-163 flex flex-col gap-5 items-center text-center ">
        <h1 className="text-white text-2xl md:text-5xl">About Bookshop</h1>
        <p className="text-[18px] md:px-5 text-white/70 md:text-2xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et
          ultricies est. Aliquam in justo varius, sagittis neque ut, malesuada
          leo.
        </p>
      </div>
      <div className="w-full h-full absolute top-0 left-0 bg-black/40"></div>
    </div>
  );
};

export default AboutHero;
