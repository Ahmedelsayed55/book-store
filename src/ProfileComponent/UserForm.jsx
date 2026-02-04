import axios from "axios";
import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import { domain } from "../Store";
import toast from "react-hot-toast";
const UserForm = ({ userInfo, token }) => {
  const handelUpdateInfo = (values) => {
    console.log(values);
    axios
      .post(domain + "/profile/update", values, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res);
        toast.success("Updated");
      })
      .catch((err) => {
        console.log("STATUS:", err.response?.status);
        console.log("ERROR DATA:", err.response?.data.message);
        toast.error("Failed to update please try again");
      });
  };
  const registerSchema = Yup.object({
    first_name: Yup.string()
      .min(2, "First name is too short")
      .required("First name is required"),
    last_name: Yup.string()
      .min(2, "Last name is too short")
      .required("Last name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    phone: Yup.string().min(11, "Last name is too short"),
    address: Yup.string().required(),
  });
  return (
    <div className="py-16">
      <Formik
        enableReinitialize
        initialValues={{
          first_name: userInfo?.first_name || "",
          last_name: userInfo?.last_name || "",
          email: userInfo?.email || "",
          phone: userInfo?.phone || "",
          address: userInfo?.address || "",
        }}
        validationSchema={registerSchema}
        onSubmit={(values) => {
          handelUpdateInfo(values);
        }}
      >
        <Form className="flex flex-col items-center gap-5">
          <div className="w-full md:w-169 flex flex-col gap-5 bg-white rounded shadow p-10">
            <h1 className="text-center text-[20px] pb-3 ">
              General information
            </h1>
            <div className="flex flex-col md:flex-row gap-5">
              <div className="flex flex-col">
                <label className="flex flex-col gap-2 text-gray-600">
                  First Name
                  <Field
                    name="first_name"
                    type="text"
                    placeholder="john "
                    className=" p-4 w-full rounded-lg border border-[#22222233]/40 text-black  outline-0"
                  />
                </label>
                <ErrorMessage
                  name="first_name"
                  component={"p"}
                  className="text-red-500"
                />
              </div>
              <div className="flex flex-col">
                <label className="flex flex-col gap-2 text-gray-600">
                  Last Name
                  <Field
                    name="last_name"
                    type="text"
                    placeholder="smith"
                    className=" p-4 w-full rounded-lg border border-[#22222233]/40 text-black  outline-0"
                  />
                </label>
                <ErrorMessage
                  name="last_name"
                  component={"p"}
                  className="text-red-500"
                />
              </div>
            </div>
            <label className="flex flex-col gap-2 text-gray-600">
              Email
              <Field
                name="email"
                type="text"
                placeholder="example@gmail.com "
                className=" p-4 rounded-lg border border-[#22222233]/40 text-black  outline-0"
              />
            </label>
            <ErrorMessage
              name="email"
              component={"p"}
              className="text-red-500"
            />

            <label className="flex flex-col gap-2 text-gray-600">
              Phone
              <Field
                name="phone"
                type="text"
                placeholder="Enter Phone"
                className=" p-4 rounded-lg border border-[#22222233]/40 text-black  outline-0"
              />
            </label>
            <ErrorMessage
              name="phone"
              component={"p"}
              className="text-red-500"
            />

            <label className="flex flex-col gap-2  text-gray-600">
              Address
              <Field
                name="address"
                type="text"
                placeholder="Enter Address"
                className=" p-4 rounded-lg border border-[#22222233]/40  text-black outline-0"
              />
            </label>
            <ErrorMessage
              name="address"
              component={"p"}
              className="text-red-500"
            />
          </div>

          <button
            type="submit"
            className="py-3 px-12 bg-[#D9176C] rounded-lg text-white cursor-pointer w-fit"
          >
            Update information
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default UserForm;
