import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { GrFavorite } from "react-icons/gr";
import { BsCart3 } from "react-icons/bs";
import userImg from "../assets/userimg.png";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import LinkForNav from "../Component/LinkForNav";
import ModelUser from "./ModelUser";
import { useCartStore } from "../store/CartStore";
import { useFavoritesStore } from "../store/FavoritesStore";
const MainNavbar = () => {
  const { cartItems } = useCartStore();
  const { favoritesItems } = useFavoritesStore();
  const navigate = useNavigate();
  const token =
    localStorage.getItem("token") || sessionStorage.getItem("token");
  const [showInfo, setShowInfo] = useState(false);
  const [userInfo, setUserInfo] = useState(null);
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("userInfo"));
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setUserInfo(storedUser);
    // console.log(storedUser);
  }, []);

  // handel scroll
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      className={`w-full fixed left-0 top-0 z-50 py-6  pr-10 transition-all duration-300 ${
        isScrolled ? "bg-black/50 shadow-md" : "bg-white/20"
      }`}
    >
      <div className="container mx-auto flex  justify-between items-center">
        <LinkForNav />
        {token ? (
          <div className="flex gap-5 items-center">
            <div className="flex gap-5">
              <NavLink
                className={({ isActive }) =>
                  `font-bold relative md:text-2xl ${isActive ? "text-[#EAA451]" : "text-white"}`
                }
                to={"/info/favorites"}
              >
                <GrFavorite />
                <span
                  className="absolute text-[7px] p-0.5 border border-white
                     text-white bg-[#D9176C] rounded-full min-w-4 flex items-center justify-center -top-1.5 -right-1.5"
                >
                  {favoritesItems.length}
                </span>
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  `font-bold relative md:text-2xl ${isActive ? "text-[#EAA451]" : "text-white"}`
                }
                to={"/info/cart"}
              >
                <BsCart3 />
                <span
                  className="absolute text-[7px] p-0.5 border border-white
                     text-white bg-[#D9176C] rounded-full min-w-4 flex items-center justify-center -top-1.5 -right-1.5"
                >
                  {cartItems.length}
                </span>
              </NavLink>
            </div>

            <div className="flex gap-5">
              <img className="w-10 h-10 " src={userImg} alt="" />
              <div
                className="relative left-0 z-50 text-white cursor-pointer flex items-center :gap-6"
                onClick={() => {
                  setShowInfo(!showInfo);
                }}
              >
                <div>
                  <h3>
                    {userInfo?.first_name} {userInfo?.last_name}
                  </h3>
                  <p className="text-[12px] md:text-[14px] text-[#FFFFFF80]">
                    {userInfo?.email}
                  </p>
                </div>
                {showInfo ? <FaChevronUp /> : <FaChevronDown />}
                {showInfo ? <ModelUser />: "" }
              </div>
            </div>
          </div>
        ) : (
          <div className="flex gap-5">
            <button
              onClick={() => navigate("/login")}
              className="bg-[#D9176C] rounded cursor-pointer text-white px-4 py-3"
            >
              Log in
            </button>
            <button
              onClick={() => navigate("/login/register")}
              className="bg-white rounded cursor-pointer text-[#D9176C] px-4 py-3"
            >
              Sign Up
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MainNavbar;
