import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Signup from "./components/Signup";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import Homepage from "./components/HomeComponents/Homepage";
import About from "./components/about/About";
import ContactPage from "./components/contact/ContactPage";
import Header from "./components/HeaderComponents/Header";
import AdminDashboard from "./components/admin/AdminDashboard";
import AdminLogin from "./components/admin/AdminLogin";
import { ToastContainer } from "react-toastify";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/register" element={<Signup />}></Route>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/home" element={<Home />}></Route>
                <Route path="/" exact Component={Homepage} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route
                    path="/admin/dashboard"
                    element={<AdminDashboard />}
                >
                </Route>
            </Routes>
            <ToastContainer limit={1} />
        </BrowserRouter>
    );
}

export default App;

// <Route
//     path="/admin/login"
//     element={<AdminLogin />}
// >
// </Route>
