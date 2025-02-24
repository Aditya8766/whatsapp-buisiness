import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/login/Login";
import Signup from "./components/signUp/SignUp";
import { AuthProvider } from "./context/AuthContext";
import Home from "./components/home/Home";
import Header from "./components/header/Header";
import ContactUs from "./components/footer/ContactUs";
import "./App.css";
import FloatingWhatsApp from "./components/floating-whatsapp-icon/FloatingWhatsApp";

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="app">
          <Header />
          <div className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
            </Routes>
          </div>
          <FloatingWhatsApp/>
          <ContactUs />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App
