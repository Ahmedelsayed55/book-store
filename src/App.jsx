import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LayoutForNotLocked from "./LayoutPage/LayoutForNotLocked";
import Login from "./Component/Login";
import Register from "./Component/Register";
import ForgetPassword from "./Component/ForgetPassword";
import ResetPassword from "./Component/ResetPassword";
import CreateNewPassword from "./Component/CreateNewPassword";
import Home from "./Pages/Home";
import { Toaster } from "react-hot-toast";
import HomeLayout from "./LayoutPage/HomeLayout";
import MainHome from "./Pages/MainHome";
import About from "./Pages/About";
import Profile from "./Pages/Profile";
import Books from "./Pages/Books";
import ProductDetails from "./Pages/ProductDetails";
import Cart from "./Pages/Cart";
import Favorites from "./Pages/Favorites";
import CheckOut from "./Pages/CheckOut";
import Orders from "./Pages/Orders";
import OtherLayout from "./LayoutPage/OtherLayout";

const App = () => {
  return (
    <div>
      <Toaster position="top-center" reverseOrder={false} />
      <BrowserRouter>
        <Routes>
          {/* layout for Authentication */}

          <Route path="/login" element={<LayoutForNotLocked />}>
            <Route path="register" element={<Register />} />
            <Route path="forget" element={<ForgetPassword />} />
            <Route path="reset" element={<ResetPassword />} />
            <Route path="password" element={<CreateNewPassword />} />
            <Route index element={<Login />} />
          </Route>
          {/* layout for main page after login */}
          <Route path="/" element={<HomeLayout />}>
            <Route index element={<MainHome />} />
          </Route>
          {/*  */}
          <Route path="/home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="profile" element={<Profile />} />
          {/*  */}
          {/* Other layout info */}
          <Route path="/info" element={<OtherLayout />}>
            <Route path="books" element={<Books />} />
            <Route path="product" element={<ProductDetails />} />
            <Route path="cart" element={<Cart />} />
            <Route path="favorites" element={<Favorites />} />
            <Route path="checkout" element={<CheckOut />} />
            <Route path="orders" element={<Orders />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
