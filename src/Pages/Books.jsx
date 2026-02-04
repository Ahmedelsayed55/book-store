import React, { useState } from "react";
import SideFilter from "../BooksComponent/SideFilter";
import Search from "../BooksComponent/Search";
import Categories from "../BooksComponent/Categories";
import BooksProducts from "../BooksComponent/BooksProducts";
const Books = () => {
  const categories = [
    { name: "Business" },
    { name: "Kids" },
    { name: "Art" },
    { name: "History" },
    { name: "Romance" },
    { name: "Fantasy" },
    { name: "Self Help" },
    { name: "Cooking" },
    { name: "Sports" },
  ];
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]);
  return (
    <div className="flex justify-center text-black ">
      <div className="container flex flex-col lg:flex-row gap-10 ">
        {/* side menu for category */}
        <div>
          <SideFilter
            categories={categories}
            selectedCategories={selectedCategories}
            onChange={setSelectedCategories}
          />
        </div>
        {/* main page for product */}
        <div className="w-full flex flex-col gap-5 py-16 min-h-screen">
          <Search />
          <Categories
            categories={categories}
            selected={selectedCategory}
            onSelect={setSelectedCategory}
          />
          <BooksProducts
            category={selectedCategory}
            categories={selectedCategories}
          />
        </div>
      </div>
    </div>
  );
};

export default Books;
