import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// components
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';

// pages
import Home from './Pages/Home/Home';
import SignIn from './Pages/SignIn/SignIn';

import './App.css';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
