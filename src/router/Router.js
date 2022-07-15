import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import Main from "../pages/Main";
import MovieDetail from "../pages/MovieDetail";
import Login from "../pages/Login";

const Router = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/MovieDetail/:id" element={<MovieDetail />}/>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
