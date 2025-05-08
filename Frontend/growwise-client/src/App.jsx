import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login.jsx';
import Signup from './components/Signup.jsx';
import Dashboard from "./components/Dashboard.jsx";
import Navbar from './components/Navbar.jsx';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/Login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/dashboard" element={<Dashboard />} />

    </Routes>
  </BrowserRouter>
);

export default App;