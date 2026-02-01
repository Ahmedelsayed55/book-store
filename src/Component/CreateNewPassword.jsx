import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup"; // ضروري جداً
import axios from "axios";
import { useNavigate } from "react-router-dom"; // ضروري جداً
import { domain } from "../Store";

const CreateNewPassword = () => {
  const navigate = useNavigate();

  const handleResetPassword = (values) => {
    const info = JSON.parse(localStorage.getItem("userInfo"));
    const email = info.email;
    const data = {
      email: email,
      password: values.password,
      password_confirmation: values.password_confirmation,
      otp: "12345",
    };
    console.log(values);
    axios
      .post(domain + "/reset-password", data)
      .then((res) => {
        localStorage.setItem("userInfo", JSON.stringify(res.data.data.user));
        localStorage.setItem("token", res.data.data.token);
        navigate("/");
      })
      .catch((err) => {
        console.log("STATUS:", err.response?.status);
        console.log("ERROR DATA:", err.response?.data);
      });
  };

  const registerSchema = Yup.object().shape({
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    password_confirmation: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm your password"),
  });

  return (
    <div className="min-h-[70vh] items-center justify-center flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <h2 className="text-[#D9176C] text-center text-[16px]">
          Create new password!
        </h2>
        <p className="text-[#22222280] text-center text-[14px]">
          Create a strong password
        </p>
        <p className="text-[#22222280] text-center text-[14px]">
          Your new password must be different from previous one
        </p>
      </div>
      <Formik
        initialValues={{
          password: "",
          password_confirmation: "",
        }}
        validationSchema={registerSchema}
        onSubmit={(values) => {
          handleResetPassword(values);
        }}
      >
        <Form className="w-full px-4 md:w-169 flex flex-col gap-5 mx-auto">
          <div className="flex flex-col gap-5">
            {/* Password Field */}
            <div className="flex flex-col gap-2">
              <label>Password</label>
              <Field
                name="password"
                type="password"
                placeholder="Enter Password"
                className="p-4 rounded-lg border border-[#22222233]/20 outline-0"
              />
              <ErrorMessage
                name="password"
                component="p"
                className="text-red-500 text-sm"
              />
            </div>

            {/* Confirm Password Field */}
            <div className="flex flex-col gap-2">
              <label>Confirm Password</label>
              <Field
                name="password_confirmation"
                type="password"
                placeholder="Confirm Password"
                className="p-4 rounded-lg border border-[#22222233]/20 outline-0"
              />
              <ErrorMessage
                name="password_confirmation"
                component="p"
                className="text-red-500 text-sm"
              />
            </div>

            <button
              type="submit"
              className="p-3 bg-[#D9176C] rounded-lg text-white cursor-pointer hover:bg-[#b01257] transition-colors"
            >
              Reset password
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default CreateNewPassword;
