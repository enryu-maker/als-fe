import React from 'react'
import Header from './Components/Header'
import Footer from './Components/Footer'
import FloatingBtn from './Components/Floatingbtn'
import { Route, Routes } from 'react-router-dom'
import Home from './Screens/Home'
import { useDispatch } from 'react-redux'
import { getCat, getContact, getLogo } from './Store/actions'
import Info from './Screens/Info'

export default function App() {
  const dispatch = useDispatch()
  React.useEffect(() => {
    dispatch(getCat())
    dispatch(getLogo())
    dispatch(getContact())

  }, [dispatch])

  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home/:slug' element={<Info />} />

      </Routes>
      <div className=' flex items-center justify-end z-50 p-10 fixed bottom-0 right-0'>
        <FloatingBtn />
      </div>
      <Footer />

    </div>
  )
}
