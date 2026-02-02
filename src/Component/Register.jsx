import axios from "axios";
import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import { FcGoogle } from "react-icons/fc";
import { MdOutlineFacebook } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { domain} from "../Store";
import * as Yup from "yup";
const Register = () => {
  const navigate = useNavigate();
  const handelRegister = (values) => {
    axios
      .post(domain + "/register", values)
      .then((res) => {
        console.log(res.data)

        navigate("/login");
      })
      .catch((err) => {
        console.log("STATUS:", err.response?.status);
        console.log("ERROR DATA:", err.response?.data);
      });
  };
  const registerSchema = Yup.object().shape({
    first_name: Yup.string()
      .min(2, "First name is too short")
      .required("First name is required"),
    last_name: Yup.string()
      .min(2, "Last name is too short")
      .required("Last name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    password_confirmation: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm your password"),
  });


  return (
    <div className=" py-16">
      <Formik
        initialValues={{
          first_name: "",
          last_name: "",
          email: "",
          password: "",
          password_confirmation: "",
        }}
        validationSchema={registerSchema}
        onSubmit={(values) => {
          handelRegister(values);
        }}
      >
        <Form className="w-full px-4 md:w-169 flex flex-col gap-5 mx-auto">
          <div className="flex flex-col md:flex-row gap-5">
            <div className="flex flex-col">
              <label className="flex flex-col gap-2">
                First Name
                <Field
                  name="first_name"
                  type="text"
                  placeholder="john "
                  className=" p-4 rounded-lg border border-[#22222233]/20 outline-0"
                />
              </label>
              <ErrorMessage
                name="first_name"
                component={"p"}
                className="text-red-500"
              />
            </div>
            <div className="flex flex-col">
              <label className="flex flex-col gap-2">
                Last Name
                <Field
                  name="last_name"
                  type="text"
                  placeholder="smith"
                  className=" p-4 rounded-lg border border-[#22222233]/20 outline-0"
                />
              </label>
              <ErrorMessage
                name="last_name"
                component={"p"}
                className="text-red-500"
              />
            </div>
          </div>
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

          <label className="flex flex-col gap-2 ">
            Confirm Password
            <Field
              name="password_confirmation"
              type="password"
              placeholder="Enter Password"
              className=" p-4 rounded-lg border border-[#22222233]/20 outline-0"
            />
          </label>
          <ErrorMessage
            name="password_confirmation"
            component={"p"}
            className="text-red-500"
          />

          <label className="flex gap-3 cursor-pointer">
            <input type="checkbox" />
            Agree with{" "}
            <span className="text-[#D9176C]">Terms & Conditions</span>
          </label>

          <button
            type="submit"
            className="p-3 bg-[#D9176C] rounded-lg text-white cursor-pointer"
          >
            Sign Up
          </button>
          <div className="flex flex-col gap-10  w-full">
            <p className="text-center">
              Already have an account?{" "}
              <Link to={"/login"} className="text-[#D9176C]">
                Log in
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

export default Register;
