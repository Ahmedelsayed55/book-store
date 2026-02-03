import React, { useState } from "react";
import SideFilter from "../BooksComponent/SideFilter";
import Search from "../BooksComponent/Search";
import Categories from "../BooksComponent/Categories";
import BooksProducts from "../BooksComponent/BooksProducts";
import imgBook from "../assets/hero2.png";
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
  const products = [
    {
      id: 1,
      title: "Book 1",
      category: "Business",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et ultricies est. Aliquam in justo varius, sagittis neque ut, malesuada leo. Aliquam in justo varius, sagittis neque ut, malesuada leo.",
      review:120,
      rate:4.5,
      price:29.99,
      author: "Robert T. Kiyosaki",
      year: 1997,
      img:imgBook
    },
    {
      id: 2,
      title: "Book 2",
      category: "Kids",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et ultricies est. Aliquam in justo varius, sagittis neque ut, malesuada leo. Aliquam in justo varius, sagittis neque ut, malesuada leo.",
      review:120,
      rate:4.5,
      price:29.99,
      author: "Robert T. Kiyosaki",
      year: 1997,
      img:imgBook
    },
    {
      id: 3,
      title: "Book 3",
      category: "Art",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et ultricies est. Aliquam in justo varius, sagittis neque ut, malesuada leo. Aliquam in justo varius, sagittis neque ut, malesuada leo.",
      review:120,
      rate:4.5,
      price:29.99,
      author: "Robert T. Kiyosaki",
      year: 1997,
      img:imgBook
    },
    {
      id: 4,
      title: "Book 4",
      category: "History",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et ultricies est. Aliquam in justo varius, sagittis neque ut, malesuada leo. Aliquam in justo varius, sagittis neque ut, malesuada leo.",
      review:120,
      rate:4.5,
      price:29.99,
      author: "Robert T. Kiyosaki",
      year: 1997,
      img:imgBook
    },
    {
      id: 5,
      title: "Book 5",
      category: "Romance",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et ultricies est. Aliquam in justo varius, sagittis neque ut, malesuada leo. Aliquam in justo varius, sagittis neque ut, malesuada leo.",
      review:120,
      rate:4.5,
      price:29.99,
      author: "Robert T. Kiyosaki",
      year: 1997,
      img:imgBook
    },
    {
      id: 6,
      title: "Book 6",
      category: "Fantasy",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et ultricies est. Aliquam in justo varius, sagittis neque ut, malesuada leo. Aliquam in justo varius, sagittis neque ut, malesuada leo.",
      review:120,
      rate:4.5,
      price:29.99,
      author: "Robert T. Kiyosaki",
      year: 1997,
      img:imgBook
    },
    {
      id: 7,
      title: "Book 7",
      category: "Self Help",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et ultricies est. Aliquam in justo varius, sagittis neque ut, malesuada leo. Aliquam in justo varius, sagittis neque ut, malesuada leo.",
      review:120,
      rate:4.5,
      price:29.99,
      author: "Robert T. Kiyosaki",
      year: 1997,
      img:imgBook
    },
    {
      id: 8,
      title: "Book 8",
      category: "Cooking",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et ultricies est. Aliquam in justo varius, sagittis neque ut, malesuada leo. Aliquam in justo varius, sagittis neque ut, malesuada leo.",
      review:120,
      rate:4.5,
      price:29.99,
      author: "Robert T. Kiyosaki",
      year: 1997,
      img:imgBook
    },
    {
      id: 9,
      title: "Book 9",
      category: "Sports",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et ultricies est. Aliquam in justo varius, sagittis neque ut, malesuada leo. Aliquam in justo varius, sagittis neque ut, malesuada leo.",
      review:120,
      rate:4.5,
      price:29.99,
      author: "Robert T. Kiyosaki",
      year: 1997,
      img:imgBook
    },
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
            products={products}
            category={selectedCategory}
            categories={selectedCategories}
          />
        </div>
      </div>
    </div>
  );
};

export default Books;
