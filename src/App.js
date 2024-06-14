import React from 'react'
import Header from './Components/Header'
import Footer from './Components/Footer'
import FloatingBtn from './Components/Floatingbtn'
import { Route, Router, Routes } from 'react-router-dom'
import Home from './Screens/Home'
export default function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      <div className=' flex items-center justify-end z-50 p-10 fixed bottom-0 right-0'>
        <FloatingBtn />
      </div>
      <Footer />

    </div>
  )
}
