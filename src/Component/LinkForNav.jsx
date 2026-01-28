import React from "react";
import bockMarck from "../assets/Vector.png";
import { NavLink } from "react-router-dom";
const LinkForNav = () => {
  return (
    <nav className="hidden md:flex gap-12 text-white">
      <NavLink className="flex gap-3 " to={"/"}>
        <img src={bockMarck} alt="" />
        <p className="">Bookshop</p>
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          `font-bold ${isActive ? "text-[#EAA451]" : "text-white"}`
        }
        to={"/"}
      >
        Home
      </NavLink>
      <NavLink   className={({ isActive }) =>
          `font-bold ${isActive ? "text-[#EAA451]" : "text-white"}`
        } to={"/info/books"}>
        Books
      </NavLink>
      <NavLink   className={({ isActive }) =>
          `font-bold ${isActive ? "text-[#EAA451]" : "text-white"}`
        } to={"/about"}>
        About us
      </NavLink>
    </nav>
  );
};

export default LinkForNav;
