import React, { useState } from "react";
import star from "../assets/star.png";
import { GrFavorite } from "react-icons/gr";
import { BsCart3 } from "react-icons/bs";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { products } from './../Data/Data';
import { useCartStore } from "../store/CartStore";
import { useFavoritesStore } from "../store/FavoritesStore";

const BooksProducts = ({ category, categories }) => {
  const {addToCart}= useCartStore();
  const {addToFavorites}= useFavoritesStore();
  // console.log(cartItems)

  const filteredProducts = products.filter((cat) => {
    const byButton = category ? cat.category === category : false;
    const bySide = categories.length > 0 ? categories.includes(cat.category) : false;

    if (!category && categories.length === 0) return true;
    return byButton || bySide; // OR logic
  });

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3; 

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentProducts = filteredProducts.slice(startIndex, startIndex + itemsPerPage);

  const goToPage = (page) => {
    if (page < 1) page = 1;
    if (page > totalPages) page = totalPages;
    setCurrentPage(page);
  };
  const navigate = useNavigate();
  return (
    <div className="py-10">
      {/* show books*/}
      <div className="grid grid-cols-1 gap-20 ">
        {currentProducts.map((data) => (
          <div
          onClick={()=>{
            navigate(`./${data.id}`)
          }}
            key={data.id}
            className="flex flex-col lg:flex-row gap-10 "
          >
            <div className="w-full md:w-66 h-auto md:h-66">
              <img className="w-full h-full" src={data.img} alt="" />
            </div>
            <div className="flex flex-col w-full gap-6">
              <div className="flex flex-col gap-1">
                <div className="w-full flex justify-between items-center">
                <h2 className="text-[#222222] font-bold text-[18px]">{data?.title}</h2>
                <p className="text-[#EBC305] border border-[#EBC305] px-3 py-2 rounded-2xl">25% Discount code: Ne212</p>
                </div>
                <p className="text-[#22222280] line-clamp-3 text-[14px] w-full lg:w-1/2">{data?.desc}</p>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex flex-col gap-1">
                  <div className="flex gap-1">
                    <img src={star} alt="" />
                    <p className="text-[#22222280] text-[12px]">({data?.review} Review)</p>
                  </div>
                  <p className="text-[#22222280] text-[14px]">
                    Rate: <span className="text-[#222222]">{data?.rate ?? "4.2"}</span>
                  </p>
                </div>
                <h3 className="text-[#222222] text-2xl font-semibold">${data?.price}</h3>
              </div>
              <div className="w-full flex gap-4 justify-between">
                <div className="flex gap-10 mb-4">
                  <h3 className="text-[#22222280] text-[14px] flex flex-col">
                    author <span className="text-[#222222]">{data?.author}</span>
                  </h3>
                  <p className="text-[#22222280] text-[14px] flex flex-col">
                    Year <span className="text-[#222222]">{data.year}</span>
                  </p>
                </div>
                <div onClick={(e)=>e.stopPropagation()} className="flex gap-5">
                  <button
                  onClick={()=> addToCart(data)}
                  className="cursor-pointer hover:bg-white hover:text-[#D9176C] border border-[#D9176C] text-[16px] py-3.5 px-3 md:px-10 xl:px-21 flex gap-2 items-center bg-[#D9176C] text-white rounded-2xl">
                    Add to Cart <BsCart3 />
                  </button>
                  <button onClick={()=> addToFavorites(data)} className="cursor-pointer hover:bg-[#D9176C] hover:text-white text-2xl text-[#D9176C] border border-[#D9176C] hover:border-[#d6d6d6] p-3.5 rounded-md">
                    <GrFavorite />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center gap-2 mt-5">
        <button
          onClick={() => goToPage(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-3 py-1 flex gap-2 items-center cursor-pointer text-[#D9176C] disabled:opacity-50"
        >
          <FiChevronLeft /> Previous
        </button>

        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => goToPage(i + 1)}
            className={`px-3 py-1 shadow cursor-pointer rounded ${
              currentPage === i + 1 ? "bg-[#D9176C] text-white" : ""
            }`}
          >
            {i + 1}
          </button>
        ))}

        <button
          onClick={() => goToPage(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-3 py-1 flex gap-2 items-center cursor-pointer text-[#D9176C] disabled:opacity-50"
        >
          Next <FiChevronRight />
        </button>
      </div>
    </div>
  );
};

export default BooksProducts;
