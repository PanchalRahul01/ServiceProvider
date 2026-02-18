import './App.css'
import Header from './components/Header.jsx'
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home.jsx';
import Ser from "./pages/Services.jsx";
import Login from "./pages/EmailLogin.jsx";
import Signup from "./pages/signup.jsx";
import ForgotPassword from "./pages/forgotepass.jsx";

function App() {


  

  return (
    <>
        
      <BrowserRouter>
        <div className="nav-container">
          <Header/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/services" element={<Ser/>} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
          </Routes> 
        </div>
      </BrowserRouter>
      
    </>
  );
}

export default App;
