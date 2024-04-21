import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Nav from './Common/Nav'
import Home from './All/Home'
import Footer from './Common/Footer'
import Addstudent from './All/Adduser'
import Showstudent from './All/Showstudent'
import Details from './All/Details'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <>

      <ToastContainer />

      <Router>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/addstudent' element={<Addstudent />} />
          <Route path='/showstudent' element={<Showstudent />} />
          <Route path='/details/:slug' element={<Details />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
