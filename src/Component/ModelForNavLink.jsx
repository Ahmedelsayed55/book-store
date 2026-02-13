import React from "react";
import { NavLink } from "react-router-dom";
import bockMarck from "../assets/Vector.png";
const ModelForNavLink = () => {
  return (
    <div className="w-full block absolute left-0 top-25 z-50 bg-black/50 rounded-2xl  p-6">
      <nav className="flex flex-col  gap-12 text-white">
        <NavLink className="flex gap-3 " to={"/"}>
          <img src={bockMarck} alt="" />
          <p className="">Bookshop</p>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `font-bold ${isActive ? "text-[#EAA451]" : ""}`
          }
          to={"/"}
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `font-bold ${isActive ? "text-[#EAA451]" : ""}`
          }
          to={"/info/books"}
        >
          Books
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `font-bold ${isActive ? "text-[#EAA451]" : ""}`
          }
          to={"/about"}
        >
          About us
        </NavLink>
      </nav>
    </div>
  );
};

export default ModelForNavLink;
