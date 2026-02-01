import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import imgFlash from "../assets/hero2.png";
import { BsCart3 } from "react-icons/bs";

const FlashSales = () => {
  const books = [1, 2, 3, 4];
  return (
    <div className="bg-[#F6F2F8] py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between mb-12">
          <div className="max-w-xl">
            <h2 className="text-2xl font-semibold mb-3">Flash Sale</h2>
            <p className="text-gray-500 text-sm leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et
              ultricies est. Aliquam in justo varius, sagittis neque ut,
              malesuada leo.
            </p>
          </div>
          <div className="relative w-22.5 h-22.5 rounded-full flex items-center justify-center">
            {/* Gradient Ring */}
            <div className="absolute inset-0 rounded-full bg-[conic-gradient(#D9176C_0deg_180deg,#F9A8D4_180deg_360deg)]" />
            <div className="w-2 h-2 rounded-full bg-[#D9176C] absolute -bottom-0.5 z-40"></div>
            <div className="relative w-21.25 h-21.25 bg-white rounded-full flex items-center justify-center font-semibold">
              30:00:00
            </div>
          </div>
        </div>

        {/* slider */}
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
                          <span className="text-[#FFFFFF80]">Author</span>:
                          Robert T. Kiyosaki
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
                        <span className="font-semibold text-lg">$30.00</span>
                      </div>
                      <div className="h-2.5 bg-gray-600 rounded">
                        <div className="h-full w-[70%] bg-[#EAA451] rounded" />
                      </div>

                      <p className="text-xs text-gray-300 mt-1">4 books left</p>
                    </div>

                    <button className="self-end w-9 h-9 bg-pink-600 rounded flex items-center justify-center">
                      <BsCart3 />
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <button className="flash-prev absolute -left-5 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow flex items-center justify-center">
            <FaAngleLeft />
          </button>
          <button className="flash-next absolute -right-5 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow flex items-center justify-center">
            <FaAngleRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FlashSales;
