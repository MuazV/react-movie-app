import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import Main from "../pages/Main";
import MovieDetail from "../pages/MovieDetail";
import Login from "../pages/Login";
import Register from "../pages/Register";
import NotFound from '../pages/NotFound';
import PrivateRouter from "../router/PrivateRouter";
import { UserAuthContextProvider } from "../context/UserAuthContext";

const Router = () => {
  return (
    <BrowserRouter>
      <UserAuthContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/Main" element={<Main />} />
          <Route path="/Login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Main/:id" element={<PrivateRouter><MovieDetail/></PrivateRouter>}/>
        </Routes>
      </UserAuthContextProvider>
    </BrowserRouter>
  );
};

export default Router;
