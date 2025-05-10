import React, { useContext } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";

import Navbar from "./components/Navbar";
import Register from "./components/Register";
import Login from "./components/Login";
import Upload from "./components/Upload";
import Gallery from "./components/Gallery";
import Home from "./components/Home";

import { AuthProvider, AuthContext } from "./components/AuthContext";

const App = () => {
  return (
    <AuthProvider>
      <InnerApp />
    </AuthProvider>
  );
};

const InnerApp = () => {
  const { user } = useContext(AuthContext);

  return (
    <Router>
      <Navbar />
      <div className="container mx-auto p-4">
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/upload"
            element={user ? <Upload /> : <Navigate to="/login" />}
          />
          <Route
            path="/gallery"
            element={user ? <Gallery /> : <Navigate to="/login" />}
          />
          <Route path="/" element={<Home/>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
