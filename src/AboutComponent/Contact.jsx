import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { BiPhoneCall } from "react-icons/bi";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineMessage } from "react-icons/md";
import * as Yup from "yup";
import { domain } from "../Store";

const Contact = () => {
  const token =
    localStorage.getItem("token") || sessionStorage.getItem("token");
  const ContactSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    subject: Yup.string().required("Subject is required"),
    message: Yup.string().required("Message is required"),
  });

  const initialValues = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };

  const handleSubmit = (values) => {
    axios
      .post(domain + "/contacts/store", values, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log("STATUS:", err.response?.status);
        console.log("DATA:", err.response?.data);
      });
  };

  return (
    <div className="min-h-screen w-full flex items-center  bg-[#3B2F4A] px-4">
      <div className="w-full max-w-282 mx-auto flex justify-between gap-10 text-white">
        {/* Left Side */}
        <div className="w-full md:w-148 flex flex-col gap-10">
          <div>
            <h2 className="text-4xl font-bold mb-4">
              Have a Questions?
              <br /> Get in Touch
            </h2>
            <p className="text-gray-300 max-w-md">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et
              ultricies est. Aliquam in justo varius, sagittis neque ut,
              malesuada leo.
            </p>
          </div>

          <Formik
            initialValues={initialValues}
            validationSchema={ContactSchema}
            onSubmit={handleSubmit}
          >
            <Form className="flex flex-col gap-6 items-center">
              <div className="grid md:grid-cols-2 gap-4 w-full ">
                <div>
                  <Field
                    name="name"
                    placeholder="Name"
                    className="w-full bg-transparent border border-gray-400 rounded-lg px-4 py-3 outline-none"
                  />
                  <ErrorMessage
                    name="name"
                    component="p"
                    className="text-red-400 text-sm mt-1"
                  />
                </div>

                <div>
                  <Field
                    name="email"
                    placeholder="Email Address"
                    className="w-full bg-transparent border border-gray-400 rounded-lg px-4 py-3 outline-none"
                  />
                  <ErrorMessage
                    name="email"
                    component="p"
                    className="text-red-400 text-sm mt-1"
                  />
                </div>
              </div>

              <div className="w-full">
                <Field
                  name="subject"
                  placeholder="Subject"
                  className="w-full bg-transparent border border-gray-400 rounded-lg px-4 py-3 outline-none"
                />
                <ErrorMessage
                  name="subject"
                  component="p"
                  className="text-red-400 text-sm mt-1"
                />
              </div>

              <div className="w-full">
                <Field
                  as="textarea"
                  name="message"
                  placeholder="Your Message"
                  rows="5"
                  className="w-full bg-transparent border border-gray-400 rounded-lg px-4 py-3 outline-none resize-none"
                />
                <ErrorMessage
                  name="message"
                  component="p"
                  className="text-red-400 text-sm mt-1"
                />
              </div>

              <button
                type="submit"
                className="bg-pink-600 hover:bg-pink-700 transition px-8 py-3 rounded-lg font-semibold"
              >
                Send Message
              </button>
            </Form>
          </Formik>
        </div>

        {/* Right Side - Form */}
        <div className="mt-10 flex flex-col gap-7">
          <div className="flex items-center gap-4">
            <span className="w-12 h-12 flex items-center justify-center bg-white text-pink-500 rounded-lg">
              <BiPhoneCall className="md:text-2xl" />
            </span>
            <span>01123456789</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="w-12 h-12 flex items-center justify-center bg-white text-pink-500 rounded-lg">
              <MdOutlineMessage className="md:text-2xl" />
            </span>
            <span>example@gmail.com</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="w-12 h-12 flex items-center justify-center bg-white text-pink-500 rounded-lg">
              <FaLocationDot className="md:text-2xl" />
            </span>
            <span>Lorem ipsum dolor sit amet</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
