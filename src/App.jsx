import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LayoutForNotLocked from "./LayoutPage/LayoutForNotLocked";
import Login from "./Component/Login";
import Register from "./Component/Register";
import ForgetPassword from "./Component/ForgetPassword";
import ResetPassword from "./Component/ResetPassword";
import CreateNewPassword from "./Component/CreateNewPassword";
import Home from "./Component/Home";
import { Toaster } from "react-hot-toast";
import HomeLayout from "./LayoutPage/HomeLayout";
import MainHome from "./ComponentMainLayout/MainHome";

const App = () => {
  return (
    <div>
      <Toaster position="top-center" reverseOrder={false} />
      <BrowserRouter>
        <Routes>
          {/* layout for Authentication */}
          <Route path="/home" element={<LayoutForNotLocked />}>
            <Route index element={<Home />} />
            <Route path="register" element={<Register />} />
            <Route path="forget" element={<ForgetPassword />} />
            <Route path="reset" element={<ResetPassword />} />
            <Route path="password" element={<CreateNewPassword />} />
            <Route path="login" element={<Login />} />
          </Route>
          {/* layout for main page after login */}
          <Route path="/" element={<HomeLayout />}>
            <Route index element={<MainHome />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
