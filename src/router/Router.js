import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Main from '../pages/Main';

const Router = () => {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
        <Route path="/" element={<Main/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default Router