import { useParams } from "react-router-dom";
import { products, costumer } from "./../Data/Data";
import { GrFavorite } from "react-icons/gr";
import { BsCart3 } from "react-icons/bs";
import star from "../assets/star.png";
import { useState } from "react";
import facebook from "../assets/faceback.svg";
import instagram from "../assets/instgram.svg";
import x from "../assets/x.svg";
import whats from "../assets/whats.svg";
import share from "../assets/share.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import imgFlash from "../assets/hero2.png";

import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find((item) => item.id === Number(id));
  const [currentImage, setCurrentImage] = useState(product?.img);
  const tap = [
    { id: 1, name: "Product Details" },
    { id: 2, name: "Customer Reviews" },
    { id: 3, name: "Recommended For You" },
  ];
  const books = [1, 2, 3, 4];
  return (
    <div className="pt-10 pb-10 lg:pb-44 min-h-screen ">
      <div className="container mx-auto flex flex-col gap-10 ">
        {/* عرض الكتب */}
        <div className=" flex flex-col gap-10 ">
          <div className="flex flex-col lg:flex-row gap-10 ">
            <div className="w-full md:w-92.5 h-auto md:h-114">
              <img
                className="w-full h-full object-cover"
                src={currentImage}
                alt=""
              />
            </div>
            <div className="flex flex-col w-full gap-6 ">
              <div className="flex flex-col gap-1">
                <div className="w-full flex justify-between items-center">
                  <h2 className="text-[#222222] font-bold text-[28px]">
                    {product?.title}
                  </h2>
                  <div className="flex gap-3">
                    <img src={facebook} alt="" />
                    <img src={instagram} alt="" />
                    <img src={x} alt="" />
                    <img src={whats} alt="" />
                    <img className="ml-2 " src={share} alt="" />
                  </div>
                </div>
                <p className="text-[#22222280] text-[18px] w-full lg:w-[80%]">
                  {product?.desc}
                </p>
              </div>
              <div className="flex gap-10 mb-4">
                <h3 className="text-[#22222280] text-[14px] flex flex-col">
                  author{" "}
                  <span className="text-[#222222]">{product?.author}</span>
                </h3>
                <p className="text-[#22222280] text-[14px] flex flex-col">
                  Publication Year{" "}
                  <span className="text-[#222222]">{product?.year}</span>
                </p>
                <p className="text-[#22222280] text-[14px] flex flex-col">
                  Book <span className="text-[#222222]">1 of 1 </span>
                </p>
                <p className="text-[#22222280] text-[14px] flex flex-col">
                  Pages <span className="text-[#222222]">{product?.pages}</span>
                </p>
                <p className="text-[#22222280] text-[14px] flex flex-col">
                  Language{" "}
                  <span className="text-[#222222]">{product?.language}</span>
                </p>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex flex-col gap-1">
                  <div className="flex gap-1">
                    <img src={star} alt="" />
                    <p className="text-[#22222280] text-[12px]">
                      ({product?.review} Review)
                    </p>
                  </div>
                  <p className="text-[#22222280] text-[14px]">
                    Rate:{" "}
                    <span className="text-[#222222]">
                      {product?.rate ?? "4.2"}
                    </span>
                  </p>
                </div>
                <div className="flex flex-col gap-3 items-end">
                  <div className="flex gap-3">
                    <p className="text-[#25D994] text-[14px] bg-white py-2 px-3 rounded-md shadow">
                      In Stock
                    </p>
                    <p className="text-[#22222280] text-[14px] bg-white py-2 px-3 rounded-md shadow">
                      Free Shipping Today
                    </p>
                  </div>
                  <p className="text-[#EAA451] text-[14px] bg-white py-2 px-3 rounded-md shadow">
                    Discount code: Ne212
                  </p>
                </div>
              </div>
              <div className="w-full flex gap-4 justify-between grow items-end">
                <h3 className="text-[#222222] text-4xl font-semibold">
                  {product?.priceAfterDiscount}
                  <span className="line-through text-[#22222280] font-normal ml-2 text-lg">
                    ${product?.price}
                  </span>
                </h3>
                <div className="flex gap-5 ">
                  <button className="cursor-pointer hover:bg-white hover:text-[#D9176C] border border-[#D9176C] text-[16px] py-3.5 px-3 md:px-10 xl:px-21 flex gap-2 items-center bg-[#D9176C] text-white rounded-2xl">
                    Add to Cart <BsCart3 />
                  </button>
                  <button className="cursor-pointer hover:bg-[#D9176C] hover:text-white text-2xl text-[#D9176C] border border-[#D9176C] hover:border-[#d6d6d6] p-3.5 rounded-md">
                    <GrFavorite />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex gap-2">
            {product?.imgs.map((img, i) => (
              <div
                key={i}
                className={`
           cursor-pointer w-15.5 p-2.5
          transition-all duration-200
          opacity-70 hover:opacity-100
          ${
            currentImage === img
              ? "border border-[#D9176C] scale-105 opacity-100"
              : ""
          }
        `}
              >
                <img
                  onClick={() => setCurrentImage(img)}
                  className="object-cover  w-full h-full"
                  src={img}
                  alt={`Product image ${i + 1}`}
                />
              </div>
            ))}
          </div>
        </div>
        <TabGroup>
          <TabList className="flex gap-20 border-b border-[#2222221A] w-full">
            {tap.map((item) => (
              <Tab
                key={item.id}
                className={({ selected }) =>
                  `py-6 text-[26px] outline-0 transition duration-300 ${selected ? "border-b-2 text-[#222222] border-amber-500" : "text-[#22222280]"} `
                }
              >
                {item.name}
              </Tab>
            ))}
          </TabList>
          <TabPanels className="py-10">
            <TabPanel className="flex flex-col gap-4">
              <p className="text-black font-bold text-[20px] w-full lg:w-[80%]">
                Book Title :
                <span className="ml-2 text-[#222222] font-normal">
                  {product?.title}
                </span>
              </p>
              <p className="text-black font-bold text-[20px] w-full lg:w-[80%]">
                Author :
                <span className="ml-2 text-[#222222] font-normal">
                  {product?.author}
                </span>
              </p>
              <p className="text-black font-bold text-[20px] w-full lg:w-[80%]">
                Publication Date :
                <span className="ml-2 text-[#222222] font-normal">
                  {product?.year}
                </span>
              </p>
              <p className="text-black font-bold text-[20px] w-full lg:w-[80%]">
                ASIN :
                <span className="ml-2 text-[#222222] font-normal">
                  {product?.asin}
                </span>
              </p>
              <p className="text-black font-bold text-[20px] w-full lg:w-[80%]">
                Language :
                <span className="ml-2 text-[#222222] font-normal">
                  {product?.language}
                </span>
              </p>
              <p className="text-black font-bold text-[20px] w-full lg:w-[80%]">
                Publisher :
                <span className="ml-2 text-[#222222] font-normal">
                  {product?.publisher}
                </span>
              </p>
              <p className="text-black font-bold text-[20px] w-full lg:w-[80%]">
                Pages :
                <span className="ml-2 text-[#222222] font-normal">
                  {product?.pages}
                </span>
              </p>
              <p className="text-black font-bold text-[20px] w-full lg:w-[80%]">
                Book Format :
                <span className="ml-2 text-[#222222] font-normal">
                  {product?.bookformat}
                </span>
              </p>
              <p className="text-black font-bold text-[20px] w-full lg:w-[80%]">
                Best Seller Rank :
                <span className="ml-2 text-[#222222] font-normal">
                  {product?.bestsellerrank}
                </span>
              </p>
            </TabPanel>
            <TabPanel className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {costumer.map((item) => (
                <div
                  key={item.id}
                  className="py-4 px-6 bg-white flex flex-col gap-4"
                >
                  <div className="flex gap-4 items-center">
                    <img
                      className="w-15 rounded-full"
                      src={item.img}
                      alt={item.name}
                    />
                    <div>
                      <h3 className="text-[18px] font-semibold text-[#222222]">
                        {item.name}
                      </h3>
                      <p className="text-[14px] font-semibold text-[#25D994]">
                        {item.verified}
                      </p>
                    </div>
                  </div>
                  <p className="text-[16px] text-[#22222280]">
                    Reviewed On <span>{item.data}</span>
                  </p>
                  <div className="flex flex-col gap-2">
                    <div className="flex gap-4 items-center">
                      <p className="text-[#222222] font-semibold text-[20px]">
                        {item.comment}
                      </p>
                      <p className="text-[#222222] font-semibold text-[20px] ">
                        {item.rating}
                      </p>
                      <img className="w-32" src={item.star} alt="" />
                    </div>
                    <p className="text-[#22222280] text-[18px] lg:w-[80%]">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </TabPanel>
            <TabPanel className="py-20">
              <div className="relative px-10 max-w-254 mx-auto">
                <Swiper
                  modules={[Navigation]}
                  navigation={{
                    nextEl: ".flash-next",
                    prevEl: ".flash-prev",
                  }}
                  slidesPerView={2}
                  spaceBetween={30}
                >
                  {books.map((_, i) => (
                    <SwiperSlide key={i}>
                      <div className="bg-[#3B2F4A] rounded-lg p-5 flex gap-5 text-white">
                        <img
                          src={imgFlash}
                          alt="book"
                          className="max-w-44 max-h-65 object-cover rounded"
                        />

                        <div className="flex flex-col w-full justify-between">
                          <div className="flex flex-col  gap-3">
                            <div>
                              <h3 className="font-semibold text-sm mb-1">
                                Rich Dad And Poor Dad
                              </h3>
                              <p className="text-xs text-gray-300 mb-2">
                                <span className="text-[#FFFFFF80]">Author</span>
                                : Robert T. Kiyosaki
                              </p>
                            </div>
                            <div className="flex items-center gap-1 text-yellow-400 text-sm mb-2">
                              ★★★★☆
                              <span className="text-gray-300 text-xs ml-1">
                                (180 Review)
                              </span>
                            </div>
                            <div className="flex items-center gap-2 mb-2">
                              <span className="line-through text-gray-400 text-sm">
                                $45.00
                              </span>
                              <span className="font-semibold text-lg">
                                $30.00
                              </span>
                            </div>
                            <div className="h-2.5 bg-gray-600 rounded">
                              <div className="h-full w-[70%] bg-[#EAA451] rounded" />
                            </div>

                            <p className="text-xs text-gray-300 mt-1">
                              4 books left
                            </p>
                          </div>

                          <button className="self-end w-9 h-9 bg-pink-600 rounded flex items-center justify-center">
                            <BsCart3 />
                          </button>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>

                <button
                  className="flash-prev absolute -left-5 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg shadow-gray-400 text-gray-600 flex items-center justify-center    [&.swiper-button-disabled]:bg-gray-200
    [&.swiper-button-disabled]:text-gray-400
    [&.swiper-button-disabled]:cursor-not-allowed
    [&.swiper-button-disabled]:shadow-none"
                >
                  <FaAngleLeft />
                </button>
                <button
                  className="flash-next absolute -right-5 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg shadow-gray-400 text-gray-600 flex items-center justify-center    [&.swiper-button-disabled]:bg-gray-200
    [&.swiper-button-disabled]:text-gray-400
    [&.swiper-button-disabled]:cursor-not-allowed
    [&.swiper-button-disabled]:shadow-none"
                >
                  <FaAngleRight />
                </button>
              </div>
            </TabPanel>
          </TabPanels>
        </TabGroup>
      </div>
    </div>
  );
};

export default ProductDetails;
