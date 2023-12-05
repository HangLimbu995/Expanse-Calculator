import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './components/login/Login'
import Register from './components/register/Register'
import NewHome from './pages/NewHome'

const AppRouting = () => {
  return (
    <div>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<NewHome />} />
    <Route path='/signin' element={<Login />} />
    <Route path='/signup' element={<Register />} />
    </Routes>
    </BrowserRouter>
    </div>
  )
}

export default AppRouting