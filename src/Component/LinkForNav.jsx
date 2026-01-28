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
      <NavLink className=" font-bold " to={"/"}>
        Home
      </NavLink>
      <NavLink className=" font-bold " to={"/books"}>
        Books
      </NavLink>
      <NavLink className="font-bold  " to={"/about"}>
        About us
      </NavLink>
    </nav>
  );
};

export default LinkForNav;
