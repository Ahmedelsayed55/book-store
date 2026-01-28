import React from "react";
import bockMarck from "../assets/Vector.png";
import { MdOutlineFacebook } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { FaInstagram, FaYoutube } from "react-icons/fa";
import { FaEarthAfrica, FaXTwitter } from "react-icons/fa6";
const Footer = () => {
  return (
    <div className="container mx-auto  flex flex-col gap-5">
      <div className=" flex justify-between items-center">
        <nav className="hidden md:flex gap-12 text-white">
          <NavLink className="flex gap-3 " to={"/"}>
            <img src={bockMarck} alt="" />
            <p className="">Bookshop</p>
          </NavLink>
          <NavLink   className={({ isActive }) =>
          `font-bold ${isActive ? "text-[#EAA451]" : "text-white"}`
        } to={"/"}>
            Home
          </NavLink>
          <NavLink   className={({ isActive }) =>
          `font-bold ${isActive ? "text-[#EAA451]" : "text-white"}`
        } to={"/books"}>
            Books
          </NavLink>
          <NavLink   className={({ isActive }) =>
          `font-bold ${isActive ? "text-[#EAA451]" : "text-white"}`
        } to={"/about"}>
            About us
          </NavLink>
        </nav>
        <div className="flex gap-5">
          <a className="text-white text-2xl" href="">
            <MdOutlineFacebook />
          </a>
          <a className="text-white text-2xl" href="">
            <FaInstagram />
          </a>
          <a className="text-white text-2xl" href="">
            <FaYoutube />
          </a>
          <a className="text-white text-2xl" href="">
            <FaXTwitter />
          </a>
        </div>
      </div>
      <div className="h-0.5 bg-gray-600"></div>
      <div className="flex justify-between">
        <p className="text-white">Developed By Ahmed Elsayed All Copy Rights Reserved @2026</p>
        <div className="flex gap-5">
          <FaEarthAfrica className="text-white text-2xl" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
