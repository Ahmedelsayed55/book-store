import { useParams } from "react-router-dom";
import { products } from "./../Data/Data";
import { GrFavorite } from "react-icons/gr";
import { BsCart3 } from "react-icons/bs";
import star from "../assets/star.png";
import { useState } from "react";
import facebook from "../assets/faceback.svg";
import instagram from "../assets/instgram.svg";
import x from "../assets/x.svg";
import whats from "../assets/whats.svg";
import share from "../assets/share.svg";
const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find((item) => item.id === Number(id));
  const [currentImage, setCurrentImage] = useState(product?.img);
  return (
    <div className="py-10 min-h-screen">
      {/* عرض الكتب */}
      <div className="container mx-auto flex flex-col gap-10 ">
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
                author <span className="text-[#222222]">{product?.author}</span>
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
    </div>
  );
};

export default ProductDetails;
