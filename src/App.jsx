import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LayoutForNotLocked from './Page/LayoutForNotLocked'
import Login from './Component/Login'
import Register from './Component/Register'
import ForgetPassword from './Component/ForgetPassword'
import ResetPassword from './Component/ResetPassword'
import CreateNewPassword from './Component/CreateNewPassword'
import Home from './Page/Home'

const App = () => {
  return (
	<div>
	  <BrowserRouter>
	  	<Routes>
			{/*  عامل المسار كدا دلوقتي بس عشان مش كل مادخل احتاج اكتب ال  path بعد كدا هيبقا path='/login'  */}
			<Route path='/' element={<LayoutForNotLocked/>}>
				<Route index element={<Login/>} />
				<Route path='register' element={<Register/>} />
				<Route path='forget' element={<ForgetPassword/>} />
				<Route path='reset' element={<ResetPassword/>} />
				<Route path='password' element={<CreateNewPassword/>} />
				<Route path='home' element={<Home/>} />

			</Route>
		</Routes>
	  </BrowserRouter>
	</div>
  )
}

export default App
