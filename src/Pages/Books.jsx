import  { useState } from "react";
import SideFilter from "../BooksComponent/SideFilter";
import Search from "../BooksComponent/Search";
import Categories from "../BooksComponent/Categories";
import BooksProducts from "../BooksComponent/BooksProducts";
// import axios from "axios";
// import { domain } from "../store/Store";
const Books = () => {
  const categories =  [
    { name: "Business" },
    { name: "Kids" },
    { name: "Art" },
    { name: "History" },
    { name: "Romance" },
    { name: "Fantasy" },
    { name: "Self Help" },
    { name: "Cooking" },
    { name: "Sports" },
  ]
  // const [books, setBooks] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]);
  // useEffect(() => {
  //   axios
  //     .get(domain + "/book")
  //     .then((res) => {
  //         console.log(res.data.data);
  //       // setBooks(res.data.data.Books);
  //       // setBooks(res.data.data.categories);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);
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
            // books={books}
            category={selectedCategory}
            categories={selectedCategories}
          />
        </div>
      </div>
    </div>
  );
};

export default Books;
