import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from './pages/LoginPage';  
import SignUpPage from './pages/SignUpPage';
import CreateProduct from './pages/CreateProduct';
import Home from './pages/Home';
import "./App.css";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/create-product" element={<CreateProduct/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
