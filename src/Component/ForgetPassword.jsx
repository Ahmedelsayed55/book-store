import axios from 'axios'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import React from 'react'
import * as Yup from 'yup'
import { domain } from '../Store'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
const ForgetPassword = () => {
  const navigate = useNavigate()
  const handelForget = (values)=>{
    console.log(values)
    axios.post(domain + "/forget-password", values).then((res)=>{
      console.log(res)
      toast.success('Successfully')
      navigate('/login/reset')
    }).catch((err)=>{
      toast.error(err.response?.data.errors.email[0])
              console.log("STATUS:", err.response?.status);
        console.log("ERROR DATA:", err.response?.data);
    })
  }
  const handelSchema =Yup.object({
    email: Yup.string()
      .email("Email is not valid")
      .required("Email is required"),
  })
  return (
    <div className='py-16 flex flex-col gap-10 h-[70vh]'>
      <h1 className='text-center text-[#D9176C]'>Forget Password?</h1>
      <p className='text-center text-[#22222280]'>Enter your email to reset your password</p>
      <Formik initialValues={{email:""}} onSubmit={(values)=>{handelForget(values)}} validationSchema={handelSchema}>
        <Form className="w-full px-4 md:w-169 flex flex-col gap-5 mx-auto">
          <label className='flex flex-col gap-4'>
            Email
            <Field name="email" placeholder="example@gmail.com" className=" p-4 rounded-lg border border-[#22222233]/20 outline-0"/>
          </label>
           <ErrorMessage name="email" component={"p"} className="text-red-500" />
           <button type='submit' className='p-3 bg-[#D9176C] rounded-lg text-white cursor-pointer'>Send reset code</button>
        </Form>
      </Formik>
    </div>
  )
}

export default ForgetPassword
