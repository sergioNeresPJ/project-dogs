import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './Components/Header/Header'
import Home from './Components/Home/Home'
import User from './Components/User/User'
import Login from './Components/Login/Login'
import { UserStorage } from './UserContext'
import './App.css'
import ProtectedRoute from './Components/ElementsInterface/ProtectedRoute'


function App() {
  return (
    <BrowserRouter>
      <UserStorage>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login/*" element={<Login />} />
          <Route path="conta/*" element={<ProtectedRoute><User /></ProtectedRoute>} />
        </Routes>
      </UserStorage>
    </BrowserRouter>
  )
}

export default App