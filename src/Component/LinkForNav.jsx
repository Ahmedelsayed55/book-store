import React, { useState } from "react";
import bockMarck from "../assets/Vector.png";
import { NavLink } from "react-router-dom";
import { RiMenu5Fill } from "react-icons/ri";
import ModelForNavLink from "./ModelForNavLink";
const LinkForNav = () => {
  const [showNav, setShowNav] = useState(false);
  return (
    <div className="w-full">
      <nav className="hidden lg:flex gap-12 text-white">
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
        <NavLink
          className={({ isActive }) =>
            `font-bold ${isActive ? "text-[#EAA451]" : "text-white"}`
          }
          to={"/info/books"}
        >
          Books
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `font-bold ${isActive ? "text-[#EAA451]" : "text-white"}`
          }
          to={"/about"}
        >
          About us
        </NavLink>
      </nav>
      <RiMenu5Fill
        className="lg:hidden text-[#D9176C] text-3xl cursor-pointer"
        onClick={() => setShowNav(!showNav)}
      />
      {showNav && <ModelForNavLink />}
    </div>
  );
};

export default LinkForNav;
