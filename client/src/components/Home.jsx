import React from "react";
import { NavLink } from "react-router-dom";
import Register from "./Register";

function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h2 className="text-2xl font-bold mb-4">This is the home page</h2>
      <div className="space-x-4">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
          <NavLink to={"/register"}>Register</NavLink>
        </button>
        <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600">
          <NavLink to={'/login'}>Login</NavLink>
        </button>
      </div>
    </div>
  );
}

export default Home;
