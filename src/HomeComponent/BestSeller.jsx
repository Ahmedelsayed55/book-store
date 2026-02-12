import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import heroImg from "../assets/6d9d091de0e9c20b618cba0b9f935885da4cdb82.jpg";
import heroImg2 from "../assets/hero2.png";
import heroImg3 from "../assets/hero3.jpg";
import heroImg4 from "../assets/hero4.png";
import heroImg5 from "../assets/hero5.jpg";
import heroImg6 from "../assets/hero6.jpg";
import heroImg7 from "../assets/hero7.jpg";
import heroImg8 from "../assets/hero8.png";
import { useNavigate } from "react-router-dom";


const BestSeller = ({bestSeller}) => {
  const Navigate = useNavigate();
  const books = [
    heroImg,
    heroImg2,
    heroImg3,
    heroImg4,
    heroImg5,
    heroImg6,
    heroImg7,
    heroImg8,
  ];
  return (
 
    <section className="bg-[#3B2F4A] py-24 overflow-hidden">
      
      {/* Title */}
      <div className="text-center text-white mb-16 px-4">
        <h2 className="text-3xl font-bold mb-3">Best Seller</h2>
        <p className="text-gray-300 max-w-xl mx-auto text-sm leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et
          ultricies est. Aliquam in justo varius, sagittis neque ut, malesuada
          leo.
        </p>
      </div>

      {/* FULL WIDTH SLIDER */}
      <Swiper
        slidesPerView="auto"
        spaceBetween={40}
        grabCursor={true}
        className=""
      >
        {books.map((book, index) => (
          <SwiperSlide
            key={index}
            className="!w-auto flex justify-center"
          >
            <img
              src={book}
              alt="book"
              className="h-[340px] w-auto object-contain rounded-2xl"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Button */}
      <div className="flex justify-center mt-20">
        <button onClick={()=> Navigate("/info/books")}  className="bg-pink-600 cursor-pointer hover:bg-pink-700 transition px-10 py-3 rounded-lg font-medium text-white">
          Shop now
        </button>
      </div>

    </section>
  );
};

export default BestSeller;
