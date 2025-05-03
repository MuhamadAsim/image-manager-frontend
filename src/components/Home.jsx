import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center px-4">
      <h1 className="text-4xl font-bold mb-4 text-blue-600">Welcome to ImageVault</h1>
      <p className="text-lg text-gray-700 mb-6 text-center max-w-xl">
        ImageVault is a simple and secure web app that allows you to upload, store, and view your images anytime. 
        Easily manage your personal gallery in one place.
      </p>

      <div className="flex space-x-4">
        <Link
          to="/register"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Get Started
        </Link>
        <Link
          to="/login"
          className="bg-gray-300 text-gray-800 px-6 py-2 rounded-lg hover:bg-gray-400 transition"
        >
          Login
        </Link>
      </div>

      <img
        src="https://source.unsplash.com/featured/?gallery,upload"
        alt="Gallery preview"
        className="mt-10 w-full max-w-2xl rounded-xl shadow-md"
      />
    </div>
  );
};

export default Home;
