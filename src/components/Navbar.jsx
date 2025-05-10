import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./AuthContext";
import Button from "./hooks/button";



const Navbar = () => {

  const { user, logout } = useContext(AuthContext);

  return (
    <nav className="bg-gray-950 text-white p-4">
      <div className=" max-w-7xl mx-3 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold hover:underline">
         Home
        </Link>
        <div>
          {user ? (
            <>
              <Link
                to="/upload"
                className="mr-4 text-white hover:text-gray-300 hover:underline"
              >
                Upload
              </Link>
              <Link
                to="/gallery"
                className="mr-4 text-white hover:text-gray-300 hover:underline"
              >
                Gallery
              </Link>
              <button
                onClick={logout}
                className="bg-white text-gray-900 px-4 py-2 rounded hover:px-5 "
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="mr-4 text-white hover:text-gray-300"
              >
                <Button text={"Signin"} />  
              </Link>
              <Link
                to="/register"
                className="text-white hover:text-gray-300"
              >
              <Button text={"Signup"} />  
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
