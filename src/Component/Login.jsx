import axios from "axios";
import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import { FcGoogle } from "react-icons/fc";
import { MdOutlineFacebook } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { domain } from "../Store";
import * as Yup from "yup";
const Login = () => {
  const navigate = useNavigate()
  const handelLogin = (values) => {
    axios
      .post(domain + "/login", values)
      .then((res) => {
        console.log(res);
        navigate("/home")
      })
      .catch((err) => {
         console.log("STATUS:", err.response?.status);
  console.log("ERROR DATA:", err.response?.data);
      });
  };
  const loginSchema = Yup.object({
  email: Yup.string()
    .email("Email is not valid")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});
  return (
    <div className=" py-16">
      <h1 className="text-center py-10 text-[#D9176C]">Welcome Back!</h1>
      <Formik
        validationSchema={loginSchema}
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => {
          handelLogin(values);
        }}
      >
        <Form className="w-full px-4 md:w-169 flex flex-col gap-5 mx-auto">
          <label className="flex flex-col gap-2">
            Email
            <Field
              name="email"
              type="text"
              placeholder="example@gmail.com "
              className=" p-4 rounded-lg border border-[#22222233]/20 outline-0"
            />
          </label>
          <ErrorMessage name="email" component={"p"} className="text-red-500" />

          <label className="flex flex-col gap-2 ">
            Password
            <Field
              name="password"
              type="password"
              placeholder="Enter Password"
              className=" p-4 rounded-lg border border-[#22222233]/20 outline-0"
            />
          </label>
          <ErrorMessage
            name="password"
            component={"p"}
            className="text-red-500"
          />
          <div className="w-full flex justify-between">
            <label className="flex gap-3 cursor-pointer">
              <input type="checkbox" />
              Remember me
            </label>
            <Link to={"/forget"} className="text-[#D9176C]">
              Forget Password ?
            </Link>
          </div>

          <button
            type="submit"
            className="p-3 bg-[#D9176C] rounded-lg text-white cursor-pointer"
          >
            Log in
          </button>
          <div className="flex flex-col gap-10  w-full">
            <p className="text-center">
              don't have an account{" "}
              <Link to={"/register"} className="text-[#D9176C]">
                Sign Up
              </Link>{" "}
            </p>
            <p className="text-center">OR</p>
            <div className="flex flex-col gap-3 w-full  ">
              <button className="bg-white p-4 shadow-lg flex justify-center cursor-pointer rounded-lg gap-2">
                <FcGoogle /> Log in with Google
              </button>
              <button className="bg-white p-4 shadow-lg flex justify-center cursor-pointer rounded-lg gap-2">
                <MdOutlineFacebook className="text-blue-700" /> Log in with
                Facebook
              </button>
            </div>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default Login;
